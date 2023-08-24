import pandas as pd

crypto_data = pd.read_csv('data/CRYPTOCURRENCY.csv')

def get_recommendation(price_range, criteria):
    filtered_data = crypto_data[
        (crypto_data['price(USD)'] >= price_range[0]) &
        (crypto_data['price(USD)'] <= price_range[1])
    ]

    if 'high_market_cap' in criteria:
        filtered_data = filtered_data[
            filtered_data['Market_cap'] > filtered_data['Market_cap'].median()
        ]
    
    recommendations = []
    for _, row in filtered_data.iterrows():
        recommendation = {
            'symbol': row['symbol'],
            'coin': row['coin'],
            'price': row['price(USD)'],
            '1h_change': row['1h_Price_Change'],
            '24h_change': row['24h_Price_Change'],
            '7d_change': row['7d_Price_Change'],
            '24h_volume': row['24h_volume'],
            'mkt_cap': row['Market_cap'],
            'date': row['date']
        }
        recommendations.append(recommendation)

    return recommendations

