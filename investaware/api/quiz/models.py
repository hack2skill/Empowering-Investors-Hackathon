from django.db import models
from blogs.models import Blogs
from accounts.models import Accounts
from uuid import uuid4

# Create your models here.
class Questions(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    question = models.CharField(max_length=200,null=True)
    op1 = models.CharField(max_length=200,null=True)
    op2 = models.CharField(max_length=200,null=True)
    op3 = models.CharField(max_length=200,null=True)
    op4 = models.CharField(max_length=200,null=True)
    ans = models.CharField(max_length=200,null=True)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return str(self.id)
    
class Quiz(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    name = models.CharField(max_length=200,null=False)
    questions = models.ManyToManyField(Questions)
    is_active = models.BooleanField(default=True)
    blog = models.ForeignKey(Blogs, on_delete=models.PROTECT)
    
    def __str__(self):
        return self.name
    
class QuizResponse(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    quiz = models.ForeignKey(Quiz, on_delete=models.PROTECT)
    user = models.ForeignKey(Accounts, on_delete=models.PROTECT)
    score = models.IntegerField(null=True,blank=True)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.user.username