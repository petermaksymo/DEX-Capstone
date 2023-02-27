import os
from flask import Flask
from flask_praetorian import Praetorian
from flask_cors import CORS
from flask_caching import Cache

from api.database import db

import api.database.models
from api.database.models import Account

ENVIRONMENT = os.getenv("ENVIRONMENT", "development")
APP_BASE_URL = os.getenv("APP_BASE_URL", 'http://localhost:3000')

guard = Praetorian()
cache = Cache()

def create_app(config_name):
    app = Flask(__name__)

    config_module = f"api.config.{config_name.capitalize()}Config"

    app.config.from_object(config_module)
    app.app_context().push

    db.init_app(app)
    cache.init_app(app)

    CORS(app, origins=[APP_BASE_URL])

    guard.init_app(app, Account)

    with app.app_context():
        cache.clear()
        db.create_all()

        return app
