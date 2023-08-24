import streamlit as st

import gspread
from oauth2client.service_account import ServiceAccountCredentials

# Authenticate with Google Sheets API
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
credentials = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", scope)
client = gspread.authorize(credentials)

st.success("connection done")

# Open the Google Sheet by its title
sheet = client.open("sebi-hackathon-db")
st.success("Sheet loaded")

worksheet = sheet.get_worksheet(0)  # Assuming you want to work with the first worksheet
st.success("Worksheet loaded")

# # Define the data for the new row
new_row_data = ["Value1", "Value2", "Value3","Val4","val5"]

# # Append the new row to the worksheet
worksheet.append_row(new_row_data)

st.success("Row appended")
