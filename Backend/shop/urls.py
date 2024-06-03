from django.urls import path
from . import views


urlpatterns=[
    path('gate_pass/',views.gate_pass,name="gate_pass"),
    path('student_registration/',views.student_registration,name="student_registration"),
    path('studentregistration/',views.studentregistration,name="studentregistration"),
    path('student_address_details/',views.student_address_details,name="student_address_details"),

]


