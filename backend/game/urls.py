import game.consumers as game_consumers
import game.views as game_views
from django.urls import path, re_path


urlpatterns = [
    path('', game_views.index),
]


websocket_urlpatterns = [
    re_path('ws/server-socket/', game_consumers.GameConsumer.as_asgi()),
]
