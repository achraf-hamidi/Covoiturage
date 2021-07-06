from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from .api import Carviewset,Offerviewset
from . import views


router =routers.DefaultRouter()
router.register('api/Cars',Carviewset,'cars')
router.register('api/Offers',Offerviewset,'Offers')


urlpatterns = [
    path('api/v1/Cars',views.CarList.as_view(),name="cars"),
    path('api/v1/Cars<str:idCar>',views.CarView.as_view(),name="car"),
    path('api/v1/Offers',views.OfferList.as_view(),name="offers"),
    path('api/v1/Offers<str:idOffer>',views.CarView.as_view(),name="offer"),
    path('auth/',include('djoser.urls') ),
    path('auth/',include('djoser.urls.authtoken') ),
    path('auth/', include('djoser.urls.jwt')),

]

urlpatterns += router.urls
