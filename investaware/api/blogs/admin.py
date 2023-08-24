from django.contrib import admin

# Register your models here.
from .models import Blogs, Tag

admin.site.register(Tag)
admin.site.register(Blogs)