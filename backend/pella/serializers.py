from rest_framework import serializers
from pella.models import Mentor, Internship, Referral, Mentee

class MentorSerializer(serializers.HyperlinkedModelSerializer):
  internships = serializers.StringRelatedField(many=True)
  referrals = serializers.StringRelatedField(many=True)

  class Meta:
    model = Mentor
    fields = ['name', 'email', 'bio', 'image', 'internships', 'referrals']

class InternshipSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Internship
    fields = ['title', 'description', 'industry', 'image', 'paid_unpaid', 'mentor']

class ReferralSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Referral
    fields = ['title', 'comment', 'rating', 'mentor']

class MenteeSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Mentee
    fields = ['name', 'email', 'interest']