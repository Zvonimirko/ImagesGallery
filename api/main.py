from flask import Flask, request
from dotenv import load_dotenv
import requests
import os

from mongo_client import insert_test_document
from flask_cors import CORS

load_dotenv(dotenv_path="./.env.local")

UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")
UNSPLASH_URL = "https://api.unsplash.com/photos/random"
DEBUG_MODE = bool(os.environ.get("DEBUG_MODE", True))

if not UNSPLASH_KEY:
    raise EnvironmentError("Please create .env.local file and insert UNSPLASH_KEY")

app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = DEBUG_MODE


@app.route("/")
def hello():
    return "Hello, World!"


@app.route("/new-images")
def new_image():
    word = request.args.get("query")

    headers = {
        "Authorization": f"Client-ID {UNSPLASH_KEY}",
        "Accept-Version": "v1",
        "Access-Control-Allow-Origin": "*",
    }
    params = {"query": word, "per_page": 3}
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)

    data = response.json()
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
