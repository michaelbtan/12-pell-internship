from ast import BinOp
import email
from django.db import models

class Mentor(models.Model):
  name = models.CharField(max_length=100)
  email = models.EmailField(max_length=100)
  bio = models.CharField(max_length=256)
  img = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100),

  def __str__(self):
    return self.name

class Internship(models.Model):
  title = models.CharField(max_length=256)
  description = models.CharField(max_length=256)
  img = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100),
  industry = models.CharField(max_length=100)
  paid_unpaid = models.BooleanField()
  mentor = models.ForeignKey(Mentor, on_delete=models.CASCADE, related_name="internships")

  def __str__(self):
    return self.title

class Referral(models.Model):
  title = models.CharField(max_length=256)
  comment = models.CharField(max_length=256)
  rating = rating = models.FloatField()
  mentor = models.ForeignKey(Mentor, on_delete=models.CASCADE, related_name="referrals")

  def __str__(self):
    return self.title

class Mentee(models.Model):
  name = models.CharField(max_length=100)
  email = models.EmailField(max_length=100)
  interest = models.CharField(max_length=256)

  def __str__(self):
    return self.name