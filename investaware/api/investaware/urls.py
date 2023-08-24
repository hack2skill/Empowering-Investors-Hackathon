from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("blogs/", include("blogs.urls")),
    path("accounts/", include("accounts.urls")),
    path('api-auth/', include('rest_framework.urls')),
    path("quiz/", include("quiz.urls")),
]
