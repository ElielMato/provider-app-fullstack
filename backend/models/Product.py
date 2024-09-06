from database import db 

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user  = db.Column(db.Integer)
    name = db.Column(db.String(250))
    description = db.Column(db.String(250))
    stock = db.Column(db.String(250))
    price = db.Column(db.String(250))
    brand = db.Column(db.String(250))
    type = db.Column(db.String(100))

    def __str__(self):
        return (
            f'id: {self.id}, '
            f'id_company: {self.id_company}, '
            f'name: {self.name}, '
            f'description: {self.description}, '
            f'stock: {self.stock}, '
            f'price: {self.price}, '
            f'brand: {self.brand}, '
            f'type: {self.type}, '
        )
        