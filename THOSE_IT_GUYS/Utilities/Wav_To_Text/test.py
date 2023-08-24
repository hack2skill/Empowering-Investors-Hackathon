import pocketsphinx
from pocketsphinx import AudioFile

audio_file = "/home/ikshan/ikshan/SEBI/Output.wav"

# Define the configuration for CMU Sphinx
config = pocketsphinx.Decoder.default_config()
config.set_string('-hmm', 'path/to/acoustic_model')
config.set_string('-lm', 'path/to/language_model')
config.set_string('-dict', 'path/to/dictionary')

# Initialize the decoder
decoder = pocketsphinx.Decoder(config)

# Decode the audio file

with AudioFile(audio_file) as audio:
    audio.listen()

    # Perform ASR
    result = decoder.decode(audio)
    transcribed_text = result.hypothesis()

print("Transcribed Text:")
print(transcribed_text)
