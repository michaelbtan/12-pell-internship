from rest_framework import serializers
from pella.models import Mentor, Internship, Referral, Mentee

class MentorSerializer(serializers.HyperlinkedModelSerializer):
  internships = serializers.StringRelatedField(many=True)
  referrals = serializers.StringRelatedField(many=True)
  class Meta:
    model = Mentor
    fields = ['id', 'name', 'email', 'bio', 'imageURL', 'internships', 'referrals']

class InternshipSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Internship
    fields = ['id', 'title', 'description', 'industry', 'imageURL', 'paid', 'mentor']

class ReferralSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Referral
    fields = ['id', 'title', 'comment', 'rating', 'mentor']

class MenteeSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Mentee
    fields = ['id', 'name', 'email', 'interest']