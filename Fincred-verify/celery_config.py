
from celery import  Celery
from config import settings

celery = Celery(
    'tasks',
    broker=settings.CELERY_BROKER_URL,
    backend=settings.CELERY_RESULT_BACKEND,
    include=['get_youtube']
)

celery.conf.update(
    task_serializer='json',
    result_serializer='json',
    accept_content=['json'],
)
