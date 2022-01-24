from rest_framework import serializers
from pella.models import Mentor, Internship, Referral, Mentee

class MentorSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Mentor
    fields = ['name', 'email', 'bio', 'img']

class InternshipSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Internship
    fields = ['title', 'description', 'industry', 'img', 'paid_unpaid', 'mentor']

class ReferralSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Referral
    fields = ['title', 'comment', 'rating', 'mentor']

class MenteeSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Mentee
    fields = ['name', 'email', 'interest']