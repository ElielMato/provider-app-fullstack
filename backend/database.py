from flask_sqlalchemy import SQLAlchemy # type: ignore

db = SQLAlchemy()

USER_DB='postgres'
PASS_DB='200403'
URL_DB='localhost'
NAME_DB='proveedorApp'
FULL_URL_DB=f'postgresql://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'