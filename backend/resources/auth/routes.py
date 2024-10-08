from flask import jsonify, request, Blueprint # type: ignore
from models.User import User
from database import db

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')

    emailDb = User.query.filter_by(email=email).first()
    if emailDb:
        return jsonify({'error': 'Este correo ya está en uso.'}), 409

    new_user = User(
        name=data.get('name'),
        email=email,
        password=data.get('password'),
        roleType=data.get('roleType'),
        business_name=data.get('business_name'),
        address=data.get('address'),
        country=data.get('country'),
        province=data.get('province'),
        postal_code=data.get('postal_code')
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify(id=new_user.id, role=new_user.role, roleType=new_user.roleType), 201

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    emailDb = User.query.filter_by(email=email).first()
    if emailDb and emailDb.password == password:
        print("Logueado Correctamente")
        return jsonify(id=emailDb.id, role=emailDb.role, roleType=emailDb.roleType), 201
    else:
        response = {'Mensaje': 'Error'}
        print("Error en la Contraseña")
        return jsonify(response), 401
    