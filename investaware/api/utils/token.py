import hashlib

from django.conf import settings
from django.utils.crypto import get_random_string


def generate_token(length: int = settings.PASSWORD_TOKEN_LENGTH) -> str:
    return get_random_string(length=length)


def hash_token(token):
    return hashlib.sha256(token.encode("utf-8")).hexdigest()
