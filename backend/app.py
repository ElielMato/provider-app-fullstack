from flask import Flask # type: ignore
from flask_cors import CORS # type: ignore
from routes import auth
from flask_migrate import Migrate # type: ignore
from database import db, FULL_URL_DB

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth)

app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

migrate = Migrate()
migrate.init_app(app,db)

if __name__ == "__main__":
    app.run(port=5000)