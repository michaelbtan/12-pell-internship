from rest_framework import routers
from .api import LeadViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')

urlpatterns = router.urls
