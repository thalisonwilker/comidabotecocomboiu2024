from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action

from .models import Votos
from .serializers import VotosSerializer

class VotosViewSets(ModelViewSet):
    queryset = Votos.objects.all()
    serializer_class = VotosSerializer

    @action(detail=False, methods=["GET"], url_path="validate")
    def validate(self, request, pk=None):
        cpf = request.GET.get("cpf", "")
        url_bar = request.GET.get("bar", "")
        ja_votou = Votos.objects.filter(cpf=cpf, bar__url_bar__iexact=url_bar).exists()
        return Response({}, status=200 if ja_votou == False else 400)