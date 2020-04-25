from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=1000)

class Image(models.Model):
    name  = models.CharField(max_length=100)
    description = models.TextField()
    images = models.CharField(max_length=500)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)

class Order(models.Model):
    image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)

class Manager(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
        