from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class Profiles(models.Model):
    name = models.CharField(("Profil ismi"), max_length=50)
    avatar = models.ImageField(("Profil Fotoğrafı"), upload_to="Users/Avatars/")

    def __str__(self):
        return self.name


class TvUser(AbstractUser):
    email = models.EmailField(("E-mail adresi"), max_length=254,unique=True)
    profile = models.ManyToManyField(Profiles, verbose_name=("profiller"))
    


