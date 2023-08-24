from rest_framework import status
from rest_framework import generics
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from accounts.models import Accounts

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Accounts


class UsersView(generics.RetrieveAPIView):
    
    serializer_class = UsersSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user