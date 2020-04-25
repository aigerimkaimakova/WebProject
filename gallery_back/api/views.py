from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from api.models import Category, Image, Order
from api.serializers import CategorySerializer, ImageSerializer, OrderSerializer

class CategoriesListView(APIView):
    def get(self, request):
        try:
            category_list = Category.objects.all()
        except:
            return JsonResponse({"404": "no categories"}, safe=False)
        serializer = CategorySerializer(category_list, many=True)
        return JsonResponse(serializer.data, safe=False)

class ImagesByCategory(APIView):
    def get(self, request, id):
        try:
            category = Category.objects.get(id=id)
            image_list = category.image_set.all()
        except:
            return JsonResponse({"404": "no image"}, safe=False)
        serializer = ImageSerializer(image_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    

@api_view(['GET', 'PUT', 'DELETE'])
def image_detailed_view(request, id):
    if request.method == 'GET':
        try:
            image_detailed = Image.objects.get(id=id)
        except:
            return JsonResponse({"404": "no image"}, safe=False)
        serializer = ImageSerializer(image_detailed)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        try:
            image_detailed = Image.objects.get(id=id)
        except:
            return JsonResponse({"404": "no image"}, safe=False)
        image_detailed.name = request.data.get('name')
        image_detailed.price = request.data.get('price')
        image_detailed.images = request.data.get('images')
        image_detailed.save()
        serializer = ImageSerializer(image_detailed)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'DELETE':
        try:
            image_detailed = Image.objects.get(id=id)
        except:
            return JsonResponse({"404": "no image"}, safe=False)
        image_detailed.delete()
        return JsonResponse({"204": "deleted image"}, safe=False)

@api_view(['POST'])
def order(request):
    Order.objects.create(
        name = request.data['name'],
        phone = request.data['phone']
    )

    return JsonResponse({"":""}, safe=False)

@api_view(['POST'])
def create(request):
    try:
        category = Category.objects.get(id = request.data.get('category_id'))
    except:
        return JsonResponse({"":""}, safe=False)

    try:
        image = Image.objects.create(
            name = request.data.get('name'),
            category = category,
            price = request.data.get('price'),
            description = request.data.get('description'),
            images = request.data.get('images')
        )
    except:
        return JsonResponse({"500": "cant create image"}, safe=False)

    return JsonResponse(ImageSerializer(image).data, safe=False)
