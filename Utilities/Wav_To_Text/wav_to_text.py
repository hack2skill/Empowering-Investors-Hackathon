import speech_recognition as sr

audio_file_path = 'Output.wav'
recognizer = sr.Recognizer()

with sr.AudioFile(audio_file_path) as source:
    # Adjust for ambient noise if needed
    recognizer.adjust_for_ambient_noise(source)
    
    # Listen to the audio and perform ASR
    try:
        audio_data = recognizer.record(source)
        # Use the Google Web Speech API for ASR
        text = recognizer.recognize_google(audio_data)
        
        print("Transcribed Text:")
        print(text)
    except sr.UnknownValueError:
        print("Google Web Speech API could not understand the audio")
    except sr.RequestError as e:
        print(f"Could not request results from Google Web Speech API; {e}")
