from Wav_To_Text.wav_to_text import Wav_To_Text
from Yt_To_Wav.yt_to_wav import Yt_To_Wav

from sklearn.base import BaseEstimator, TransformerMixin


class Retrieve(BaseEstimator, TransformerMixin):

    def __init__(self, url):
        self.url = url
        return self
    
    def fit(self):
        return self

    def transform(self):
        """
            1) Convert to wav
            2) Convert to text
        """
        Yt_To_Wav(self.url)
        return 
