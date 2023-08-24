from sklearn.pipeline import Pipeline
import pandas as pd

import sys
import os

# Add the parent directory to the module search path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from Utilities.Wav_To_Text.wav_to_text import Wav_To_Text
from Utilities.Yt_To_Wav.yt_to_wav import Yt_To_Wav
from Utilities.Embeddings_Generate.main import Embeddings
from Utilities.Fin_Advise.main import Fin_Advise


pipeline = Pipeline([
    ('Generate .wav', Yt_To_Wav("https://youtu.be/3GGU2nE48mA?si=mhiwloo0USzZD-9R")),
    ('Generate Text', Wav_To_Text()),

    ('Generate embeddings', Embeddings("Utilities/Models/doc2vec_model")),
    ('Feeding Model with Infer Vectors', Fin_Advise("Utilities/Models/Fin_Advise_model.pkl"))
])

# Scrape data from the URL and tokenize it
model = pipeline.fit_transform("https://youtu.be/3GGU2nE48mA?si=mhiwloo0USzZD-9R")