from rest_framework import serializers

from .models import Votos
from .models import Bar

class VotosSerializer(serializers.ModelSerializer):
    bar = serializers.CharField(required=False)
    cpf = serializers.CharField(max_length=11)

    apresentacao_prato = serializers.IntegerField()
    aroma_prato = serializers.IntegerField()
    atendimento = serializers.IntegerField()
    sabor_prato = serializers.IntegerField()
    tempo_espera = serializers.IntegerField()
    bebida = serializers.IntegerField()
    higiene_local = serializers.IntegerField()
    ambiente = serializers.IntegerField()

    class Meta:
        model = Votos
        fields = ["bar", "cpf", "apresentacao_prato", "aroma_prato", "atendimento", "sabor_prato", "tempo_espera", "bebida", "higiene_local", "ambiente"]


    def validate(self, attrs):
        cpf = attrs.get("cpf")
        bar = attrs.get("bar")
        if(Votos.objects.filter(cpf=cpf, bar__url_bar__iexact=bar).exists()):
            raise serializers.ValidationError("Já votou")
        return attrs

    def create(self, validated_data):
        bar = validated_data.pop("bar", )
        print(validated_data.get("cpf"))
        voto = validated_data.copy()
        voto["bar"] = Bar.objects.get(url_bar__iexact=bar)
        print(voto.get("cpf"))

        Votos.objects.create(**voto)
        return {}

    def to_representation(self, instance):
        return {}