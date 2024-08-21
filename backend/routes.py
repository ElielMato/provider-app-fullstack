from flask import jsonify, request, Blueprint # type: ignore
from models.User import User
from database import db
import requests # type: ignore

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/register', methods=['POST'])
def register():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    role = 'user'

    if User.query.filter_by(email=email).first():
        print("Ya existe un usuario registrado con ese email")
        response = {'Mensaje': 'Error'}
        return jsonify(response), 401
    else:
        user = User(name=name, email=email, password=password, role=role)
        db.session.add(user)
        db.session.commit()
        print("Registrado Correctamente")
        return jsonify(role=role),200

@auth.route('/login', methods=['POST'])
def login():
    data =  request.get_json()
    email = data.get('email')
    password = data.get('password')

    emailDb = User.query.filter_by(email=email).first()
    role = emailDb.role
    if emailDb and emailDb.password == password:
        print("Logueado Correctamente")
        return jsonify(role=role),200
    else:
        response = {'Mensaje': 'Error'}
        print("Error en la Contraseña")
        return jsonify(response), 401