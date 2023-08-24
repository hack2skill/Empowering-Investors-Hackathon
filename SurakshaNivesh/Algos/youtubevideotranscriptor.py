from youtube_transcript_api import YouTubeTranscriptApi

# Get video ID from the YouTube video URL
def get_video_id(video_url):
    return video_url.split("v=")[1]

# Get video transcripts
def get_transcripts(video_url):
    video_id = get_video_id(video_url)
    transcripts = YouTubeTranscriptApi.get_transcript(video_id)
    text_transcripts = [transcript['text'] for transcript in transcripts]
    return '\n'.join(text_transcripts)

# Example usage
video_url = 'https://www.youtube.com/watch?v=VIDEO_ID'
transcripts = get_transcripts(video_url)

print("Transcripts:")
print(transcripts)
