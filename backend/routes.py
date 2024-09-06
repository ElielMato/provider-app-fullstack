from flask import jsonify, request, Blueprint # type: ignore
from models.User import User
from database import db

auth = Blueprint('auth', __name__, url_prefix='/auth')
company = Blueprint('company', __name__, url_prefix='/company')

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
        businessName=data.get('businessName'),
        address=data.get('address'),
        country=data.get('country'),
        province=data.get('province'),
        postalCode=data.get('postalCode')
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
    
@company.route('/edit', methods=['POST'])
def edit_company():
    data = request.get_json()
    print(data)
    id = data.get('id')
    business_name = data.get('businessName')
    address = data.get('address')
    country = data.get('country')
    province = data.get('province')
    postal_code = data.get('postalCode')

    user = User.query.filter_by(id=id).first()
    if user:
        user.business_name = business_name if business_name is not None else user.business_name
        user.address = address if address is not None else user.address
        user.country = country if country is not None else user.country
        user.province = province if province is not None else user.province
        user.postal_code = postal_code if postal_code is not None else user.postal_code
        db.session.commit()
        return jsonify({"Mensaje": "Datos de la empresa actualizados correctamente"}), 201
    else:
        return jsonify({"Mensaje": "Usuario no encontrado"}), 404
    