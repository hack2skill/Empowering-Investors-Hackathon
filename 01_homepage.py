# Import necessary libraries
import streamlit as st
from streamlit_player import st_player

st.set_page_config(
    page_title="Smart With Sebi",
    page_icon=":detective:",
    layout="wide",
)

with st.columns(3)[1]:
    st.image("media/smart_with_sebi.jpeg", width=200)

st.markdown("<h2 style='text-align: center; color: black;'>Welcome to Smart with SEBI portal</h1>", unsafe_allow_html=True)

st.markdown("<h3 style='text-align: left; color: black;'><hr> About this project:</h3>", unsafe_allow_html=True)

st.sidebar.success("Select a page above!")

st_player("https://www.youtube.com/watch?v=csnD5EVL5z8")