from django.contrib import admin
from .models import Bar
import openpyxl
from django.http import HttpResponse
from io import BytesIO

from votos.models import Votos
from django.db.models import Sum


def export_to_excel(modeladmin, request, queryset):
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Todos os votos".upper()
    ws2 = wb.create_sheet(title="Contagem dos votos".upper())

    ws.append(["Bar", "CPF", "Apresentação do Prato", "Aroma do Prato",
              "Sabor do Prato","Atendimento", "Tempo de espera", "Bebida", "Higiene do local", "Hambiente"])

    ws2.append(["Bar", "Apresentação do Prato", "Aroma do Prato", "Sabor do Prato", "Atendimento",
               "Tempo de espera", "Bebida", "Higiene do local", "Hambiente"])

    data_obj = {}
    bares = Bar.objects.all()

    for bar in bares:
        votos = Votos.objects.filter(bar=bar)

        if (not bar.nome in data_obj.keys()):
            data_obj[bar.nome] = {
                "total_apresentacao_prato": votos.aggregate(
                    total_apresentacao_prato=Sum("apresentacao_prato")
                ).get("total_apresentacao_prato", 0) or 0,

                "total_aroma_prato": votos.aggregate(
                    total_aroma_prato=Sum("aroma_prato")
                ).get("total_aroma_prato", 0) or 0,

                "total_sabor_prato": votos.aggregate(
                    total_sabor_prato=Sum("sabor_prato")
                ).get("total_sabor_prato", 0) or 0,

                "total_atendimento": votos.aggregate(
                    total_atendimento=Sum("atendimento")
                ).get("total_atendimento", 0) or 0,

                "total_tempo_espera": votos.aggregate(
                    total_tempo_espera=Sum("tempo_espera")
                ).get("total_tempo_espera", 0) or 0,

                "total_bebida": votos.aggregate(
                    total_bebida=Sum("bebida")
                ).get("total_bebida", 0) or 0,

                "total_higiene_local": votos.aggregate(
                    total_higiene_local=Sum("higiene_local")
                ).get("total_higiene_local", 0) or 0,

                "total_ambiente": votos.aggregate(
                    total_ambiente=Sum("ambiente")
                ).get("total_ambiente", 0) or 0
            }

    for obj in Votos.objects.all():
        row = [obj.bar.nome, obj.cpf, obj.apresentacao_prato, obj.aroma_prato,
               obj.sabor_prato, obj.atendimento, obj.tempo_espera, obj.bebida, obj.higiene_local, obj.ambiente]
        ws.append(row)

    for aba2 in data_obj.keys():
        bar = aba2
        total_apresentacao_prato = data_obj[aba2]["total_apresentacao_prato"]
        total_aroma_prato = data_obj[aba2]["total_aroma_prato"]
        total_sabor_prato = data_obj[aba2]["total_sabor_prato"]
        total_atendimento = data_obj[aba2]["total_atendimento"]
        total_tempo_espera = data_obj[aba2]["total_tempo_espera"]
        total_bebida = data_obj[aba2]["total_bebida"]
        total_higiene_local = data_obj[aba2]["total_higiene_local"]
        total_ambiente = data_obj[aba2]["total_ambiente"]

        row = [aba2, total_apresentacao_prato, total_aroma_prato, total_aroma_prato, total_sabor_prato,
               total_atendimento, total_tempo_espera, total_bebida, total_higiene_local, total_ambiente]
        ws2.append(row)

    # Salva o workbook em um objeto BytesIO em memória
    excel_file = BytesIO()
    wb.save(excel_file)
    excel_file.seek(0)  # Vai para o começo do arquivo em memória após salvá-lo

    # Define o nome do arquivo e cria a resposta HTTP
    filename = 'Export.xlsx'
    response = HttpResponse(excel_file.read(
    ), content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    response['Content-Disposition'] = 'attachment; filename="%s"' % filename

    # Não se esqueça de fechar o objeto BytesIO se não for mais necessário
    excel_file.close()

    return response


admin.site.add_action(export_to_excel, "Exportar Votações para excel")


@admin.register(Bar)
class MeuModeloAdmin(admin.ModelAdmin):
    list_display = ('nome', 'url_bar')
    list_filter = ('nome', 'url_bar')
    search_fields = ('nome', 'url_bar')


admin.site.register(Votos)
