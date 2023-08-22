from sklearn.pipeline import Pipeline
import pandas as pd

from Utilities.Wav_To_Text.wav_to_text import Wav_To_Text
from Utilities.Yt_To_Wav.yt_to_wav import Yt_To_Wav


pipeline = Pipeline([
    ('scrap', Wav_To_Text()),
    ('tokenize', Yt_To_Wav()),
    # ('MODEL', Hind_Word2Vec(model_path))
])

# Scrape data from the URL and tokenize it
model = pipeline.fit_transform("https://www.youtube.com/watch?v=5QgX6O0kD5c")