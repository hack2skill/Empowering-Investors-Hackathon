from flask import Flask, render_template, request, redirect, url_for
import plotly.express as px
import pandas as pd
import mysql.connector

app = Flask(__name__)


# MySQL database connection parameters
db_params = {
    "host": "sebi-hackathon.mysql.database.azure.com",
    "user": "mysql",
    "password": "Betateam-L",
    "database": "fintech-influencers-claims"
}

# Create a MySQL database connection
db_connection = mysql.connector.connect(**db_params)
db_cursor = db_connection.cursor()

# Fetch data from the table
query = "SELECT * FROM fintech_influencers"
db_cursor.execute(query)
result = db_cursor.fetchall()

# Define column names
columns = [desc[0] for desc in db_cursor.description]

# Create a DataFrame from the fetched data
df = pd.DataFrame(result, columns=columns)

# Load your dataset (replace 'your_dataset.csv' with your actual dataset file)
#df = pd.read_excel('indummm.xlsx')

df['Flagged Claims'] = ''

# Dictionary to store previous feedback
previous_feedback = {}
previous_ratings = {}

@app.route('/')
def index():
    filtered_data = df  # Initialize with all data

    keywords = request.args.get('keywords', '').split(',')
    filter_option = request.args.get('filter', 'both')  # Default to 'all' filter

    # Apply filters based on the selected filter option
    if filter_option == 'claims':
        filtered_data = df[df['Claim'].str.contains('|'.join(keywords))]
    elif filter_option == 'influencers':
        filtered_data = df[df['Name'].str.contains('|'.join(keywords))]

    elif filter_option == 'keywords':
        filtered_data = df[df['Keywords'].str.contains('|'.join(keywords))]
    
    elif filter_option == 'both':
        filtered_data = df[
            (df['Claim'].str.contains('|'.join(keywords))) |
            (df['Name'].str.contains('|'.join(keywords))) | 
            (df['Keywords'].str.contains('|'.join(keywords)))
        ]

    sorted_data = sorted(filtered_data.to_dict('records'), key=lambda x: x['Credibility_Score'], reverse=True)
    cards_per_row = 3
    rows = [sorted_data[i:i+cards_per_row] for i in range(0, len(sorted_data), cards_per_row)]
    return render_template('index.html', rows=rows)



@app.route('/profile/<string:influencer_name>')
def profile(influencer_name):
    filtered_data = df[df['Name'] == influencer_name]
    
    if not filtered_data.empty:
        influencer = filtered_data.iloc[0]
        influencer_name = influencer['Name']
        influencer_previous_feedback = previous_feedback.get(influencer_name, [])
        influencer_previous_ratings = previous_ratings.get(influencer_name, [])
        
        return render_template(
            'profile.html',
            influencer=influencer,
            previous_feedback=influencer_previous_feedback,
            previous_ratings=influencer_previous_ratings
        )
    else:
        return "Influencer not found."


@app.route('/visualize')
def visualize():
    return render_template('visualize.html')

@app.route('/visualize/credibility_bar')
def visualize_credential_bar():
    fig = px.bar(df, x='Name', y='Credibility_Score', title='Credibility Score Distribution')
    return fig.to_html()

@app.route('/visualize/claim_pie')
def visualize_claim_pie():
    claim_counts = df['Claim'].value_counts()
    fig = px.pie(claim_counts, names=claim_counts.index, values=claim_counts.values, title='Pie Chart for Claim Categories')
    return fig.to_html()

@app.route('/flag/<int:index>')
def flag(index):
    df.at[index, 'Flagged'] = True  # Assuming you have a 'Flagged' column in your DataFrame
    return redirect(url_for('index'))

@app.route('/feedback/<string:influencer_name>', methods=['GET', 'POST'])
def feedback(influencer_name):
    influencer = df[df['Name'] == influencer_name].iloc[0]

    if request.method == 'POST':
        feedback = request.form.get('feedback')

        # Store previous feedback in the dictionary
        if influencer_name in previous_feedback:
            previous_feedback[influencer_name].append(feedback)
        else:
            previous_feedback[influencer_name] = [feedback]

        # Update the DataFrame with the latest feedback
        influencer_index = influencer.index[0]  # Get the index of the influencer
        df.at[influencer_index, 'Feedback'] = feedback

        return redirect(url_for('profile', influencer_name=influencer_name))

    influencer_previous_feedback = previous_feedback.get(influencer_name, [])
    
    return render_template('feedback_form.html', influencer=influencer, previous_feedback=influencer_previous_feedback)



