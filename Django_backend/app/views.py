from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import File
from django.http import JsonResponse


class HelloView(APIView):
	# permission_classes = (IsAuthenticated, )

	def get(self, request):
		data = list(File.objects.all().values())
		return Response(data)
