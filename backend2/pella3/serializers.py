from rest_framework import serializers
from pella3.models import Mentor, Internship, Referral, Mentee
from django.contrib.auth.models import User


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

class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        return User.objects.create_superuser(**validated_data)
    class Meta:
        model = User
        fields = ['username', 'password', 'email']