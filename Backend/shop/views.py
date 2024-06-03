from django.shortcuts import render
import pyodbc
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from shop.serializer import student_address_detailsSerializer
from shop.serializer import gate_passSerializer
from shop.serializer import student_registrationSerializer
from shop.serializer import studentregistrationSerializer

@api_view([ 'POST'])
def student_address_details(request):

    if request.method == 'POST':
        serializer = student_address_detailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def gate_pass(request):

    if request.method == 'POST':
        serializer = gate_passSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view([ 'POST'])
def student_registration(request):

    if request.method == 'POST':
        serializer = student_registrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view([ 'POST'])
def studentregistration(request):

    if request.method == 'POST':
        
        serializer = studentregistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        print("hello")
        print(serializer.errors)

        return Response(serializer.errors, status=status.HTTP_201_CREATED)
    


    




    











    
    # Rest of the view code

    
                        

# Create your views here.
