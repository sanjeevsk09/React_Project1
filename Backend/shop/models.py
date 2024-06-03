from django.db import models
import datetime
import os

def getfilename(request,filename):
    now_time=datetime.datetime.now().strftime("%Y%M%d%H:%M:%S")
    new_filename="%s%s"%(now_time,filename)
    return os.path.join('upload/',new_filename)

class studentregistration(models.Model):
    sr_first_name = models.CharField(max_length=70)
    sr_last_name = models.CharField(max_length=70)
    sr_phone_no = models.IntegerField()
    sr_country = models.CharField(max_length=70)
    sr_city = models.CharField(max_length=70)
    sr_state = models.CharField(max_length=70)
    sr_fee_type_id = models.CharField(max_length=70)
    sr_program_applied = models.CharField(max_length=70)
    sr_course_applied = models.CharField(max_length=70)
    sr_application_status = models.CharField(max_length=70)
    sr_application_date = models.CharField(max_length=70)
    sr_admission_date = models.DateField(max_length=70)

class student_address_details(models.Model):
    stad_address_details_address_id = models.CharField(max_length=300)
    stad_address_details_student_id = models.CharField(max_length=300)
    stad_address_details_address_type = models.CharField(max_length=300)
    stad_address_details_city = models.CharField(max_length=300)
    stad_address_details_state = models.CharField(max_length=300)
    stad_address_details_country = models.CharField(max_length=300)
    stad_address_details = models.IntegerField()

class student_registration(models.Model):
    sd_id = models.IntegerField()
    sd_student_code = models.IntegerField()
    sd_first_name = models.CharField(max_length=70)
    sd_last_name = models.CharField(max_length=70)
    sd_date_of_birth = models.DateField(max_length=60)
    sd_gender = models.CharField(max_length=70)
    sd_email = models.EmailField(max_length=70)
    sd_city = models.CharField(max_length=70)
    sd_semester = models.IntegerField()
    sd_branch_name = models.CharField(max_length=70)

class gate_pass(models.Model):
    gp_pass_id = models.IntegerField()
    gp_pass_id = models.CharField(max_length=70)
    gp_student_id = models.IntegerField()
    gp_pass_date = models.DateField(max_length=70)
    gp_pass_time = models.TimeField(max_length=70)
    gp_pass_destination= models.CharField(max_length=70)
    gp_pass_purpose = models.CharField(max_length=70)
    gp_pass_issued_by = models.CharField(max_length=70)















                                                        


# Create your models here.
