import yt_dlp
from sklearn.base import BaseEstimator, TransformerMixin
import os
import glob

class Yt_To_Wav(BaseEstimator, TransformerMixin):
    
    def __init__(self, url="https://youtu.be/3GGU2nE48mA?si=mhiwloo0USzZD-9R"):
        self.url = url

    def fit(self, X, y=None):
        return self
    
    def download_from_url(self):
        print("in down from url")
        ydl_opts = {
            'format': 'bestaudio/best',
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'wav',
            }],
        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            # info_dict = ydl.extract_info(self.url, download=True)
            print(self.url)
            ydl.download([self.url])
            # downloaded_filename = ydl.prepare_filename(info_dict)
        
        # Specify the absolute paths for the downloaded file and the new filename
        directory = os.environ.get("PWD")
        wav_files = glob.glob(os.path.join(directory, '*.wav'))

        # Print the list of found .wav files
        for wav_file in wav_files:
            os.rename(wav_file, "output.wav")

        return wav_files

    def transform(self, X):
        print("in transform")
        file_name = self.download_from_url()
        print("File downloaded from url now moving to next stage")
        return file_name

# if __name__ == "__main__":
#     yt = Yt_To_Wav("https://youtu.be/3GGU2nE48mA?si=lWhIBlzeMl19j1NW")

#     yt.transform(X=None)  # Pass a placeholder value for X, as it's required by the TransformerMixin convention
