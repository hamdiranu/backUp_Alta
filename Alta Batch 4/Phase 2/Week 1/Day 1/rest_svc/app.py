from flask import Flask, request
import json
from flask_restful import Resource, Api, reqparse

app = Flask (__name__)

api = Api(app)

@app.route('/')

def index():
    return "<h1> Hello: This is main route <h1>"

###==================================== Person Class ============================###

class Person():

    def __init__(self):
        self.reset()

    def reset(self):
        self.name = None
        self.age = 0
        self.sex = None

###==================================== Routes ============================###

# @app.route('/name',methods=['GET','POST','PUT','DELETE','PATCH'])

# def name_controller():
#     person = Person()

#     if request.method == 'POST' :
#         data = request.get_json()
#         person.name = data['name']
#         person.age = data['age']
#         person.sex = data['sex']
#         return json.dumps(person.__dict__), 200, {'Content-Type' : 'application/json' }

#     elif request.method == 'GET':
#         return json.dumps(person.__dict__), 200, {'Content-Type' : 'application/json' }

#     elif request.method == 'PUT' :
#         data = request.get_json()
#         person.name = data['name']
#         person.age = data['age']
#         person.sex = data['sex']
#         return json.dumps(person.__dict__), 200, {'Content-Type' : 'application/json' }

#     elif request.method == 'DELETE':
#         return 'Deleted', 200

#     else :
#         return 'Not yet implement', 501

class PersonResource(Resource):

    person = Person()

    # def get(self):
    #     return 'This is Get', 200

    # def post(self):
    #     return 'This is Post', 200

    # def put(self):
    #     return 'This is Put', 200

    # def delete(self):
    #     return 'Deleted', 200

    # def patch(self):
    #     return 'Not yet implement', 501
    
    #=============================================#

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

api.add_resource(PersonResource,'/name')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port=5000)