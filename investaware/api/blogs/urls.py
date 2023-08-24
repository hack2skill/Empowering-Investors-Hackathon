from django.urls import path
from blogs.views import BlogsView, ChatGPTView

urlpatterns = [
    path("", BlogsView.as_view(), name="api_blogs"),
    path("chatgpt/", ChatGPTView.as_view(), name="api_chatgpt"),
]
