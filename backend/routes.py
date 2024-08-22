from flask import jsonify, request, Blueprint # type: ignore
from models.User import User
from database import db
import requests # type: ignore

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    role = data.get('role', 'user')
    # roleType = data.get('roleType')
    business_name = data.get('businessName')
    address = data.get('address')
    country = data.get('country')
    province = data.get('province')
    postal_code = data.get('postalCode')


    if User.query.filter_by(email=email).first():
        print("Ya existe un usuario registrado con ese email")
        response = {'Mensaje': 'Error'}
        return jsonify(response), 401
    else:
        user = User(
            name=name,
            email=email,
            password=password,
            role=role,
            # roleType=roleType,
            business_name=business_name,
            address=address,
            country=country,
            province=province,
            postal_code=postal_code
        )
        db.session.add(user)
        db.session.commit()
        print("Registrado Correctamente")
        return jsonify(role=role),200

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    emailDb = User.query.filter_by(email=email).first()
    if emailDb and emailDb.password == password:
        print("Logueado Correctamente")
        return jsonify(role=emailDb.role), 200
    else:
        response = {'Mensaje': 'Error'}
        print("Error en la Contraseña")
        return jsonify(response), 401