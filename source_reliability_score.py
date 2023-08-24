# streamlit_app.py
#--------------------------- IMPORTS ---------------------------------+
import pandas as pd
import streamlit as st
import datetime
import re
from streamlit_card import card
from streamlit_elements import elements, mui, html
from langchain.llms import OpenAI
from apikey import apikey
import openai
import os
import time
import gspread
from oauth2client.service_account import ServiceAccountCredentials

os.environ["OPENAI_API_KEY"] = apikey
openai.api_key = apikey


#---------------- Authenticate with Google Sheets API ---------------------------------+
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
credentials = ServiceAccountCredentials.from_json_keyfile_name(".streamlit/credentials.json", scope)
client = gspread.authorize(credentials)
# st.success("connection done")

# Open the Google Sheet by its title
sheet = client.open("sebi-hackathon-db")
# st.success("Sheet loaded")

worksheet = sheet.get_worksheet(0)  # Assuming we want to work with the first worksheet
# st.success("Worksheet loaded")

# -------------------Read in data from the Google Sheet -------------------------------+
@st.cache_data(ttl=600)
def load_data(sheets_url):
    csv_url = sheets_url.replace("/edit?usp=sharing", "/export?format=csv&gid=0")
    return pd.read_csv(csv_url,on_bad_lines='skip')

#----------------------------------------------------+
url = st.secrets['public_gsheets_url']
link_text = "Click here to see the actual Google Sheet Database!"
link = f"<a href=\"{url}\" style='text-align: center; color: #1e0096;'>{link_text}</a>"

score_prompt = """Verify the above statement misleading or not. The output should contain only either MISLEADING or NOT MISLEADING. Do not output any other sentence apart from what I mentioned. Not even the sentence like \"Sure, here are the financial terms extracted from the given sentence:\" Print output in a single line."""

#--------------------------- FUNCTIONS ---------------------------------+
def score_response(actual_prompt):
    llm = OpenAI(temperature=0.9)
    time.sleep(21)
    response = llm(actual_prompt + score_prompt)
    
    resp = re.sub(r'[^a-zA-Z]', '', response)

    if(resp == 'MISLEADING' or resp == 'misleading'):
        return -1
    elif(resp == 'NOTMISLEADING' or resp == 'notmisleading'):
        return 1
    
    return 0

def add_details_source(source_name,source_type,response):
    time_stamp = datetime.datetime.now()
    score = score_response(response)
    #Define the data for the new row
    new_row_data = [str(time_stamp),source_name,source_type,response,score]
    worksheet.append_row(new_row_data)
    st.success("Row appended")

    


def update_scores():
    df = load_data(st.secrets["public_gsheets_url"])
    mean_scores = df.groupby('source_name')['score'].sum().reset_index()
    ranking_df = mean_scores.sort_values(by='score', ascending=False)
    ranking_df.reset_index(inplace=True, drop=True)
    ranking_df.reset_index(inplace=True)
    ranking_df.rename(columns={'index':'rank'},inplace=True)
    ranking_df['rank'] = ranking_df['rank']+1

    return ranking_df

#--------------------------- DISPLAY SCORES ---------------------------------+
def display_source_scores():
    ranking_df = update_scores()
    st.markdown(link, unsafe_allow_html=True)
    for i in range(4):
        with elements(f"new_elem_{i}"):
            with mui.Card(sx={ "maxWidth": 345,"color":"#1e0096" }):
                with mui.CardActionArea():
                    with mui.CardContent():
                        mui.Typography(f"{ranking_df.iloc[i]['source_name']}", gutterBottom=True, variant="h4", component="div")
                        mui.Typography(f"Rank: {ranking_df.iloc[i]['rank']}", variant="h6", color="#006996")
                        mui.Typography(f"Score: {ranking_df.iloc[i]['score']}", variant="h6", color="#151f1b")

                with mui.CardActions():
                    mui.Button("Share", size="small", color="primary")


