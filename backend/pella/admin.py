from django.contrib import admin
from .models import Mentor, Internship, Referral, Mentee

class MentorAdmin(admin.ModelAdmin):
  list_display = ('id', 'name', 'email', 'bio', 'image')
  list_display_links = ('id', 'name')
  list_filter = ('name')
  list_editable = ('name', 'email', 'bio', 'image')
  list_per_page = 25
  search_fields = ('name', 'email', 'bio',)

admin.site.register(Mentor)