from flask import jsonify, request, Blueprint # type: ignore
from models.User import User
from database import db 
import requests # type: ignore

auth = Blueprint('auth', __name__, url_prefix='/auth')
pokemon = Blueprint('pokemon', __name__, url_prefix='/pokemon')

@auth.route('/register', methods=['POST'])
def register():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']

    if User.query.filter_by(email=email).first():
        print("Ya existe un usuario registrado con ese email")
        response = {'Mensaje': 'Error'}
        return jsonify(response), 401
    else:
        user = User(name=name, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        print("Registrado Correctamente")
        return jsonify({}),200

@auth.route('/login', methods=['POST'])
def login():
    data =  request.get_json()
    email = data.get('email')
    password = data.get('password')

    emailDb = User.query.filter_by(email=email).first()
    if emailDb and emailDb.password == password:
        print("Logueado Correctamente")
        return jsonify({}),200
    else:
        response = {'Mensaje': 'Error'}
        print("Error en la Contraseña")
        return jsonify(response),401
    
@pokemon.route('/<string:pokemon_name>', methods=['GET'])
def get_pokemon(pokemon_name):
    url = f"https://pokeapi.co/api/v2/pokemon/{pokemon_name.lower()}"
    response = requests.get(url)

    if response.status_code == 200:
        pokemon_data = response.json()
        name = pokemon_data['name']
        types = [t['type']['name'] for t in pokemon_data['types']]
        
        pokemon_info = {
            "name": name,
            "types": types
        }

        print(pokemon_info)

        return jsonify(pokemon_info), 200
    else:
        return jsonify({"error": "No se pudo obtener datos del Pokémon."}), 404
