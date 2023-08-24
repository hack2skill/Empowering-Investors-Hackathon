import numpy as np
from scipy.signal import find_peaks
# stock data
np.random.seed(42)
num_days = 30
stock_prices = np.random.randint(50, 150, num_days)
trading_volumes = np.random.randint(1000, 5000, num_days)

# Define parameters
price_threshold_factor = 1.5  # Abnormal price increase threshold
volume_threshold_factor = 2.0  # Abnormal volume increase threshold
moving_average_window = 5  # Window size for calculating moving averages
price_anomaly_threshold = 3.0  # Abnormal price anomaly threshold
price_peak_threshold = 0.8  # Threshold for detecting price peaks

# Detect potential pump and dump manipulation
for i in range(moving_average_window, num_days):
    moving_average_price = np.mean(stock_prices[i - moving_average_window : i])
    moving_average_volume = np.mean(trading_volumes[i - moving_average_window : i])
    
    current_price = stock_prices[i]
    current_volume = trading_volumes[i]
    
    price_increase_factor = current_price / moving_average_price
    volume_increase_factor = current_volume / moving_average_volume
    
    # Detect rapid price increase compared to moving average
    if price_increase_factor > price_threshold_factor:
        # Detect abnormal price anomaly
        price_anomaly = abs(current_price - moving_average_price) / moving_average_price
        if price_anomaly > price_anomaly_threshold:
            # Detect price peaks indicating potential manipulation
            price_peaks, _ = find_peaks(stock_prices[i - moving_average_window : i], height=current_price * price_peak_threshold)
            if len(price_peaks) > 0:
                print(f"Potential pump and dump manipulation detected on Day {i+1}!")
                print(f"Price Anomaly: {price_anomaly:.2f}, Moving Average Price: {moving_average_price}")
                print(f"Current Price: {current_price}, Moving Average Volume: {moving_average_volume}")
                print(f"Price Peaks: {price_peaks + i - moving_average_window}")
                print("---")
    
    # Detect rapid volume increase compared to moving average
    if volume_increase_factor > volume_threshold_factor:
        print(f"Potential pump and dump manipulation detected on Day {i+1}!")
        print(f"Current Volume: {current_volume}, Moving Average Volume: {moving_average_volume}")
        print(f"Current Price: {current_price}, Moving Average Price: {moving_average_price}")
        print("---")

print("Detection process completed.")
