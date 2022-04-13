import os


class Config(object):
    """Base Configuration"""

    SECRET_KEY = "wowowowowo super secret string that will never be cracked or pushed to a public github repo wwowowowowow"

    JWT_ACCESS_LIFESPAN = {"hours": 24}
    JWT_REFRESH_LIFESPAN = {"days": 30}

    SQLALCHEMY_DATABASE_URI = "sqlite:///database/dev.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = True

    CACHE_TYPE = 'FileSystemCache'
    CACHE_DIR = './database/cache'
    CACHE_THRESHOLD = 250
    CACHE_DEFAULT_TIMEOUT = 300
    CACHE_IGNORE_ERRORS = True


class ProductionConfig(Config):
    """Base Configuration"""

    SECRET_KEY = "wowowowowo super secret string that will never be cracked or pushed to a public github repo wwowowowowow"


class DevelopmentConfig(Config):
    """Development Configuration"""


class TestingConfig(Config):
    """Testing Configuration"""

    TESTING = True
