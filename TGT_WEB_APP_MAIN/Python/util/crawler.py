import requests
from model import Character

BASE_URL = "https://api.genshin.dev/characters/{}"


def get_data_from_genshin_apis(database):

    for i in range(1, 20):
        response = requests.get(BASE_URL.format(i))
        content_json = response.json()
        character_json = {k: v for k, v in content_json.items() if k in dir(Character)}

        database.session.add(Character(**character_json))
        database.session.commit()
