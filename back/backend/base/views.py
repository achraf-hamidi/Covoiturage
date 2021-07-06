from django.shortcuts import render

from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Car,Offer,User
from .serializers import CarSerializer,OfferSerializer,UserSerializer
from rest_framework import status
# Create your views here.


class CarList(APIView):
    def get(self,request):
        products=Car.objects.all()
        serializer=CarSerializer(products,many=True)
        return Response(serializer.data)
    def post(self,request):
        dataCar={
            "car_name": request.data.get("car_name"),
            "car_description":  request.data.get("car_description"),
            "car_size":  request.data.get("car_size"),
            "car_sites": request.data.get("car_sites"),
            "user_id":  request.data.get("user_id")

        }
        serializer=CarSerializer(data=dataCar,many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



class CarView(APIView):
    def get(self,request,idCar):
        Car=Car.objects.get(id=idprod)
        serializer=CarSerializer(Car,many=False)
        return Response(serializer.data)
        

class OfferList(APIView):
     def get(self,request):
            products=Car.objects.all()
            serializer=CarSerializer(products,many=True)
            return Response(serializer.data)

     def post(self,request):
        dataOffer={
            "offre_title": request.data.get("offre_title"),
            "offre_start_time":  request.data.get("offre_start_time"),
            "offre_starting_point":  request.data.get("offre_starting_point"),
            "offre_end_time": request.data.get("offre_end_time"),
            "offre_ending_point":  request.data.get("offre_ending_point"),
            "offre_availble_sites":  request.data.get("offre_availble_sites"),
            "offre_user":  request.data.get("offre_user"),
            "offre_car":  request.data.get("offre_car")


        }
        serializer=OfferSerializer(data=dataOffer,many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class OfferView(APIView):
    def get(self,request,idOffer):
        Offe=Offer.objects.get(id=idOffer)
        serializer=OfferSerializer(Offe,many=False)
        return Response(serializer.data)
        