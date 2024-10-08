from database import db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    id_provider = db.Column(db.Integer, db.ForeignKey("user.id"))
    name = db.Column(db.String(250))
    description = db.Column(db.String(250))
    stock = db.Column(db.Integer)
    price = db.Column(db.Float)
    brand = db.Column(db.String(250))
    type = db.Column(db.String(100))
    image = db.Column(db.String(250))

    def to_dict(self):
        return {
            'id': self.id,
            'id_provider': self.id_provider,
            'name': self.name,
            'description': self.description,
            'stock': self.stock,
            'price': self.price,
            'brand': self.brand,
            'type': self.type,
            'image': self.image
        }