from flask import Flask, jsonify
from flask_cors import CORS

# Step 1: Create Flask app
app = Flask(__name__)

# Step 2: Enable CORS (to allow frontend React access)
CORS(app)

# Step 3: Define a simple route to test connection
@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to Flask Backend! 🚀",
        "status": "success"
    })

# Step 4: Another route (optional for testing)
@app.route('/mood')
def mood():
    return jsonify({
        "user": "Rudresh A S",
        "mood": "Feeling Positive 😎",
        "status": "success"
    })

# Step 5: Run the app
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)