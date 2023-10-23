import json


class Importer:
    tasks = []
    def __init__(self):
        pass

    def read_tasks(self):
        self.tasks = json.loads(open('taski.json',encoding='utf-8').read())

    def get_tasks(self):
        return self.tasks