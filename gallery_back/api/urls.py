from django.urls import path
from api import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('categories/', views.CategoriesListView.as_view()),
    path('images/categories/<int:id>/', views.ImagesByCategory.as_view()),
    path('images/<int:id>/', views.image_detailed_view),
    path('images/create/', views.create),
    path('cart/', views.order),
    path('login/', obtain_jwt_token),
    
]