from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class User(AbstractUser):
    email=models.EmailField(verbose_name='email',max_length=255,unique=True)
    phone =models.CharField(null=True,max_length=255)
    REQUIRED_FIELDS =['username','phone','first_name','last_name']
    USERNAME_FIELD ='email'

    def get_username(self):
        return self.email


class Car (models.Model):
    car_name=models.CharField(max_length=50,null=False)
    car_description=models.TextField(null=True,blank=True)
    user_id=models.ForeignKey(User,on_delete=models.SET_NULL,null=True,blank=True,related_name="cars")
    car_size = models.IntegerField(null=True,default=0)
    car_sites = models.IntegerField(null=True,default=1)

    def get_car(self):
        return self.user_id 


class Offer(models.Model):
    offre_title = models.CharField(max_length=255,)
    offre_start_time =models.TimeField()
    offre_starting_point = models.CharField(max_length=255)
    offre_end_time =models.TimeField()
    offre_ending_point = models.CharField(max_length=255)
    offre_availble_sites =models.IntegerField()
    offre_user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True,blank=True)
    offre_car =models.ForeignKey(Car,on_delete=models.SET_NULL,null=True,blank=True)

    def get_car(self):
        return self.offre_title