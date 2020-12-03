
import models

from flask import Blueprint, jsonify, request

from playhouse.shortcuts import model_to_dict

from flask_login import current_user

# We can use this as a Python decorator for routing purposes
# first argument is blueprints name
# second argument is it's import_name
dog = Blueprint('dogs', 'dog')

# current directory is this '/api/v1/dogs'
@dog.route('/', methods=["GET"])
def get_all_dogs():
    ## find the dogs and change each one to a dictionary into a new array
    try:
    	# Iterate through the database to get all rows of dogs from the table
    	# dog and append it as a list
        dogs = [model_to_dict(dog) for dog in current_user.dogs]
        print(dogs)
        return jsonify(data=dogs, status={"code": 201, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 401, "message": "Error getting the resources"})

# In javascript we were using (req, res) but not here
@dog.route('/', methods=["POST"])
def create_dogs():
    ## see request payload anagolous to req.body in express
    payload = request.get_json()
    #  dog = models.Dog.create(name=payload['name'], owner=payload["owner"], breed=payload["breed"])
    print(type(payload), 'payload')
    # dog = models.Dog.create(**payload)
    dog = models.Dog.create(name=payload['name'], owner=current_user.id, breed=payload['breed'])
    ## see the object
    print(dog.__dict__)
    ## Look at all the methods
    print(dir(dog))
    # Change the model to a dict
    print(model_to_dict(dog), 'model to dict')
    dog_dict = model_to_dict(dog)
    return jsonify(data=dog_dict, status={"code": 201, "message": "Success"})

@dog.route('/<id>', methods=["GET"])
def get_one_dog(id):
    # print(id, 'reserved word?')
    dog = models.Dog.get_by_id(id)
    # print(dog.__dict__)
    return jsonify(data=model_to_dict(dog), status={"code": 200, "message": "Success"})

@dog.route('/<id>', methods=["PUT"])
def update_dog(id):
    payload = request.get_json()
    # print(payload)
    query = models.Dog.update(**payload).where(models.Dog.id==id)
    query.execute()
    dog = model_to_dict(models.Dog.get_by_id(id))
    return jsonify(data=dog, status={"code": 200, "message": "Success"})

@dog.route('/<id>', methods=["DELETE"])
def delete_dog(id):
    # we are trying to delete the dog with the id
    # check here for how: http://docs.peewee-orm.com/en/latest/peewee/querying.html#deleting-records
    delete_query = models.Dog.delete().where(models.Dog.id == id)
    num_of_rows_deleted = delete_query.execute()
    # print(num_of_rows_deleted)

    # todo: write logic -- if if no rows were deleted return
    # some message that delete didn't happen

    return jsonify(
    data={},
    message="Successfully deleted {} dog with id {}".format(num_of_rows_deleted, id),
    status={"code": 200}
    )
