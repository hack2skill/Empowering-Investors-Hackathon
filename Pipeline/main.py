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

def trigger_pipeline(url):
    pipeline = Pipeline([
        ('Generate .wav', Yt_To_Wav(url=url)),
        ('Generate Text', Wav_To_Text()),

        ('Generate embeddings', Embeddings("Utilities/Models/doc2vec_model")),
        ('Feeding Model with Infer Vectors', Fin_Advise("Utilities/Models/Fin_Advise_model.pkl"))
    ])

    # Scrape data from the URL and tokenize it
    prediction = pipeline.fit_transform(str(url))
    print("AT THE END OF THE DAY I HAVE PREDICTED ->",prediction)
    
    os.remove("output.wav")
    return prediction

if __name__ == "__main__":
    trigger_pipeline("https://youtu.be/3GGU2nE48mA?si=jAb6TCGiBTA6vFx3")