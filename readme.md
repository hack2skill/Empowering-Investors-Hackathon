
# FinClear


### Team Name
Those It Guys
### Problem Statement
Identifying Misleading Claims Made by Influencers
#### Team Leader Email
udaybeswal@gmail.com


## Brief of the Prototype

### Objective

This project prototype addresses the issue of misleading claims made by influencers, particularly in the financial domain.

### Prototype Overview
Prototype currently contains a Front-End Side made on `Streamlit` using python which takes a youtube url as the input and upon pressing the check button a multi-stage pipeline is triggered.

#### 1. Video to Audio Conversion
- **Input**: YouTube URL
- **Action**: Uses `yt_dlp` to extract the audio and generate a .wav file from the video.

#### 2. Automatic Speech Recognition (ASR)
- **Input**: .wav audio file 
- **Action**: Utilizes the `speech_recognition` library to perform ASR on the audio, transcribing spoken words into text.

#### 3. Text Embeddings
- **Input**: Extracted text 
- **Action**: Generates embeddings of generated text using a Doc2Vec model trained on the `Sentiment Analysis for Financial News` dataset from Kaggle. These embeddings represent the content's context.

#### 4. Financial Advice Detection Model
- **Input**: Text embeddings
- **Action**: Feeds embeddings into the Fin_Advise_Model, which predicts whether the influencer is giving financial advice. Achieves an accuracy of `74.3%` using a Random Forest Classification model. The dataset for this model was generated through prompt engineering with the help of chatGPT.

## Authors

- [Ikshan Bhardwaj](https://github.com/ikshan-Tango/)
- [Akshat Jaimini](https://github.com/destrex271)
- [Utkarsh Tripathi](https://www.github.com/octokatherine)
- [Uday Beswal](https://github.com/udbe)


