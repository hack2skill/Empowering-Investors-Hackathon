import pytesseract
from PIL import Image
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

# Perform OCR on an image to extract text
def extract_text_from_image(image_path):
    img = Image.open(image_path)
    text = pytesseract.image_to_string(img)
    return text

# Analyze text sentiment using NLTK SentimentIntensityAnalyzer
def analyze_sentiment(text):
    sia = SentimentIntensityAnalyzer()
    sentiment_scores = sia.polarity_scores(text)
    sentiment = "positive" if sentiment_scores['compound'] > 0 else "negative" if sentiment_scores['compound'] < 0 else "neutral"
    return sentiment, sentiment_scores

# Example usage
image_path = 'screenshot.png'
text = extract_text_from_image(image_path)
sentiment, sentiment_scores = analyze_sentiment(text)

print("Extracted Text:")
print(text)
print("Sentiment:", sentiment)
print("Sentiment Scores:", sentiment_scores)

