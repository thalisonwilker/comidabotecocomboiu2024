
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from votos.views import VotosViewSets

router = DefaultRouter()

router.register("votos", VotosViewSets, basename="votos")

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
