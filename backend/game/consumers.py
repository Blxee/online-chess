from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json


class GameConsumer(WebsocketConsumer):

    groups = {}

    def connect(self):
        self.group_name = 'mygroup'

        async_to_sync(self.channel_layer.group_add)(
            self.group_name,
            self.channel_name,
        )

        self.accept()

        self.send(json.dumps({
            'type': 'connection-successful',
            'text': 'server connected successfully!',
        }))


    def receive(self, text_data=None, bytes_data=None):
        # async_to_sync(self.channel_layer.group_send)(
        #     self.group_name,
        #     {
        #         'broadcast',
        #         data,
        #     },
        # )
        pass
