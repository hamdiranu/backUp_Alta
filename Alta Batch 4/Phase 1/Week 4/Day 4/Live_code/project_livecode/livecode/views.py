from django.shortcuts import render, redirect, get_object_or_404
from .models import Barang

# Create your views here.

def home(request):
    return render(request, 'home.html',{})

def barang(request):
    barang = Barang.objects.all()
    return render(request, 'home.html',{'barangs':barang})
    
def detail(request, barang_id):
    barangs = get_object_or_404(Barang,pk = barang_id)
    return render(request, 'details.html',{'barangs': barangs})