# save this as app.py
import requests
from flask import Flask, request

UNSPLASH_URL='https://api.unsplash.com/search/photos/'
UNSPLASH_KEY='W1dD9TQmbtfL0zWoBsJ7I212TNvxJVaP0v-ZI-4O-hg'

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route('/new-images')
def new_image():
    word = request.args.get("query")
    
    headers = {
        "Authorization": f"Client-ID {UNSPLASH_KEY}",
        "Accept-Version": "v1"
    }
    params = {
        "query": word,
        "per_page": 20
    }
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    
    data = response.json()
    return data

if __name__ == "__main__":
    app.run(port=5050)