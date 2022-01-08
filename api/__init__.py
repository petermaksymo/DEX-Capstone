import os

from flask import Flask
from flask_cors import CORS

ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

def create_app(config_name):
    app = Flask(__name__)

    config_module = f"api.config.{config_name.capitalize()}Config"

    app.config.from_object(config_module)
    app.app_context().push

    CORS(app, origins=["'", "http://localhost:3000"])

    with app.app_context():
        return app
