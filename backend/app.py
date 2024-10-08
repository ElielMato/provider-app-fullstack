from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from database import db, FULL_URL_DB

from resources.auth.routes import auth
from resources.Company import Company
from resources.Product import ProductResource
from resources.Order import OrderResource

from models import User, Product, Order

app = Flask(__name__)
api = Api(app)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

migrate = Migrate()
migrate.init_app(app,db)

app.register_blueprint(auth)

api.add_resource(Company, '/company')
api.add_resource(ProductResource, '/products', '/products/<int:product_id>')
api.add_resource(OrderResource, '/orders', '/orders/<int:order_id>')

if __name__ == "__main__":
    app.run(port=5000)