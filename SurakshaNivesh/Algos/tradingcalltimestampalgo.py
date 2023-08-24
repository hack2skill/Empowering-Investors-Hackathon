import datetime

# Sample video transcript with timestamps
video_transcript = """
[00:02] Speaker 1: Buy Reliance at 2400
[00:30] Speaker 2: Sell Reliance at 2500
[01:10] Speaker 1: Buy TATA Motors at 300
"""

# Sample stock price data with timestamps
stock_price_data = {
    'timestamp': [
        '00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10'
    ],
    'price': [
        2300, 2350, 2370, 2385, 2398, 2410, 2450, 300
    ]
}

# Convert timestamps to datetime objects
stock_price_data['timestamp'] = [datetime.datetime.strptime(ts, '%M:%S') for ts in stock_price_data['timestamp']]

# Extract trading call timestamps from transcript
call_timestamps = [datetime.datetime.strptime(ts.split(':')[1], '%S]') for ts in video_transcript.split('[')[1:]]

# Compare call timestamps with stock price timestamps
for call_ts in call_timestamps:
    closest_price_index = min(range(len(stock_price_data['timestamp'])), key=lambda i: abs(stock_price_data['timestamp'][i] - call_ts))
    closest_price = stock_price_data['price'][closest_price_index]
    print(f"Trading call at {call_ts}: Stock price at that time was {closest_price}")
