from flask_restful import Resource
from flask import request
from models.User import User
from database import db

class Company(Resource):
    
    def post(self):
        data = request.get_json()
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
            return {"Mensaje": "Datos de la empresa actualizados correctamente"}, 201
        else:
            return {"Mensaje": "Usuario no encontrado"}, 404