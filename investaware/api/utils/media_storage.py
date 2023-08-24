import os
import requests
import posixpath

from django.conf import settings
from urllib.parse import urlencode
from django.core.files.storage import Storage
from requests.structures import CaseInsensitiveDict


class S3MicroServiceStorage(Storage):
    def __init__(self) -> None:
        self._microservice_url = settings.MICROSERVICE_URL
        self._bucket_name = settings.MICROSERVICE_BUCKET_NAME
        self.microservice_client_id = settings.MICROSERVICE_CLIENT_ID
        self.microservice_client_secret = settings.MICROSERVICE_CLIENT_SECRET

    # Helper Functions
    def _get_header(self):
        headers = CaseInsensitiveDict()
        headers["accept"] = "application/json"
        headers["client-id"] = self.microservice_client_id
        headers["client-secret"] = self.microservice_client_secret
        return headers

    def _get_presigned_url(self, name):
        """
        Generate a URL to the file.
        """
        params = {
            "bucket_name": self._bucket_name,
            "object_key": name,
        }
        resp = requests.get(
            f"{self._microservice_url}s3/pre_signed?{urlencode(params)}",
            headers=self._get_header(),
            timeout=settings.REQUESTS_DEFAULT_TIMEOUT
        )

        if resp.status_code == 200:
            return resp.json()["data"]
        else:
            raise Exception(f"Error getting url for {name}")

    def _get_presigned_upload_url(self, name):
        """
        Generate an upload URL to the file.
        """
        params = {
            "bucket_name": self._bucket_name,
            "object_key": name,
        }

        resp = requests.get(
            f"{self._microservice_url}s3/pre_signed/upload?{urlencode(params)}",
            headers=self._get_header(),
            timeout=settings.REQUESTS_DEFAULT_TIMEOUT
        )

        if resp.status_code == 200:
            return resp.json()

        else:
            raise Exception(resp.text)

    def _clean_name(self, name):
        """
        Cleans the name so that Windows style paths work
        """
        clean_name = posixpath.normpath(name).replace("\\", "/")

        if name.endswith("/") and not clean_name.endswith("/"):
            clean_name += "/"

        return clean_name

    # Storage Methods
    def _open(self, name, mode="rb"):
        url = self.url(name)
        return requests.get(url, stream=True, timeout=settings.REQUESTS_DEFAULT_TIMEOUT)

    def _save(self, name, content):
        cleaned_name = self._clean_name(name)

        if not hasattr(content, "seekable") or content.seekable():
            content.seek(0, os.SEEK_SET)

        data = self._get_presigned_upload_url(name)
        fields = data["fields"]
        files = {"file": content.read()}
        post_resp = requests.post(data["url"], data=fields, files=files, timeout=settings.REQUESTS_DEFAULT_TIMEOUT)
        return cleaned_name

    def url(self, name):
        return self._get_presigned_url(self._clean_name(name))

    def exists(self, name):
        pass
