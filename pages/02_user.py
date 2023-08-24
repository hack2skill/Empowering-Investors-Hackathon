# --- IMPORT DEPENDENCIES -------------------------------+
import sys
import streamlit as st

# setting path

sys.path.append("../prompts")
sys.path.append("../utils")

from prompts import *
from utils import *
from streamlit_option_menu import option_menu


# --- TITLE --------------------------------------------+
with st.columns(3)[1]:
    st.image("media/smart_with_sebi.jpeg", width=200)

st.markdown("<h2 style='text-align: center; color: black;'> USER PORTAL<hr></h2>", unsafe_allow_html=True)


# --- OPTION MENU --------------------------------------+
selected = option_menu(
    menu_title=None,
    options=["TEXT", "AUDIO", "VIDEO", "IMAGE", "QnA"],
    icons=["card-text", "volume-up", "camera-reels", "image", "question-circle"],
    menu_icon="cast",
    orientation="horizontal",
    styles={
        "container": {"padding": "0!important", "background-color": "#fafafa"},
        "icon": {"color": "orange", "font-size": "25px"}, 
        "nav-link": {"font-size": "20px", "text-align": "left", "margin":"0px", "--hover-color": "#eee"},
        "nav-link-selected": {"background-color": "indigo"},
    },
)

# Main content based on user's selected
if selected == "TEXT":
    st.write("**TEXT BASED CLAIM DETECTION:**\n\n")
    prompt = st.text_area("User Input")

    if st.button("Submit") and prompt:
        claim_detection_pipeline(prompt)
        financial_points = financial_point_extractor(prompt)
        display_video_links(financial_points)
        # display_articles(financial_points)


if selected == "AUDIO":
    st.write("**AUDIO BASED CLAIM DETECTION:**")
    audio_file = st.file_uploader("Upload an audio file", type=["ogg", "mp3", "wav"])

    if audio_file:
        st.audio(audio_file, format="audio/ogg", start_time=0)
        transcript = transcribe_audio(audio_file)
        prompt = st.text_area("Transcribed User Input", value=transcript)
        if st.button("Submit") and prompt:
            claim_detection_pipeline(prompt)
            financial_points = financial_point_extractor(prompt)
            display_video_links(financial_points)


if selected == "IMAGE":
    st.write("**IMAGE BASED CLAIM DETECTION:**")
    image_file = st.file_uploader("Upload an image file", type=["png", "jpg", "jpeg"])

    if image_file:
        st.image(
            image_file, caption="Uploaded Image.", use_column_width=True, width=300
        )
        text_from_image = get_text_from_image(image_file)
        prompt = st.text_area("User input image to text:", value=text_from_image)

        if st.button("Submit") and prompt:
            claim_detection_pipeline(prompt)
            financial_points = financial_point_extractor(prompt)
            display_video_links(financial_points)

if selected == "QnA":
    st.write("**Question - Answering**")
    prompt = st.text_area("User Input")

    if st.button("Submit") and prompt:
        question_and_answer(prompt)

if selected == "VIDEO":
        st.write("**VIDEO BASED CLAIM DETECTION:**")
        video_file = st.file_uploader("Upload a video file", type=["mp4", "mov", "avi"])

        if video_file:
            st.video(video_file, start_time=0)
            #----------------------------------------
            transcript = video_to_text(video_file)
            #----------------------------------------
            prompt = st.text_area("Transcribed User Input", value=transcript)
            
            if st.button("Submit") and prompt:
                claim_detection_pipeline(prompt)
                financial_points = financial_point_extractor(prompt)
                display_video_links(financial_points)