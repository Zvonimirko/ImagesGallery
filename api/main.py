# save this as app.py
from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route('/new-image')
def new_image():
    word = request.args.get("query")
    return {"word": word}

if __name__ == "__main__":
    app.run(port=5050)