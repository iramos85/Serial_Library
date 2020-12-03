from flask import Flask, render_template, request, redirect, url_for
from flask_cors import CORS
# from resources.dogs import dog # adding this line
# from resources.users import user
# import models
import csv

DEBUG = True
PORT = 8000

app = Flask(__name__)

@app.route("/")
def index():
    with open('data/killer_profiles.csv') as csv_file:
        data = csv.reader(csv_file, delimiter=',')
        first_line = True
        profile = []
        for row in data:
            if not first_line:
                profile.append({
                    "name": row[1],
                    "active": row[2],
                    "summary": row[3]
                })
            else:
                first_line = False
    return render_template('index.html', profile=profile)

if __name__ == "__main__":
    app.run(debug=DEBUG, port=PORT)