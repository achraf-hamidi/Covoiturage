from djoser.serializers import UserCreateSerializer ,UserSerializer
from rest_framework import fields, serializers
from .models import *

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model=User
        fields=('id','email','username','password','first_name','last_name','phone')


class CarSerializer (serializers.ModelSerializer):
    class Meta:
        model=Car
        fields="__all__"


class OfferSerializer (serializers.ModelSerializer):
    class Meta:
        model=Offer
        fields="__all__"