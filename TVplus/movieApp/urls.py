from django.urls import path
from movieApp.views import *



urlpatterns = [
    path('',index,name="page-home"),
    path('filmler-diziler-kanallar',dashboard,name='dashboard'),
]
