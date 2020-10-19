from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

# Create your models here.

#Custom User Model used for rest-auth -->
class User(AbstractUser):
    username = models.CharField(blank=False, max_length=30, unique=True)
    email = models.CharField(blank=False, max_length=35, unique=True)
    isCustomer = models.BooleanField(blank=False, default=False)


    def publish(self):
        self.save()

# Customer Model -->
class Customer(models.Model):
    user = models.OneToOneField('User', on_delete=models.CASCADE)
    name = models.CharField(blank=False, max_length=30)
    address = models.CharField(max_length=100)
    phone = models.IntegerField(blank=False, max_length=10, default='0000000000')
    dp = models.FileField(upload_to='customer/')
    boxId = models.ForeignKey('DeliveryBox', blank=True, null=True, on_delete=models.SET_NULL)

    def publish(self):
        self.save()


# Delivery Agent Model -->
class DeliveryAgent(models.Model):
    user = models.OneToOneField('User', on_delete=models.CASCADE)
    name = models.CharField(blank=False, max_length=30)
    phone = models.IntegerField(blank=False, max_length=10, default='0000000000')
    dp = models.FileField(upload_to='deliveryagent/')
    logisiticId = models.ForeignKey('LogisticCompany', blank=False, on_delete=models.CASCADE)

    def publish(self):
        self.save()


# Order Model -->
class Order(models.Model):
    orderid = models.CharField(blank=False, unique=True, max_length=15, default='XXXXX0000000000')
    productName = models.CharField(max_length=50)
    productType = models.CharField(max_length=15)
    seller = models.CharField(max_length=40, blank=False)
    amount = models.IntegerField(max_length=10, blank=False, default='0')
    eta = models.DateField()
    orderDate = models.DateField(blank=False)
    status = models.CharField(blank=False, default='Out For Delivery', max_length=30)
    deliveryAddress = models.CharField(blank=False, max_length=100)
    customerId = models.ForeignKey('Customer', blank=False, on_delete=models.CASCADE)
    agentId = models.ForeignKey('DeliveryAgent', null=True, on_delete=models.SET_NULL)
    ecommerceId = models.ForeignKey('ECommerce', on_delete=models.CASCADE)
    logisticId = models.ForeignKey('LogisticCompany', null=True, on_delete=models.SET_NULL)

    def publish(self):
        self.save()


# Delivery Box Model-->
class DeliveryBox(models.Model):
    boxId = models.CharField(blank=False, unique=True, max_length=15)
    manufacturer = models.CharField(max_length=30)
    customerId = models.ForeignKey('Customer', null=True, on_delete=models.SET_NULL)

    def publish(self):
        self.save()

# Logistics Company Model -->
class LogisticCompany(models.Model):
    name = models.CharField(blank=False, max_length=30, unique=True)
    owner = models.CharField(max_length=40)

    def publish(self):
        self.save()

# E-Commerce Site Model -->
class ECommerce(models.Model):
    name = models.CharField(blank=False, max_length=30, unique=True)
    owner = models.CharField(max_length=40)

    def publish(self):
        self.save()