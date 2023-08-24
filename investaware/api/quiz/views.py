from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from blogs.models.blogs_model import Blogs, Tag
from quiz.models import Quiz, QuizResponse, Questions
from quiz.serializers import QuizSerializer, QuizResponseSerializer, QuestionsSerializer

# Create your views here.

class QuizView(APIView):

    serializer_class = QuizSerializer

    def get(self, request):
        id = request.query_params.get("id")
        if id:
            serializer = self.serializer_class(Quiz.objects.get(pk=id))
            return Response(serializer.data)
        else:
            serializer = self.serializer_class(Quiz.objects.filter(is_active=True), many=True)
            return Response(serializer.data)
        
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def patch(self, request):
        serializer = self.serializer_class(Quiz.objects.get(id=request.data.get("id")), data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def delete(self, request):
        quiz = Quiz.objects.get(id=request.data.get("id"))
        quiz.is_active = False
        quiz.save()
        return Response("Deleted", status=status.HTTP_201_CREATED)
    

class QuestionsView(APIView):

    serializer_class = QuestionsSerializer

    def get(self, request):
        id = request.query_params.get("id")
        if id:
            serializer = self.serializer_class(Questions.objects.get(pk=id))
            return Response(serializer.data)
        else:
            serializer = self.serializer_class(Questions.objects.filter(is_active=True), many=True)
            return Response(serializer.data)
        
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def patch(self, request):
        serializer = self.serializer_class(Questions.objects.get(id=request.data.get("id")), data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def delete(self, request):
        question = Questions.objects.get(id=request.data.get("id"))
        question.is_active = False
        question.save()
        return Response("Deleted", status=status.HTTP_201_CREATED)
    
class QuizResponseView(APIView):

    serializer_class = QuizResponseSerializer

    def get(self, request):
        user = request.query_params.get("user")
        if id:
            serializer = self.serializer_class(QuizResponse.objects.filter(user=user))
            return Response(serializer.data)
        else:
            serializer = self.serializer_class(QuizResponse.objects.filter(is_active=True), many=True)
            return Response(serializer.data)
        
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def patch(self, request):
        serializer = self.serializer_class(QuizResponse.objects.get(id=request.data.get("id")), data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def delete(self, request):
        quizresponse = QuizResponse.objects.get(id=request.data.get("id"))
        quizresponse.is_active = False
        quizresponse.save()
        return Response("Deleted", status=status.HTTP_201_CREATED)
