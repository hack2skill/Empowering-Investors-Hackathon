
#--- IMPORT DEPENDENCIES -------------------------------+
import sys
import streamlit as st

# setting path
sys.path.append('../prompts')
sys.path.append('../source_reliability_score')
sys.path.append('../utils')


from source_reliability_score import *
from prompts import *
from utils import *
from streamlit_option_menu import option_menu



# --- TITLE --------------------------------------------+
with st.columns(3)[1]:
    st.image("media/smart_with_sebi.jpeg", width=200)

st.markdown("<h2 style='text-align: center; color: black;'> SEBI PORTAL<hr></h2>", unsafe_allow_html=True)


# --- OPTION MENU --------------------------------------+

choice = option_menu(
    menu_title=None,
    options=["CLAIM DETECTION", "SOURCE RELIABILITY RATING"],
    icons=["database-fill-exclamation", "person-fill-exclamation"],
    menu_icon="cast",
    orientation="horizontal",
    styles={
        "container": {"padding": "0!important", "background-color": "#fafafa"},
        "icon": {"color": "orange", "font-size": "25px"}, 
        "nav-link": {"font-size": "20px", "text-align": "left", "margin":"0px", "--hover-color": "#eee"},
        "nav-link-selected": {"background-color": "indigo"},
    },
)

if choice == "CLAIM DETECTION":
    selected = option_menu(
        menu_title=None,
        options=["TEXT", "AUDIO", "VIDEO","IMAGE","QnA"],
        icons=["card-text", "volume-up", "camera-reels", "image","question-circle"],
        menu_icon="cast",
        orientation="horizontal",
        styles={
        "container": {"padding": "0!important", "background-color": "#fafafa"},
        "icon": {"color": "orange", "font-size": "15px"}, 
        "nav-link": {"font-size": "15px", "text-align": "left", "margin":"0px", "--hover-color": "#eee"},
        "nav-link-selected": {"background-color": "indigo"},
    },
    )

    
    # Main content based on sebi's employee selected
    if selected == "TEXT":

        st.write("**TEXT BASED CLAIM DETECTION:**\n\n")
        prompt = st.text_area("User Input")
        source_name = st.text_area("Source Name")
        source_type = st.text_area("Source Type")

        if st.button("Submit") and prompt:
            response = claim_detection_pipeline(prompt)
            add_details_source(source_name,source_type,response)

            financial_points = financial_point_extractor(prompt)
            display_sebi_rules(financial_points)
            
            

    if selected == "AUDIO":
        st.write("**AUDIO BASED CLAIM DETECTION:**")
        audio_file = st.file_uploader("Upload an audio file", type=["ogg", "mp3", "wav"])

        if audio_file:
            st.audio(audio_file, format='audio/ogg', start_time=0)
            transcript = transcribe_audio(audio_file)
            prompt = st.text_area("Transcribed User Input", value=transcript)
            source_name = st.text_area("Source Name")
            source_type = st.text_area("Source Type")
            if st.button("Submit") and prompt:
                response = claim_detection_pipeline(prompt)
                add_details_source(source_name,source_type,response)
                financial_points = financial_point_extractor(prompt)
                display_sebi_rules(financial_points)


    if selected == "IMAGE":
        st.write("**IMAGE BASED CLAIM DETECTION:**")
        image_file = st.file_uploader("Upload an image file", type=["png", "jpg", "jpeg"])

        if image_file:
            st.image(image_file, caption='Uploaded Image.', use_column_width=True,width=300)
            text_from_image = get_text_from_image(image_file)
            prompt = st.text_area("User input image to text:", value=text_from_image)
            source_name = st.text_area("Source Name")
            source_type = st.text_area("Source Type")

            if st.button("Submit") and prompt:
                response = claim_detection_pipeline(prompt)
                add_details_source(source_name,source_type,response)
                financial_points = financial_point_extractor(prompt)
                display_sebi_rules(financial_points)

    if selected == "VIDEO":
        st.write("**VIDEO BASED CLAIM DETECTION:**")
        video_file = st.file_uploader("Upload a video file", type=["mp4", "mov", "avi"])

        if video_file:
            st.video(video_file, start_time=0)
            #----------------------------------------
            transcript = video_to_text(video_file)
            #----------------------------------------
            prompt = st.text_area("Transcribed User Input", value=transcript)
            
            source_name = st.text_area("Source Name")
            source_type = st.text_area("Source Type")
            if st.button("Submit") and prompt:
                response = claim_detection_pipeline(prompt)
                add_details_source(source_name,source_type,response)
                financial_points = financial_point_extractor(prompt)
                display_sebi_rules(financial_points)

    if selected == "QnA":
        st.write("**Question - Answering**")
        prompt = st.text_area("User Input")

        if st.button("Submit") and prompt:
            question_and_answer(prompt)
            
if choice == "SOURCE RELIABILITY RATING":
    if st.button("Click here to get the source reliability rating"):
        display_source_scores()
    