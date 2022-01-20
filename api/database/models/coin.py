from sqlalchemy_serializer import SerializerMixin
from api import db
from api.database.models.utils import Base


class Coin(Base, SerializerMixin):
    """Model for coin"""

    __tablename__ = "coin"

    key = db.Column(db.String, primary_key=True, nullable=False)
    name = db.Column(db.String, unique=True, nullable=False)
    short_name = db.Column(db.String, nullable=False)
    color = db.Column(db.String, nullable=False)
    price = db.Column(db.String, nullable=False)
