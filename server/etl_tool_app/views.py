from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    """View for the home page"""
    return render(request, 'home.html')

def contact(request):
    """View for the contact page"""
    if request.method == 'POST':
        # Handle form submission
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        # Do something with the form data
        return HttpResponse('Thanks for contacting us!')
    else:
        # Display contact form
        return render(request, 'contact.html')
