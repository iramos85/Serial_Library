import requests
from requests import get
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np

from time import sleep
from random import randint

#initialize the list to store the names
names = []
urls = []

##initiliaze a crawl through all pages
pages = np.arange(0, 3, 1)

for page in pages:

    page = requests.get('https://killer.cloud/serial-killers?page=' + str(page))

    soup = BeautifulSoup(page.text, 'html.parser')
    profile_div = soup.find_all('div', class_='col-xs-8 col-sm-9 pad0')
    app_div = soup.find_all('a', class_='bl text-left mar5tb')

    sleep(randint(1,3))

    # for profile_name in profile_div:
    #     name = profile_name.h3.text
    #     names.append(name)

    for profile_urls in app_div:
        profile_urls = [a["href"] for a in app_div]
        profile_urls.append(urls)


# app_div = soup.find_all('a', class_='bl text-left mar5tb')

# profile_urls = [a["href"] for a in app_div]

print(profile_urls)
# print(names)


# for url_profile in app_div:
#     #url
#     link = url_profile.a
#     profile_url.append(link)

# for link in soup.find_all('a'):
#     print(link.get('href'))

# print(profile_url)

# profiles = pd.DataFrame({
#     # 'name': names,
#     'url': profile_urls
# })

# print(profiles)

# profiles.to_csv('profiles.csv')














