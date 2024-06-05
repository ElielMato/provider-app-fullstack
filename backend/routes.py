from flask import jsonify, request, Blueprint # type: ignore

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/register', methods=['POST'])
def register():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    print(name, email, password)

    return jsonify({}),200