import speech_recognition as sr

audio_file_path = 'output.wav'
recognizer = sr.Recognizer()

with sr.AudioFile(audio_file_path) as audio_source:
    audio_data = recognizer.record(audio_source)

try:
    text = recognizer.recognize_google(audio_data)  # Use Google Web Speech API
    print("Recognized Text:", text)
except sr.UnknownValueError:
    print("Speech Recognition could not understand audio")
except sr.RequestError as e:
    print(f"Could not request results from Google Web Speech API; {e}")