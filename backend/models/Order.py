from database import db
from datetime import datetime

class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    id_client = db.Column(db.Integer, db.ForeignKey("user.id"))
    products = db.Column(db.JSON)
    total = db.Column(db.Float, nullable=False)
    order_date = db.Column(db.DateTime, default=datetime.utcnow)
    is_accepted = db.Column(db.Boolean, default=False) 

    def to_dict(self):
        return {
            'id': self.id,
            'id_client': self.id_client,
            'products': self.products,
            'total': self.total,
            'order_date': self.order_date.isoformat(),
            'is_accepted': self.is_accepted
        }