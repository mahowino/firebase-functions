"""djangoproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import myapp
from django.contrib import admin
from django.urls import path
from myapp import views
from myapp.views import gohome, post
from myapp.views import getrates
from myapp.views import contactMe

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', gohome),
    path('home/rates/', getrates),
    path('home/contactMe/',contactMe),
    path('home/contactMe/posted/',post)
   
]
