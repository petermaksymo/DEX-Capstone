from sqlalchemy_serializer import SerializerMixin

from api import db
from api.database.models.utils import Base


class Account(Base, SerializerMixin):
    """Model for account THIS IS EXTREMELY SKETCHY"""

    __tablename__ = "account"

    username = db.Column(db.String, unique=True, nullable=False)
    private_bytes = db.Column(db.BLOB, unique=True, nullable=False)

    serialize_only = ("id", "username", "created_at", "updated_at")
