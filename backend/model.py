import numpy as np
from sklearn.linear_model import LinearRegression
import joblib

# Sample data
X = np.array([[100], [200], [300], [400]])
y = np.array([120, 220, 320, 430])

model = LinearRegression()
model.fit(X, y)

joblib.dump(model, "model.pkl")