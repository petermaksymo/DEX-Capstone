import os 

class Config(object):
    """Base Configuration"""

    SECRET_KEY = "wowowowowo super secret string that will never be cracked or pushed to a public github repo wwowowowowow"

    JWT_ACCESS_LIFESPAN = {"hours": 24}
    JWT_REFRESH_LIFESPAN = {"days": 30}


class ProductionConfig(Config):
    """Base Configuration"""

    SECRET_KEY = "wowowowowo super secret string that will never be cracked or pushed to a public github repo wwowowowowow"


class DevelopmentConfig(Config):
    """Development Configuration"""


class TestingConfig(Config):
    """Testing Configuration"""

    TESTING = True