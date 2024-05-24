from django.shortcuts import render,redirect
from .form import *
from movieApp.models import TvUser
from django.contrib.auth import authenticate,login,logout
# Create your views here.


def registerPage(request):
    context = {}
    context["registerForm"] = UserForm

    if request.method == 'POST':
        form = UserForm(request.POST)

        # bu form geçerli mi
        if form.is_valid():
            #veritabanına kaydet
            form.save()
            #logine yönlendir
            return redirect('login')
        else:
            #hataver
            print("form hatasi: ",form.errors)
            context["formError"] = form.errors
            return render(request,'register.html',context)

    else:
        # get ise sayfayı hazırla
        return render(request,"register.html",context)





def loginPage(request):

    if request.method == 'POST':

        username = request.POST.get('username')
        password = request.POST.get('password')

        if username and password:
            user = authenticate(request,username=username,password=password)

            if user is None:
                
                return redirect('login')

            else:
                #login yap
                login(request,user)
                return redirect('profile')

        else:
            #inputlar boş
            return redirect('login')

    else:

        return render(request,"login.html")
    

def logoutPage(request):
    logout(request)

    return redirect('login')




def profilePage(request):
    context = {}
    context['form'] = ProfileForm

    if request.method == 'POST':
        new_profile = ProfileForm(request.POST,request.FILES)

        if new_profile.is_valid():
            #kaydet
            new_profile = new_profile.save()
            #new_profile i adminin diğer profili olarak ekle
            request.user.profile.add(new_profile)
            return redirect('profile')

        else:
            print("PROFİLE HATASI: ",new_profile.errors)

           

            return redirect('profile')

    else:
         #update profile form
         profileUpdateForm = {}
         for profile in request.user.profile.all():

            profileUpdateForm[profile.id] = ProfileForm(instance=profile)

         context["updateForms"] = profileUpdateForm.items()
         return render(request,"profile.html",context)
    

def updateProfile(request,profileId):

    if request.method == 'POST':
        instance = Profiles.objects.filter(id = profileId).first()

        if instance is None:
            return redirect('profile')
        profile = ProfileForm(request.POST, request.FILES, instance=instance)

        if profile.is_valid():
            profile = profile.save()

        else:
            pass

        return redirect('profile')

    else:
        return redirect('profile')