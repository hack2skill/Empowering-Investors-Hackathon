import speech_recognition as sr
from sklearn.base import BaseEstimator, TransformerMixin

audio_file_path = 'output.wav'
recognizer = sr.Recognizer()

class Wav_To_Text(BaseEstimator, TransformerMixin):

    def __init__(self, audio_file_path = "output.wav"):
        self.audio_file_path = audio_file_path
        return

    def fit(self, X=None, y=None):
        return self

    def transform(self, X=None):

        with sr.AudioFile(self.audio_file_path) as source:
            # Adjust for ambient noise if needed
            recognizer.adjust_for_ambient_noise(source)
            
            # Listen to the audio and perform ASR
            try:
                audio_data = recognizer.record(source)
                # Use the Google Web Speech API for ASR
                text = recognizer.recognize_google(audio_data)
                
                print("Transcribed Text:")
                print(text)\
                
                print("Text generated now moving on to next stage")
                return text
            except sr.UnknownValueError:
                print("Google Web Speech API could not understand the audio")
                return None
            except sr.RequestError as e:
                print(f"Could not request results from Google Web Speech API; {e}")
                return None
        
if __name__ == "__main__":
    wav = Wav_To_Text("output.wav")
    wav.transform(X=None)