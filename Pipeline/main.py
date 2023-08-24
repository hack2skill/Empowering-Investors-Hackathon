from sklearn.pipeline import Pipeline
import pandas as pd

import sys
import os

# Add the parent directory to the module search path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from Utilities.Wav_To_Text.wav_to_text import Wav_To_Text
from Utilities.Yt_To_Wav.yt_to_wav import Yt_To_Wav
from Utilities.Embeddings_Generate.main import Embeddings


pipeline = Pipeline([
    ('Generate .wav', Yt_To_Wav("https://youtu.be/3GGU2nE48mA?si=mhiwloo0USzZD-9R")),
    ('Generate Text', Wav_To_Text()),

    ('generate embeddings', Embeddings("Utilities/Models/doc2vec_model")),
    # ('Final', Fin_Advise("Model_path"))
])

# Scrape data from the URL and tokenize it
model = pipeline.fit_transform("https://youtu.be/3GGU2nE48mA?si=mhiwloo0USzZD-9R")