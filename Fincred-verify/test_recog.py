import os
import assemblyai as aai


# Set your AssemblyAI API key


def get_transcript_custom(audio_filename):
    if not os.path.exists(audio_filename):
        print("Couldn't find audio file. Ensure the audio file is in the same directory as this script.")
        return None
    aai.settings.api_key = "7dbc87cd28864fe5bd70b6a227c3f3e5"
    transcriber = aai.Transcriber()

    transcript = transcriber.transcribe(audio_filename)

    print("Transcript:")
    print(transcript.text)
    with open("transcript.txt", "w") as f:
        f.write(transcript.text)
    return transcript.text
