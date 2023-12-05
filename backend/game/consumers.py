from channels.generic.websocket import WebsocketConsumer
import json


class GameConsumer(WebsocketConsumer):

    def connect(self):
        self.accept()
        self.send(json.dumps({
            'text': 'connected successfully'
        }))
