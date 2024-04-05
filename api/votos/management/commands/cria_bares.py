from django.core.management.base import BaseCommand, CommandError
from votos.models import Bar


class Command(BaseCommand):
    help = ""
    def handle(self, *args, **options):
        bares = [
            { "nome": "Toro Burger", "url_bar": "TORO" },
            { "nome": "Shokan Culinário Oriental", "url_bar": "SHOKAN" },
            { "nome": "Coronel Bier Coffee &  Beer", "url_bar": "CORONEL" },
            { "nome": "Casa Velha Bistrô e Creperia", "url_bar": "CASAVELHACREPERIA" },
            { "nome": "L'a Villa Gourmet", "url_bar": "LAVILLAGOURMET" },
            { "nome": "Pizzaria Pub do Ricardo", "url_bar": "PUBPIZZARIADORICARDO" },
            { "nome": "Bar do TRAUKO", "url_bar": "BARDOTRAUKO" },
            { "nome": "Temperia mineira", "url_bar": "TEMPERIAMINEIRA" }
            ]
        for bar in bares:
            if(not Bar.objects.filter(nome=bar["nome"]).exists()):
                Bar.objects.create(**bar)
