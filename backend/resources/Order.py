from flask_restful import Resource
from flask import request
from models.Order import Order
from database import db

class OrderResource(Resource):
    def get(self):
        orders = Order.query.all()
        return [order.to_dict() for order in orders]

    def post(self):
        data = request.get_json()
        print(data)
        
        try:
            new_order = Order(
                id_client=int(data.get('id_client')),
                products=data.get('products'),
                total=float(data.get('total')),
                order_date=str(data.get('order_date')),
                is_accepted=False
            )
            
            db.session.add(new_order)
            db.session.commit()
            
            return {
                'message': 'Orden creada exitosamente',
                'order': new_order.to_dict()
            }, 201
        except Exception as e:
            db.session.rollback()
            return {'error': str(e)}, 400

    def put(self, order_id):
        order = Order.query.get_or_404(order_id)
        data = request.get_json()
        

    def delete(self, order_id):
        order = Order.query.get_or_404(order_id)
        db.session.delete(order)
        db.session.commit()
        return {'message': 'Orden eliminada exitosamente'}, 200