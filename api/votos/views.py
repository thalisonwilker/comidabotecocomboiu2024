from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

from .models import Votos
from .serializers import VotosSerializer

class VotosViewSets(viewsets.ModelViewSet):
    queryset = Votos.objects.all()
    serializer_class = VotosSerializer
