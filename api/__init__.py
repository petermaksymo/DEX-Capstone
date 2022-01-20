import os
from flask import Flask
from flask_cors import CORS

from api.database import db

import api.database.models

ENVIRONMENT = os.getenv("ENVIRONMENT", "development")


def create_app(config_name):
    app = Flask(__name__)

    config_module = f"api.config.{config_name.capitalize()}Config"

    app.config.from_object(config_module)
    app.app_context().push

    db.init_app(app)

    CORS(app, origins=["'", "http://localhost:3000"])

    with app.app_context():
        db.create_all()

        return app
