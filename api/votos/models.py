from django.db import models
from uuid import uuid4

class Bar(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid4)
    nome = models.CharField(max_length=100, verbose_name="Nome do Bar", help_text="Máximo 50 caractares")
    url_bar = models.CharField(max_length=50, verbose_name="Código QR do bar", help_text="digite o texto do código QR, ex BARDOTRAUKO, PUBPIZZARIADORICARDO")

    def __str__(self):
        return f"{self.nome} - {self.url_bar.lower()}"

    class Meta:
        db_table = "bar"

class Votos(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid4)
    cpf = models.CharField(max_length=11, verbose_name="Seu CPF", help_text="Somente Dígitos")
    bar = models.ForeignKey(Bar, on_delete=models.PROTECT)

    apresentacao_prato = models.IntegerField(verbose_name="Apresentação do Prato", help_text="nota de 1 a 10")
    aroma_prato = models.IntegerField(verbose_name="Aroma do Prato", help_text="nota de 1 a 10")
    atendimento = models.IntegerField(verbose_name="Aroma do Prato", help_text="nota de 1 a 10")
    sabor_prato = models.IntegerField(verbose_name="Sabor do Prato", help_text="nota de 1 a 10")
    tempo_espera = models.IntegerField(verbose_name="Tempo de espera", help_text="nota de 1 a 10")
    bebida = models.IntegerField(verbose_name="Bebida", help_text="nota de 1 a 10")
    higiene_local = models.IntegerField(verbose_name="Higiene do local", help_text="nota de 1 a 10")
    ambiente = models.IntegerField(verbose_name="Hambiente", help_text="nota de 1 a 10")

    def __str__(self):
        return f"voto em {self.bar.nome}"

    class Meta:
        db_table = "votos"