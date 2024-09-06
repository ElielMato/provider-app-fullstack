from database import db 

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_client  = db.Column(db.Integer)
    id_provider = db.Column(db.Integer)
    products = db.Column(db.String(250)) # Ver si son varios productos, lista con cantidad y id del producto
    price_total = db.Column(db.String(250))

    def __str__(self):
        return (
            f'id: {self.id}, '
            f'id_client: {self.id_client}, '
            f'id_provider: {self.id_provider}, '
            f'products: {self.products}, '
            f'price_total: {self.price_total}, '
        )
        