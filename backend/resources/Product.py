from flask_restful import Resource
from flask import request
from models.Product import Product
from database import db
from utils.product_image import get_product_image

class ProductResource(Resource):
    def get(self):
        products = Product.query.all()
        return [product.to_dict() for product in products]

    def post(self):
        data = request.get_json()
        
        try:
            new_product = Product(
                id_provider=int(data.get('id_provider')),
                name=str(data.get('name')),
                description=str(data.get('description')),
                stock=int(data.get('stock')),
                price=float(data.get('price')),
                brand=str(data.get('brand')),
                type=str(data.get('type')),
            )
            
            db.session.add(new_product)
            db.session.commit()
            
            return {
                'message': 'Producto creado exitosamente',
                'product': new_product.to_dict()
            }, 201
        except Exception as e:
            db.session.rollback()
            return {'error': str(e)}, 400
        
    def put(self, product_id):
        product = Product.query.get_or_404(product_id)
        data = request.get_json()

        try:
            product.name = data.get('name', product.name)
            product.description = data.get('description', product.description)
            product.stock = int(data.get('stock', product.stock))
            product.price = float(data.get('price', product.price))
            product.brand = data.get('brand', product.brand)
            product.type = data.get('type', product.type)

            if data.get('name') != product.name or data.get('brand') != product.brand:
                product.image = get_product_image(data.get('name'), data.get('brand'))

            db.session.commit()
            return {'message': 'Producto actualizado exitosamente', 'product': product.to_dict()}, 200
        except Exception as e:
            db.session.rollback()
            return {'error': str(e)}, 400

    def delete(self, product_id):
        product = Product.query.get_or_404(product_id)
        db.session.delete(product)
        db.session.commit()
        return {'message': 'Producto eliminado exitosamente'}, 200