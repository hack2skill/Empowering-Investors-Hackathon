import openai

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from django.conf import settings
from blogs.models.blogs_model import Blogs

class ChatGPTView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):

        openai.api_key = settings.OPENAI_API_KEY
        question = request.query_params.get("question")
        message = Blogs.objects.get(id=request.query_params.get("id")).content.strip()
        prompt = f"Based on the content available in the following data only\n{message}. Answer the question {question}"
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "You are an advisor on the based on the given context",
                },
                {"role": "user", "content": f"{prompt}"},
            ],
        )
        return Response(
            {
                "content": response["choices"][0]["message"]["content"].replace(
                    "\n", "<br/>"
                )
            },
            status=status.HTTP_200_OK,
        )
