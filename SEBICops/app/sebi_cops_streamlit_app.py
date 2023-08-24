"""
Main application.
pip install -i https://pypi.python.org/simple plotly pandas streamlit
To Execute -: streamlit run sebi_cops_streamlit_app.py
"""


import pandas as pd
import plotly.express as px
import streamlit as st


st.set_page_config(
    page_title='Clustering on Videos', 
    layout='wide'
)

sidebar = st.sidebar

@st.cache_data
def get_data():
    data = pd.read_feather("data_with_knnlabels.feather")
    data["fe_segment_duration"] =  data['fe_segment_duration_0'] +  data['fe_segment_duration_1'] + data['fe_segment_duration_2']
    return data


df_raw = get_data()

df_raw["label_knn"] = df_raw["label_knn"].astype(str)
video_id_title_map = dict(zip(df_raw["videoID"], df_raw["title"]))
video_id_total_duration_map = dict(zip(df_raw["videoID"], df_raw["videoDuration"]))
video_id_fe_segment_duration_map = dict(zip(df_raw["videoID"], df_raw["fe_segment_duration"]))

video_ids = set(df_raw["videoID"].unique().tolist())

video_id_selector = sidebar.selectbox(
    "Select a VideoID",
    video_ids
)
st.markdown(f"# Currently Selected Video ID -: {video_id_selector}")

show_data = sidebar.checkbox("Show Data", True)

df_filtered_video_id = df_raw.query(f"videoID == '{video_id_selector}'")
columns_to_show = ["videoID", "title", "name", "channelID", "videoDuration", "label_knn"]

if show_data:
    st.dataframe(df_filtered_video_id[columns_to_show], use_container_width=1000)

subplots = sidebar.checkbox("Show Cluster Plots", True)


st.text(
    f"""
    Title => {video_id_title_map.get(video_id_selector)}
    Sponsor & Self-Promotion duration => {video_id_fe_segment_duration_map.get(video_id_selector):.2f} secs
    Total Duration => {video_id_total_duration_map.get(video_id_selector):.2f} secs
    """
    )

fig = px.scatter_3d(
    df_raw,
    x="fe_segment_duration_1",
    y="videoDuration",
    z="fe_segment_duration_2",
    color="label_knn",
    hover_data=["name", "title"],
    width=1024,
    height=768,
    title="Plot -: Clustering on video segments",
)
st.plotly_chart(fig, theme="streamlit", use_container_width=True)
