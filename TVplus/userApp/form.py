from django import forms

from movieApp.models import *

class UserForm(forms.ModelForm):

    username = forms.CharField(label="",widget=forms.TextInput(attrs={'placeholder': "Username"}))
    email = forms.CharField(label="",help_text="",widget=forms.EmailInput(attrs={'placeholder': "E-mail adresiniz"}))
    password = forms.CharField(label="",widget=forms.PasswordInput(attrs={'placeholder': "Şifre"}))

    class Meta:
        model = TvUser
        fields = ['username','email','password']


class ProfileForm(forms.ModelForm):

    
    class Meta:
        model = Profiles
        fields = ["name","avatar"]