from flask import Blueprint
from flask_restful import Api, reqparse, Resource

from . import Person

bp_person = Blueprint('person', __name__)
api = Api(bp_person)


################################################
#              USING RESTFUL-API               #  
################################################

class PersonResource(Resource):

    person = Person()

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', location = 'json', required = True)
        parser.add_argument('age', location = 'json', type = int, required = True)
        parser.add_argument('sex', location = 'json')
        args = parser.parse_args()

        self.person.name = args['name']
        self.person.age = args['age']
        self.person.sex = args['sex']

        return self.person.__dict__, 200, {'Content-Type' : 'application/json' }
    
    def get(self):
        return self.person.__dict__, 200, {'Content-Type' : 'application/json' }

    def put(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', location = 'json', required = True)
        parser.add_argument('age', location = 'json', type = int, required = True)
        parser.add_argument('sex', location = 'json')
        args = parser.parse_args()

        self.person.name = args['name']
        self.person.age = args['age']
        self.person.sex = args['sex']

        return self.person.__dict__, 200, {'Content-Type' : 'application/json' }

    def delete(self):
        self.person = Person()
        return 'Deleted', 200

    def patch(self):
        return 'Not yet implement', 501

api.add_resource(PersonResource, '')