@app.route('/flag_claim/<string:influencer_name>/<string:claim>', methods=['POST'])
def flag_claim(influencer_name, claim):
    influencer = df[df['Name'] == influencer_name].iloc[0]

    if not isinstance(influencer['Flagged Claims'], list):
        influencer['Flagged Claims'] = []

    if claim not in influencer['Flagged Claims']:
        influencer['Flagged Claims'].append(claim)
    
    # You can perform other flagging actions here if needed
    # For example, you might want to update a database or a log
    
    return redirect(url_for('profile', influencer_name=influencer_name))








@app.route('/rate/<string:influencer_name>', methods=['GET', 'POST'])
def rate(influencer_name):
    influencer = df[df['Name'] == influencer_name].iloc[0]

    if request.method == 'POST':
        rating = int(request.form.get('rating'))

        # Store previous ratings in the dictionary
        if influencer_name in previous_ratings:
            previous_ratings[influencer_name].append(rating)
        else:
            previous_ratings[influencer_name] = [rating]

        # Update the DataFrame with the latest rating
        influencer_index = influencer.index[0]  # Get the index of the influencer
        df.at[influencer_index, 'Rating'] = rating
        return redirect(url_for('profile', influencer_name=influencer_name))

    influencer_previous_ratings = previous_ratings.get(influencer_name, [])

    return render_template('rating_form.html', influencer=influencer, previous_ratings=influencer_previous_ratings)


@app.route('/compare', methods=['GET', 'POST'])
def compare():
    influencers_list = df['Name'].tolist()

    if request.method == 'POST':
        selected_influencers = request.form.getlist('influencers')

        if len(selected_influencers) <= 3:
            selected_data = df[df['Name'].isin(selected_influencers)]

            # Create the Credibility Score graph
            credibility_graph = px.bar(selected_data, x='Name', y='Credibility_Score', title='Comparison of Credibility Scores')

            # Create the Rating graph
            rating_graph = px.bar(selected_data, x='Name', y='Rating', title='Comparison of Ratings')

            # Convert graphs to HTML
            credibility_graph = credibility_graph.to_html(full_html=False, include_plotlyjs='cdn')
            rating_graph = rating_graph.to_html(full_html=False, include_plotlyjs='cdn')

            return render_template(
                'compare.html',
                influencers=influencers_list,
                credibility_graph=credibility_graph,
                rating_graph=rating_graph
            )

        else:
            return "Please select up to 3 influencers for comparison."

    return render_template('compare.html', influencers=influencers_list, credibility_graph='', rating_graph='')

"""def compare():
    df = pd.DataFrame(result, columns=columns)
    influencers_list = df['Name'].tolist()

    if request.method == 'POST':
        selected_influencers = request.form.getlist('influencers')
        print(selected_influencers)
        
        if len(selected_influencers) <= 3:
            selected_data = df[df['Name'].isin(selected_influencers)]
            print(selected_data)
            # Create the Credibility Score graph
            credibility_graph = px.bar(selected_data, x='Name', y='Credibility_Score', title='Comparison of Credibility Scores')
            credibility_graph = credibility_graph.to_html(full_html=False, include_plotlyjs='cdn')
            
            # Create the Rating graph
            rating_graph = px.bar(selected_data, x='Name', y='Rating', title='Comparison of Ratings')
            rating_graph = rating_graph.to_html(full_html=False, include_plotlyjs='cdn')
            
            return render_template(
                'compare.html',
                influencers=influencers_list,
                credibility_graph=credibility_graph,
                rating_graph=rating_graph
            )
        else:
            return "Please select up to 3 influencers for comparison."

    return render_template('compare.html', influencers=influencers_list, credibility_graph='', rating_graph='') """



@app.route('/visualize/keyword_bar')
def visualize_keyword_bar():
    keyword_freq = df['Keywords'].str.split(', ').explode().value_counts()
    fig = px.bar(x=keyword_freq.index, y=keyword_freq.values, title='Keyword Frequency Bar Chart')
    return fig.to_html()

@app.route('/visualize/scatter_credential_keywords')
def visualize_scatter_credential_keywords():
    fig = px.scatter(df, x='Credibility_Score', y='Keywords', title='Scatter Plot: Credibility vs. Keywords')
    return fig.to_html()

if __name__ == '__main__':
    app.run(debug=True)
