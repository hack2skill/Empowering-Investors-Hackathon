from sklearn.base import BaseEstimator, TransformerMixin
from gensim.models.doc2vec import Doc2Vec
from gensim.utils import simple_preprocess
import joblib
import numpy as np


class Fin_Advise(BaseEstimator, TransformerMixin):
    
    def __init__(self,model_path = "Utilities/Models/Fin_Advise_model.pkl"):
        self.model_path = model_path
        
    def fit(self, X, y=None):
        return self

    def transform(self, X):
        print("Inferred vectors recieved as ->", X)
        print("Type of vectors = ", type(X))
        X = np.array(X)
        X = [X]
        
        loaded_model = joblib.load(self.model_path)  # Replace with the path to your saved model

        predictions = loaded_model.predict(X)

        print(predictions)
        return predictions

if __name__ == "__main__":
    # Load the saved model
    loaded_model =  joblib.load("Utilities/Models/Fin_Advise_model.pkl")# Replace with the path to your saved model
    print(loaded_model)

    # Make predictions
    new_paragraph_vector = np.array([-0.36111203, -0.24920224,  0.62616724, -0.22456664, -0.06911723,
         0.7089261 ,  0.3706734 , -0.50296277, -0.36461082, -0.35107777,
         0.13728353,  0.15671739, -0.0711432 ,  1.1023189 , -0.49616072,
         0.18149595, -0.18339647,  0.27106458,  0.3413246 ,  0.5554006 ])
    # Make predictions using the loaded model
    new_paragraph_vector = [new_paragraph_vector]
    predictions = loaded_model.predict(new_paragraph_vector)

    # Print the predictions
    print(predictions)
