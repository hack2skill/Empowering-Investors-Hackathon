import numpy as np

# Sample trader's past recommendations and their outcomes
trader_history = {
    'Buy Reliance at 2400': 'Profit',
    'Sell TATA Motors at 300': 'Loss',
    'Buy Infosys at 1500': 'Profit',
    'Sell HDFC Bank at 1100': 'Profit',
    'Buy Maruti at 7000': 'Loss',
    'Sell ICICI Bank at 400': 'Profit'
}

# Sample stock market data for the calculation
stock_prices = {
    'Reliance': [2300, 2405, 2380, 2450, 2490],
    'TATA Motors': [310, 290, 305, 290, 280],
    'Infosys': [1600, 1550, 1605, 1620, 1650],
    'HDFC Bank': [1050, 1105, 1120, 1150, 1170],
    'Maruti': [7200, 7100, 6900, 7000, 6800],
    'ICICI Bank': [420, 410, 400, 390, 395]
}

# Calculate credibility score based on accuracy, consistency, and risk-adjusted returns
def calculate_credibility_score(history, stock_data):
    total_recommendations = len(history)
    successful_recommendations = sum(1 for outcome in history.values() if outcome == 'Profit')
    
    consistency_factor = calculate_consistency(history)
    risk_adjusted_returns = calculate_risk_adjusted_returns(history, stock_data)
    
    credibility_score = (successful_recommendations / total_recommendations) * consistency_factor * risk_adjusted_returns
    return credibility_score

# Calculate consistency factor
def calculate_consistency(history):
    outcome_counts = {'Profit': 0, 'Loss': 0}
    for outcome in history.values():
        outcome_counts[outcome] += 1
    
    consistency_factor = outcome_counts['Profit'] / (outcome_counts['Profit'] + outcome_counts['Loss'])
    return consistency_factor

# Calculate risk-adjusted returns
def calculate_risk_adjusted_returns(history, stock_data):
    returns = []
    for recommendation, outcome in history.items():
        stock_name = recommendation.split()[1]
        initial_price = stock_prices[stock_name][0]
        final_price = stock_prices[stock_name][-1]
        
        if outcome == 'Profit':
            returns.append((final_price - initial_price) / initial_price)
        else:
            returns.append((-1) * (final_price - initial_price) / initial_price)
    
    average_return = np.mean(returns)
    risk_adjusted_returns = average_return / np.std(returns)
    return risk_adjusted_returns

# Calculate and print the credibility score
credibility_score = calculate_credibility_score(trader_history, stock_prices)
print(f"Trader's Credibility Score: {credibility_score:.2f}")
