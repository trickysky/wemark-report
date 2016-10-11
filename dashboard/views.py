from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse, JsonResponse

def test(request):
	return JsonResponse({'msg': 'Hello tiankun!!!'})
