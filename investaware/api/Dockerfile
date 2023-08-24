FROM python:3.8

RUN python -m pip install --upgrade pip
ENV PYTHONUNBUFFERED=1
COPY requirements.txt requirements.txt
RUN python -m pip install -r requirements.txt

COPY . .