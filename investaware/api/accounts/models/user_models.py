import os

# UUID4
from uuid import uuid4

import requests
from django.conf import settings

# Django Contrib
from django.contrib.auth.models import AbstractUser

# Django Models
from django.db import models
from django.utils import timezone

# Utils
from utils.token import hash_token
from utils.token import generate_token
from utils.media_storage import S3MicroServiceStorage


def profile_pic_upload(instance, filename):
    ext = filename.split(".")[-1]
    return f"{settings.TENANT_NAME}/profile/{instance.id}/{uuid4().hex}.{ext}"


class Accounts(AbstractUser):
    ROLES = (
        ("-", "--"),
        ("U", "User"),
        ("M", "Moderator"),
        ("A", "Author"),
    )
    DEFAULT_PERMISSIONS = {
        "-": [0, 0, 0, 0, 0, 0, 0, 0],
        "U": [1, 0, 1, 0, 1, 1, 1, 1],
        "M": [1, 0, 0, 1, 1, 1, 1, 1],
        "A": [1, 1, 1, 1, 1, 1, 1, 1],
    }
    id = models.UUIDField(editable=False, primary_key=True, default=uuid4)
    username = models.CharField(verbose_name="Full Name", max_length=50, unique=False)
    email = models.EmailField(verbose_name="Email Address", unique=True)
    contact = models.CharField(max_length=20)
    dob = models.DateField(default="1999-01-01")
    profile_pic = models.ImageField(upload_to=profile_pic_upload, null=True, blank=True)
    role = models.CharField(max_length=5, choices=ROLES, default="-")

    # Permissions for various users
    can_read_blogs = models.BooleanField(default=False)
    can_write_blogs = models.BooleanField(default=False)
    can_ask_question = models.BooleanField(default=False)
    can_answer_question = models.BooleanField(default=False)
    can_comment = models.BooleanField(default=False)
    can_chatgpt = models.BooleanField(default=False)
    can_solve_quiz = models.BooleanField(default=False)
    can_rate_blogs = models.BooleanField(default=False)

    first_name = None
    last_name = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        """Return email address to represent the user"""
        return self.email

    def save(self, *args, **kwargs):
        """Override the save method to set initial user access"""
        if not self.profile_pic:
            r = S3MicroServiceStorage()
            response_url = r._get_presigned_url(
                name=f"{settings.TENANT_NAME}/sample_profile.png"
            )
            response = requests.get(response_url, stream=True, timeout=settings.REQUESTS_DEFAULT_TIMEOUT)
            if response.status_code == 200:
                if not os.path.isdir(f"{settings.TENANT_NAME}/"):
                    os.makedirs(f"{settings.TENANT_NAME}/")
                with open(f"{settings.TENANT_NAME}/sample_profile.png", "wb") as f:
                    for chunk in response:
                        f.write(chunk)
            self.profile_pic = f"{settings.TENANT_NAME}/sample_profile.png"
            # Remove image once it has been uploaded
            os.remove(f"{settings.TENANT_NAME}/sample_profile.png")

        if self._state.adding:
            self.set_permission(self.DEFAULT_PERMISSIONS[self.role])
        super(Accounts, self).save(*args, **kwargs)

    def set_permission(self, arr):
        """Set permissions for the user"""
        self.can_read_blogs = arr[0]
        self.can_write_blogs = arr[1]
        self.can_ask_question = arr[2]
        self.can_answer_question = arr[3]
        self.can_comment = arr[4]
        self.can_chatgpt = arr[5]
        self.can_solve_quiz = arr[6]
        self.can_rate_blogs= arr[7]


class TokenLog(models.Model):
    """Model to store token and related data"""

    user = models.ForeignKey(Accounts, on_delete=models.CASCADE)
    token = models.CharField(max_length=255)
    is_blacklisted = models.BooleanField(default=False)
    created_at = models.DateTimeField()
    expire_at = models.DateTimeField()

    class Meta:
        ordering = ["-created_at"]

    def __str__(self) -> str:
        return self.user.email

    @classmethod
    def create_token(cls, user, **kwargs):
        """Create a token for the user"""
        token = cls.objects.filter(user=user, is_blacklisted=False).first()
        if token and not token.is_expired():
            raise Exception("Token already sent")

        token = generate_token()
        cls.objects.create(user=user, token=hash_token(token), **kwargs)
        return token

    def save(self, *args, **kwargs):
        self.created_at = timezone.now()
        if self.expire_at is None:
            self.expire_at = self.created_at + timezone.timedelta(
                seconds=settings.PASSWORD_TOKEN_DURATION
            )
        super().save(*args, **kwargs)

    def is_expired(self):
        is_expired = timezone.now() > self.expire_at or self.is_blacklisted

        if is_expired and not self.is_blacklisted:
            self.is_blacklisted = True
            self.save()

        return is_expired

    def blacklist(self):
        self.is_blacklisted = True
        self.save()
