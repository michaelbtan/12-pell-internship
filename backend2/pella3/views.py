from django.shortcuts import render
from rest_framework import viewsets, permissions
from pella3.serializers import UserSerializer, MentorSerializer, InternshipSerializer, ReferralSerializer, MenteeSerializer
from pella3.models import Mentor, Internship, Referral, Mentee
from django.contrib.auth.models import User


class MentorViewSet(viewsets.ModelViewSet):
  queryset = Mentor.objects.all()
  serializer_class = MentorSerializer
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class InternshipViewSet(viewsets.ModelViewSet):
  queryset = Internship.objects.all()
  serializer_class = InternshipSerializer
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ReferralViewSet(viewsets.ModelViewSet):
  queryset = Referral.objects.all()
  serializer_class = ReferralSerializer
  # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class MenteeViewSet(viewsets.ModelViewSet):
  queryset = Mentee.objects.all()
  serializer_class = MenteeSerializer
  # permission_classes = [permissions.IsAuthenticatedOrReadOnly]