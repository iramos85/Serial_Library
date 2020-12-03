from flask import Flask, render_template, request, redirect, url_for
from flask_cors import CORS
import csv

DEBUG = True
PORT = 8000

app = Flask(__name__)

@app.route("/")
def index():
    with open('data/profiles.csv') as csv_file:
        data = csv.reader(csv_file, delimiter=',')
        first_line = True
        name = []
        for row in data:
            if not first_line:
                name.append({
                    "name": row[1],
                    "url": row[2]
                })
            else:
                first_line = False
    return render_template('index.html', name=name)

if __name__ == "__main__":
    app.run(debug=DEBUG, port=PORT)