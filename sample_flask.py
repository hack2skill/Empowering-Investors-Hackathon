from flask import Flask, request, jsonify
from flask_cors import CORS,cross_origin


app = Flask(__name__)
CORS(app)


@cross_origin
@app.route('/', methods=['POST'])
def process_post_request():
    # Get the data from the request body
    data = request.json
    
    if data is None:
        return jsonify({"error": "No data provided in the request body"}), 400

    # Process the data (you can modify this part according to your requirements)
    result = process_data(data)
    
    return jsonify({"result": result})

def process_data(data):
    # Add your data processing logic here
    # For example, you can access data using data['key_name']
    # Process the data and return a result
    return "Processed data: " + str(data)

if __name__ == '__main__':
    app.run()
