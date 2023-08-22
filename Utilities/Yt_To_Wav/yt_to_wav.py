import yt_dlp
import ffmpeg
import sys

ydl_opts = {
    'format': 'bestaudio/best',
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'wav',
    }],
}

def download_from_url(url):
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])
    stream = ffmpeg.input('output.m4a')
    stream = ffmpeg.output(stream, 'Yt_To_Wav/Outputs/output.wav')
    try:
        ffmpeg.run(stream, capture_stderr=True)
    except ffmpeg.Error as e:
        print("FFmpeg error:", e.stderr)

args = sys.argv[1:]

if len(args) > 1:
    print("Too many arguments.")
    print("Usage: python youtubetowav.py <optional link>")
    print("If a link is given it will automatically convert it to .wav. Otherwise, a prompt will be shown.")
    exit()

if len(args) == 0:
    url = input("Enter Youtube URL: ")
    download_from_url(url)
else:
    download_from_url(args[0])
