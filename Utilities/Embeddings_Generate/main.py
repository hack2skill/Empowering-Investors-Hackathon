from sklearn.base import BaseEstimator, TransformerMixin
from gensim.models.doc2vec import Doc2Vec
from gensim.utils import simple_preprocess


class Embeddings(BaseEstimator, TransformerMixin):
    
    def __init__(self,model_path = "Utilities/Models/doc2vec_model"):
        self.model_path = model_path
        
    def fit(self, X, y=None):
        return self

    def transform(self, X):
        print("Text recieved as X=",X)

        """
            Generate embeddings and return the embeddings
        """

        model = Doc2Vec.load(self.model_path)
        # Preprocess the new paragraph

        new_paragraph_tokens = simple_preprocess(X)

        # Infer embeddings for the new paragraph
        new_paragraph_vector = model.infer_vector(new_paragraph_tokens)

        # Now, `new_paragraph_vector` contains the embeddings for the new paragraph
        print("Generated the infer vectors ")
        print(new_paragraph_vector)
        print("Moving to the next stage now")
        return new_paragraph_vector


