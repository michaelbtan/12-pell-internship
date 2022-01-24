from django.shortcuts import render
from rest_framework import viewsets
from pella.serializers import MentorSerializer, InternshipSerializer, ReferralSerializer, MenteeSerializer
from pella.models import Mentor, Internship, Referral, Mentee

class MentorViewSet(viewsets.ModelViewSet):
  queryset = Mentor.objects.all()
  serializer_class = MentorSerializer

class InternshipViewSet(viewsets.ModelViewSet):
  queryset = Internship.objects.all()
  serializer_class = InternshipSerializer

class ReferralViewSet(viewsets.ModelViewSet):
  queryset = Referral.objects.all()
  serializer_class = ReferralSerializer

class MenteeViewSet(viewsets.ModelViewSet):
  queryset = Mentee.objects.all()
  serializer_class = MenteeSerializer