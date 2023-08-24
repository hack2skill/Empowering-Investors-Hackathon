from sklearn.base import BaseEstimator, TransformerMixin

class Embeddings(BaseEstimator, TransformerMixin):
    
    def __init__(self, url="https://youtu.be/3GGU2nE48mA?si=mhiwloo0USzZD-9R"):
        self.url = url

    def fit(self, X, y=None):
        return self
    
