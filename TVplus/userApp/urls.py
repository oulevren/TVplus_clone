from django.urls import path
from userApp.views import *

urlpatterns = [
    path('register',registerPage,name="register"),
    path('login',loginPage,name="login"),
    path('logout',logoutPage,name="logout"),
    path('profile',profilePage,name="profile"),
    path('update/profiles/<profileId>',updateProfile,name="update-profiles")
]
