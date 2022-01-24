from django.shortcuts import render
from rest_framework import viewsets, permissions
from pella.serializers import MentorSerializer, InternshipSerializer, ReferralSerializer, MenteeSerializer
from pella.models import Mentor, Internship, Referral, Mentee


class MentorViewSet(viewsets.ModelViewSet):
  queryset = Mentor.objects.all()
  serializer_class = MentorSerializer
  # permission_classes = [permissions.IsAuthenticated]

class InternshipViewSet(viewsets.ModelViewSet):
  queryset = Internship.objects.all()
  serializer_class = InternshipSerializer
  # permission_classes = [permissions.IsAuthenticated]

class ReferralViewSet(viewsets.ModelViewSet):
  queryset = Referral.objects.all()
  serializer_class = ReferralSerializer
  # permission_classes = [permissions.IsAuthenticated]

class MenteeViewSet(viewsets.ModelViewSet):
  queryset = Mentee.objects.all()
  serializer_class = MenteeSerializer
  # permission_classes = [permissions.IsAuthenticated]