from django.urls import path
from quiz.views import QuizView, QuestionsView, QuizResponseView

urlpatterns = [
    path("", QuizView.as_view(), name="api_blogs"),
    # path("<uuid:id>/", QuizView.as_view(), name="api_blogs"),
    path("questions/", QuestionsView.as_view(), name="api_questions"),
    # path("questions/<uuid:id>/", QuestionsView.as_view(), name="api_question"),
    path("response/", QuizResponseView.as_view(), name="api_responses"),
    path("response/<uuid:user>", QuizResponseView.as_view(), name="api_response_user")
]
