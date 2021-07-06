from django.contrib.auth.models import Permission
from base.models import Car, Offer,User
from rest_framework import viewsets,permissions
from .serializers import CarSerializer,OfferSerializer

class Carviewset(viewsets.ModelViewSet):
    
   
     queryset=Car.objects.all()
     permission_classes=[
         permissions.AllowAny
     ]
     serializer_class=CarSerializer
    
    #  permission_classes = [
    #      permissions.IsAuthenticated,
    #  ]
    #  serializer_class = CarSerializer

    #  def create(self, request):
    #      pass

    #  def retrieve(self, request, pk=None):
    #      pass

    #  def update(self, request, pk=None):
    #     pass

    #  def partial_update(self, request, pk=None):
    #     pass

    #  def destroy(self, request, pk=None):
    #     pass

    # #  def get_queryset(self):
    # #      return self.request.user.all()

    # #  def perform_create(self, serializer):
    # #      serializer.save(owner=self.request.user)

class Offerviewset(viewsets.ModelViewSet):
    queryset=Offer.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=OfferSerializer