import joblib
# Load the saved model


def get_pred(data):
    loaded_model = joblib.load("./Utilities/Models/model.pkl")
    return data
#
#
# def get_pred(data):
#     new_data = ["The influencer recommends investing in stocks.", "This video is about cooking recipes.", data]
#
#     predictions = loaded_model.predict(new_data)
#
#     return predictions
#
#
#
#
