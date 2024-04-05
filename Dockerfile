FROM python:3.9-slim-buster

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY ./api /app

RUN pip install --no-cache-dir openpyxl django-cors-headers djangorestframework django && python manage.py collectstatic
