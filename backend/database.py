from flask_sqlalchemy import SQLAlchemy # type: ignore

db = SQLAlchemy()

USER_DB='root'
PASS_DB=''
URL_DB='localhost'
NAME_DB='proveedor'
FULL_URL_DB=f'postgresql://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'
