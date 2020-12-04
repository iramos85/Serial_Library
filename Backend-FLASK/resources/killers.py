import models
from numpy import genfromtxt
from time import time
from datetime import datetime
from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict
from flask_login import current_user
import pandas
import csv


killer = Blueprint('killers', 'killer')

# current directory is this '/api/v1/killers'
@killer.route('/', methods=["GET"])
def get_all_killers():

    try:
        print(current_user.killers)
        return jsonify(data={}, status={"code": 201, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 401, "message": "Error getting the resources"})

@killer.route('/<id>', methods=["GET"])
def get_one_killer(id):
    killer = models.Killer.get_by_id(id)
    return jsonify(data=model_to_dict(killer), status={"code": 200, "message": "Success"})

# @killer.route('/seed', methods=["GET"])
# # Import CSV
# data = pd.read_csv (r'/Users/ianramos85/GA/Capstone/Serial_Library/Backend-FLASK/Data/killer_profiles.csv')   
# df = pd.DataFrame(data, columns= ['Name','Active','Summary'])

# # Connect to SQL Server
# conn = pyodbc.connect('Driver={SQL Server};'
#                         'Server=RON\SQLEXPRESS;'
#                         'Database=TestDB;'
#                         'Trusted_Connection=yes;')
# cursor = conn.cursor()

# # Create Table
# cursor.execute('CREATE TABLE Serial_Profiles (Name nvarchar(50), Active nvarchar(50), Summary int)')

# # Insert DataFrame to Table
# for row in df.itertuples():
#     cursor.execute('''
#                 INSERT INTO TestDB.dbo.people_info (Name)
#                 VALUES (?,?,?)
#                 ''',
#                 row.Name
#                 )
# conn.commit()
# return jsonify(data={}, status={"code": 200, "message": "Success"})

@killer.route('/seed', methods=["GET"])
def make_database():
    df = pandas.read_csv('/Users/ianramos85/GA/Capstone/Serial_Library/Backend-FLASK/resources/killer_profiles.csv')
    for row in df.iterrows():
        models.Killer.create(
            name=row[1].Name,
            active=row[1].Active,
            summary=row[1].Summary)

    # with open('/Users/ianramos85/GA/Capstone/Serial_Library/Backend-FLASK/Data/killer_profiles.csv','r') as csfile:
    #     csv_reader = csv.reader(csvfile, delimiter=',')
    #     engine.execute(
    #     insert query,[{"Name" : row[0]}]
    #     insert query,[{"Active" : row[1]}]
    #     insert query,[{"Summary" : row[2]}]
    return jsonify(data={}, status={"code": 200, "message": "Success"})

