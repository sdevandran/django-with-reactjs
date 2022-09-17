from django.urls import path
from . import views

urlpatterns = [
    path('my_tasks/', views.HelloView.as_view(), name ='my_tasks'),
]

