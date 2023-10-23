import json, datetime, urllib.request, os


class RatioObtainer:
    base = None
    target = None

    def __init__(self, base, target):
        self.base = base
        self.target = target

    def was_ratio_saved_today(self):
        # This function checks if given ratio was saved today and if the file with ratios is created at all
        # should return false when file doesn't exist or if there's no today's exchange rate for given values at all
        # should return true otherwise
        if not os.path.isfile('ratios.json'):
            return False
        with open('ratios.json', 'r') as f:
            # check if today's ratio exists
            data = json.load(f)
            if self.base in data:
                if self.target in data[self.base]:
                    if datetime.date.today().isoformat() in data[self.base][self.target]:
                        return True
        return False

    def fetch_ratio(self):
        # This function calls API for today's exchange ratio
        # Should ask API for today's exchange ratio with given base and target currency
        # and call save_ratio method to save it

        # call API
        # To reduce chance of leaking API key I've used environment variable instead of hardcoding it
        # import os
        # os.environ.get('API_KEY')
        url = f'http://api.exchangerate.host/live?access_key={os.environ.get("API_KEY")}&source={self.base}&currencies={self.target}'
        with urllib.request.urlopen(url) as response:
            data = json.loads(response.read().decode())
            # check if API call was successful, raise exception if not (should be handled in App.py)
            if data['success'] == False:
                raise Exception('API call failed')
            ratio = data['quotes'][self.base+self.target]
            self.save_ratio(ratio)

    def save_ratio(self, ratio):
        # Should save or update exchange rate for given pair in json file
        # takes ratio as argument
        # example file structure is shipped in project's directory, yours can differ (as long as it works)
        data = {}
        if os.path.isfile('ratios.json'):
            with open('ratios.json','r') as f:
                data = json.load(f)
        if self.base not in data:
            data[self.base] = {}
        if self.target not in data[self.base]:
            data[self.base][self.target] = {}
        data[self.base][self.target][datetime.date.today().isoformat()] = ratio
        with open('ratios.json','w') as f:
            json.dump(data, f)        

    def get_matched_ratio_value(self):
        # Should read file and receive exchange rate for given base and target currency from that file
        with open('ratios.json', 'r') as f:
            data = json.load(f)
            return data[self.base][self.target][datetime.date.today().isoformat()]