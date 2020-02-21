from django.db import models

# Create your models here.

class Barang(models.Model):
    Gambar            = models.CharField(max_length = 200)
    Nama              = models.CharField(max_length = 200)
    Harga             = models.CharField(max_length = 200)
    Deskripsi1        = models.CharField(max_length = 200)
    Deskripsi2        = models.CharField(max_length = 200,default='')
    Deskripsi3        = models.CharField(max_length = 200,default='')
    
