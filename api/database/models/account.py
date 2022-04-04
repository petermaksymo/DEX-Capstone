from sqlalchemy_serializer import SerializerMixin

from api import db
from api.database.models.utils import Base


class Account(Base, SerializerMixin):
    """Model for account THIS IS EXTREMELY SKETCHY"""

    __tablename__ = "account"

    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(
        db.Text, index=False, unique=False, nullable=False
    )  # hashed username
    address = db.Column(db.String, unique=True, nullable=False)
    private_bytes = db.Column(db.BLOB, unique=True, nullable=False)

    serialize_rules = ("-id", "-password", "-private_bytes")

    @property
    def identity(self):
        return self.id

    @property
    def rolenames(self):
        return ["user"]

    @classmethod
    def lookup(cls, username):
        return cls.query.filter_by(username=username).one_or_none()

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    def is_valid(self):
        return True
