import models

from flask import Blueprint, jsonify, request

from playhouse.shortcuts import model_to_dict

from flask_login import current_user
import pandas
import csv

# We can use this as a Python decorator for routing purposes
# first argument is blueprints name
# second argument is it's import_name
killer = Blueprint('killers', 'killer')

# current directory is this '/api/v1/killers'
@killer.route('/', methods=["GET"])
def get_all_killers():
    ## find the killer's profile and change each one to a dictionary into a new array
    try:
    	# Iterate through the database to get all rows of killers from the scraper
    	# killer and append it as a list
        # killers = [model_to_dict(killer) for killer in current_user.killers]
        print(current_user.killers)
        return jsonify(data={}, status={"code": 201, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 401, "message": "Error getting the resources"})

@killer.route('/<id>', methods=["GET"])
def get_one_killer(id):
    # print(id, 'reserved word?')
    killer = models.Killer.get_by_id(id)
    # print(killer.__dict__)
    return jsonify(data=model_to_dict(killer), status={"code": 200, "message": "Success"})

@killer.route('/seed', methods=["GET"])
def make_database():
    df = pandas.read_csv('/Users/ianramos85/GA/Capstone/Serial_Library/Backend-FLASK/Data/killer_profiles.csv')
    print(df)
    return jsonify(data={}, status={"code": 200, "message": "Success"})

