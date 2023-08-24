
import openai
import requests
import asyncio
from pytube import YouTube
import subprocess
from celery_config import celery
from celery.result import AsyncResult
from celery import current_task, Celery
from test_recog import get_transcript_custom
import speech_recognition as sr
import os
api_key = "AIzaSyB5DLRK21lNFdP3B3QPvj6S6ZTqOj0u_b8"
openai.api_key = "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"
class CaptionsError(Exception):
    """Custom exception for errors related to fetching captions."""
    def __init__(self, message="Error fetching captions"):
        self.message = message
        super().__init__(self.message)

class RatingError(Exception):
    """Custom exception for errors related to fetching rating."""
    def __init__(self, message="Error fetching rating"):
        self.message = message
        super().__init__(self.message)
@celery.task
def get_influencer_and_channel_details(video_id):

   
    # Step 1: Get the channelId using the Videos.list API call
    video_api_url = f'https://www.googleapis.com/youtube/v3/videos?id={video_id}&key={api_key}&part=snippet'
    video_response = requests.get(video_api_url).json()
    if not video_response.get('items'):
        return "Invalid video link or video not found"

    channel_id = video_response['items'][0]['snippet']['channelId']

    # Step 2: Get channel details using the Channels.list API call
    channel_api_url = f'https://www.googleapis.com/youtube/v3/channels?id={channel_id}&key={api_key}&part=snippet,statistics'
    channel_response = requests.get(channel_api_url).json()
    if not channel_response.get('items'):
        return "Channel details not found"

    channel_data = channel_response['items'][0]
    channel_snippet = channel_data['snippet']

    # Extracting details
    channel_title = channel_snippet.get('title', '')
    channel_description = channel_snippet.get('description', '')
    channel_published_at = channel_snippet.get('publishedAt', '')
    channel_subscriber_count = channel_data['statistics'].get('subscriberCount', '')

    return {
        "channel_title": channel_title,
        "channel_description": channel_description,
        "channel_published_at": channel_published_at,
        "channel_subscriber_count": channel_subscriber_count
    }

def get_captions(id):
    url = f"https://www.googleapis.com/youtube/v3/captions?videoId={id}&key={api_key}&part=snippet"
    response = requests.get(url)
    response_json = response.json()
    items = response_json.get("items")
    if items:
        caption_url = items[0]['snippet']['trackKind']
        if caption_url:
            return caption_url
        return None
    else:
        print("Couldn't retrieve video details. Ensure the video ID is correct and you have quota on the API.")
        return None
    
def get_comments(id):
    url = f"https://www.googleapis.com/youtube/v3/commentThreads?videoId={id}&key={api_key}&part=snippet"
    response = requests.get(url)
    response_json = response.json()
    items = response_json.get("items")
    if items:
        comments = []
        for item in items:
            comment = item['snippet']['topLevelComment']['snippet']['textOriginal']
            comments.append(comment)
        return comments
    else:
        print("Couldn't retrieve video details. Ensure the video ID is correct and you have quota on the API.")
        return None
    
def get_title(id):
    url = f"https://www.googleapis.com/youtube/v3/videos?id={id}&key={api_key}&part=snippet"
    response = requests.get(url)
    response_json = response.json()
    items = response_json.get("items")
    if items:
        title = items[0]['snippet']['title']
        if title:
            return title
        return None
    else:
        print("Couldn't retrieve video details. Ensure the video ID is correct and you have quota on the API.")
        return None
def get_activities(id):
    url = f"https://www.googleapis.com/youtube/v3/activities?channelId={id}&key={api_key}&part=snippet"
    response = requests.get(url)
    response_json = response.json()
    items = response_json.get("items")
    if items:
        activities = []
        for item in items:
            activity = item['snippet']['title']
            activities.append(activity)
        return activities
    else:
        print("Couldn't retrieve video details. Ensure the video ID is correct and you have quota on the API.")
        return None
    
def get_rating(id):
    url = f"https://www.googleapis.com/youtube/v3/videos/getRating?id={id}&key={api_key}&part=snippet"
    response = requests.get(url)
    response_json = response.json()
    items = response_json.get("items")
    if items:
        rating = items[0]['snippet']['rating']
        if rating:
            return rating
        return None
    else:
        print("Couldn't retrieve video details. Ensure the video ID is correct and you have quota on the API.")
        return None

def download_youtube(id, task_id):
    print(f"Downloading YouTube video for Task ID: {task_id}")
    try:
        download_dir = "videos"
        yt = YouTube('http://youtube.com/watch?v=' + id)
        video_stream = yt.streams.filter(res="360p").first()
        video_stream.download(output_path=download_dir)
        video_filename = video_stream.default_filename
        audio_filename = os.path.splitext(video_filename)[0] + ".wav"
        subprocess.run(["ffmpeg", "-i", os.path.join(download_dir, video_filename), "-vn", "-acodec", "pcm_s16le", "-ar", "44100", "-ac", "2", os.path.join(download_dir, audio_filename)])
        transcript = get_transcript_custom(os.path.join(download_dir, audio_filename))
    except Exception as e:
        print(f"Error in Task ID {task_id}: {e}")
        transcribed_text = None
        return transcribed_text
    return transcript



@celery.task
def handle_get_youtube(id):
    captions= None
    influencer_and_channel_details = None
    try:
        title = get_title(id)
        comments = get_comments(id)
        influencer_and_channel_details = get_influencer_and_channel_details(id)
        captions = None
        # rating = get_rating(id)
        if captions is None:
            print("Error fetching captions, downloading video to transcribe")
            task_id = current_task.request.id
            download_result = download_youtube(id, task_id)
            # download_result.wait() 
            print("Transcribed audio, deleting video")
            captions = None
            return {"title": title, "comments": comments, "captions": captions,"special":download_result,"influencer_and_channel_details":influencer_and_channel_details}
    except Exception as e:
        print(e)
        if captions is None:
            print("Error fetching captions, downloading video to transcribe")
            task_id = current_task.request.id
            download_result = download_youtube(id, task_id)
            # download_result.wait() 
            print("Transcribed audio, deleting video")
            captions = None
            return {"title": title, "comments": comments, "captions": captions,"special":download_result,"influencer_and_channel_details":influencer_and_channel_details}
        
    return {"title": title, "comments": comments, "captions": captions,"influencer_and_channel_details":"influencer_and_channel_details"}
import requests



# Example usage:
# api_key = 'YOUR_YOUTUBE_API_KEY'
# video_link = 'https://www.youtube.com/watch?v=VIDEO_ID'
# print(get_youtube_video_details(video_link, api_key))


if __name__ == "__main__":
    asyncio.run(download_youtube("3VSG0S08-C0","bd18b175-543e-4d81-a43f-5bc08cb8ca7c"))
    # print(get_captions("3VSG0S08-C0"))
    # print(get_comments("3VSG0S08-C0"))
    # print(get_title("3VSG0S08-C0"))
    # # print(get_activities("UCBR8-60-B28hp2BmDPdntcQ"))
    # print(get_rating("3VSG0S08-C0"))