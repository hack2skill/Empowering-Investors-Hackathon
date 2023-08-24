from rest_framework import status
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from blogs.models.blogs_model import Blogs, Tag


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = "__all__"


class BlogsView(APIView):
    serializer_class = BlogSerializer

    def get(self, request):
        id = request.query_params.get("id")
        if id:
            serializer = self.serializer_class(Blogs.objects.get(pk=id))
            return Response(serializer.data)
        else:
            serializer = self.serializer_class(Blogs.objects.filter(published=True), many=True)
            return Response(serializer.data)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def patch(self, request):
        serializer = self.serializer_class(Blogs.objects.get(id=request.data.get("id")), data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request):
        blog = Blogs.objects.get(id=request.data.get("id"))
        blog.published = False
        blog.save()
        return Response("Deleted", status=status.HTTP_201_CREATED)