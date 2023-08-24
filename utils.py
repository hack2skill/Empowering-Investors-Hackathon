#----------------- IMPORTS -----------------+
import sys
import streamlit as st
from apikey import apikey
from prompts import *
import time

from langchain.llms import OpenAI
import os
import re
import openai
from transformers import pipeline  # Import pipeline from transformers
from langchain.agents import load_tools
from pydub import AudioSegment
from moviepy.editor import VideoFileClip
from streamlit_option_menu import option_menu
from streamlit_player import st_player
from langchain.tools import YouTubeSearchTool
import requests
from bs4 import BeautifulSoup
import pytesseract
import cv2
from PIL import Image
 
#--- SET API KEYS AND ENVIRONMENT VARIABLES ------------+
# st.set_page_config(
#     page_title="Smart With Sebi - USER",
#     page_icon=":detective:",
#     layout="wide",
# )

os.environ["OPENAI_API_KEY"] = apikey
openai.api_key = apikey



# ------ Function to transcribe audio -----------------+
def transcribe_audio(audio_file):
    transcript = openai.Audio.transcribe("whisper-1", audio_file)
    return transcript['text']
    
# ------ Sentiment Analyzer -----------------+
def sentiment_analyzer(text):
    sentiment_analyzer_pipe = pipeline("sentiment-analysis")
    return sentiment_analyzer_pipe(text)[0]['label']

# ------ Financial Point Extractor -----------------+
def financial_point_extractor(prompt):
    #Financial points extraction
    llm = OpenAI(temperature=0.9)  
    financial_points = llm(prompt + financial_point_prompt)
    return financial_points

# ------ Video Link Extractor -----------------+
def get_video_links(financial_points):
    tool = YouTubeSearchTool()
    financial_points= re.sub(r'[^a-zA-Z, ]', '', financial_points)
    all_links = []
    for concept in financial_points.split(","):
        search_results = tool.run("Investopedia: "+concept,1)
        # Remove the starting "['" and ending "']"
        cleaned_links_string = search_results[2:-2]

        # Split the cleaned string into individual links
        links = cleaned_links_string.split("', '")

        # Format links into https format
        https_links = [f"https://www.youtube.com{link}" for link in links]
        all_links.extend(https_links)
    
    return set(all_links)

# ------ Display Video Links -----------------+
def display_video_links(finance_points):
    video_links = get_video_links(finance_points)

    st.write("**VIDEO LINKS**")
    with st.expander("📹Video Links📹"):
        for link in video_links:
            st_player(link)

# ------ Display Articles -----------------+
def get_articles(financial_points, num_articles=2):
    articles = []
    
    for concept in financial_points:
        query = f"Explain the concept: {concept} "
        search_url = f"https://www.google.com/search?q={query}&num={num_articles}"
        
        response = requests.get(search_url)
        soup = BeautifulSoup(response.content, "html.parser")
        
        for result in soup.find_all("div", class_="tF2Cxc"):
            link = result.find("a")["href"]
            title = result.find("h3").get_text()
            articles.append((title, link))
    
    return articles

def display_articles(financial_points):
    articles = get_articles(financial_points)
    st.write("**RELEVANT ARTICLES**")
    with st.expander("📚 Relevant Articles 📚"):
        for title, link in articles:
            st.markdown(f"[{title}]({link})")

# ------ Display SEBI Rules -----------------+
def display_sebi_rules(financial_points):
    time.sleep(21)
    #Extract strictly financial terms
    financial_points= re.sub(r'[^a-zA-Z, ]', '', financial_points)
    llm = OpenAI(temperature=0.9)
    
    
    # st.write(f"length: {len(financial_points.split(','))}")
    for point in financial_points.split(","):
        time.sleep(21)
        
        st.markdown("<hr>", unsafe_allow_html=True)
        st.write(f"**SEBI rules for {point.upper()}:**")
        fin_rules =  llm(point + sebi_rules_prompt)
        st.write(fin_rules)

    st.markdown("<hr>", unsafe_allow_html=True)
# ------ IMAGE to TEXT -----------------+
def get_text_from_image(image_file):
    #Convert image to text
    img = Image.open(image_file)
    text = pytesseract.image_to_string(img)
    
    return text 


# ------ CLAIM DETECTION PIPELINE -----------------+

def claim_detection_pipeline(prompt):
    transcribed_sentiment = sentiment_analyzer(prompt)
    st.write("Transcribed Input Sentiment:", transcribed_sentiment)

    # Model output
    st.write("Model Output:")
    llm = OpenAI(temperature=0.9)
    response = llm(prompt + claim_prompt)
    # Sentiment analysis for model output
    model_output_sentiment = sentiment_analyzer(response)

    st.write(response)
    st.write("Model Output Sentiment:", model_output_sentiment)

    return response


# ------ QUESTION ANSWERING -----------------+
def question_and_answer(prompt):
    llm = OpenAI(temperature=0.9)
    response = llm(prompt + "\nAnswer the above question.")
    st.write(response)

# ------ VIDEO to TEXT -----------------------------+
# ---- audio detachment from video ----+
def detach_audio(video_file):
    videoclip = VideoFileClip(video_file)
    # st.success("Video read!")
    audio_clip = videoclip.audio
    audio_clip.write_audiofile("audio.mp3")
    audio_clip.close()
    videoclip.close()
    audio_file = open("audio.mp3", "rb")

    return audio_file

def video_to_text(video_file):
    # st.success("Video uploaded!")
    with open("uploaded_video.mp4", "wb") as f:
        f.write(video_file.read())
    
    audio_file = detach_audio("uploaded_video.mp4")
    transcript = transcribe_audio(audio_file)
    audio_file.close()

    return transcript
    
# --------------------- END ---------------------------------+

    