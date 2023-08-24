from flask import Flask, render_template, request
from recommendation_logic_model import get_recommendation

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    price_range = [float(request.form['min_price']), float(request.form['max_price'])]
    criteria = request.form.getlist('criteria')
    
    recommendation = get_recommendation(price_range, criteria)
    
    return render_template('recommendation.html', recommendation=recommendation)

if __name__ == '__main__':
    app.run(debug=True)

