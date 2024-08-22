from database import db 

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    email = db.Column(db.String(250))
    password = db.Column(db.String(250))
    role = db.Column(db.String(250))
    # roleType = db.Column(db.String(250))
    business_name = db.Column(db.String(100))
    address = db.Column(db.String(200))
    country = db.Column(db.String(100))
    province = db.Column(db.String(100))
    postal_code = db.Column(db.String(20))

    def __str__(self):
        return (
            f'id: {self.id}, '
            f'name: {self.name}, '
            f'email: {self.email}, '
            f'password: {self.password}, '
            f'role: {self.role}, '
            # f'roleType: {self.roleType}, '
            f'businessName: {self.business_name}, '
            f'address: {self.address}, '
            f'country: {self.country}, '
            f'province: {self.province}, '
            f'postalCode: {self.postal_code}, '
        )
        