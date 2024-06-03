from rest_framework import serializers
from .models import student_address_details,gate_pass,student_registration,studentregistration


class student_address_detailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = student_address_details
        fields = '__all__'

class gate_passSerializer(serializers.ModelSerializer):
    class Meta:
        model = gate_pass
        fields = '__all__'

class student_registrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = student_registration
        fields = '__all__'

class studentregistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = studentregistration
        fields = '__all__'