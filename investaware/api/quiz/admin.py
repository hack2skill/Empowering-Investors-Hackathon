from django.contrib import admin

# Register your models here.

from .models import Quiz, Questions, QuizResponse

admin.site.register(Quiz)
admin.site.register(Questions)
admin.site.register(QuizResponse)

