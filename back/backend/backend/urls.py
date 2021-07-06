
from django.contrib import admin
from django.urls import path,include
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('server/',index ,name="index"),
    path('auth/',include('base.urls')),
    path('front/',include('frontend.urls')),
    path('',include('base.urls'))

]
