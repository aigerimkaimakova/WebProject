from rest_framework import serializers

from api.models import Category, Manager

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = 'id', 'name'
class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manager
        fields = 'id', 'username'

class ImageSerializer(serializers.Serializer):
    name  = serializers.CharField()
    description = serializers.CharField()
    images = serializers.CharField()
    price = serializers.FloatField()
    category = CategorySerializer()
    id= serializers.IntegerField(required=False)

class OrderSerializer(serializers.Serializer):
    name = serializers.CharField()
    phone = serializers.CharField()
    image= ImageSerializer(required=False)