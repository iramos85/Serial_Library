import requests
from requests import get
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np

from time import sleep
from random import randint


# #variables to specify for each filter
# profile_div = soup.find_all('div', class_='col-xs-8 col-sm-9 pad0')
# app_div = soup.find_all('a', class_='bl text-left mar5tb')

print('**************************************************')
#arrays to hold data
names = []
profile_urls = []

##initiliaze a crawl through all pages
pages = np.arange(1, 45, 1)

for page in pages:

    page = requests.get('https://killer.cloud/serial-killers?page=' + str(page))
    soup = BeautifulSoup(page.text, 'html.parser')

    profile_div = soup.find_all('div', class_='col-xs-8 col-sm-9 pad0')
    app_div = soup.find_all('a', class_='bl text-left mar5tb')

    sleep(randint(1,3))

    for profile_name in profile_div:
        name = profile_name.h3.text
        names.append(name)

    # for profile_url in app_div:
    profile_urls += [a["href"] for a in app_div]
        # profile_urls.append(profile_url)

# print(profile_urls)

def page_scraper():

    for url in profile_urls:

    # url = profile_urls
        results = requests.get(url)
        soup = BeautifulSoup(results.text, 'html.parser')

    profile_div = soup.find_all('div', class_='col-xs-8 col-sm-9 pad0')

    name = []
    summaries = []
    active_time = []

    for body in soup.find_all('body'):
        title = body.find('h1', class_='bl pad10 mar0').text
        name.append(title)

        summary = body.find('p', class_='lead b pad0 mar20t text-justify').text
        summaries.append(summary)

        active = body.find('h4', class_='pad5 mar0 bg-g w').text
        active_time.append(active)

    killer_profiles = pd.DataFrame({
        'Name': name,
        'Summary': summaries,
        'Active': active_time
    })

    killer_profiles.to_csv('killer_profiles.csv')
    
page_scraper()



#create table for Scraped Data
# profiles = pd.DataFrame({
#     'name': names,
#     'url': profile_urls
# })

# #pass data into CSV file
# profiles.to_csv('profiles.csv')

#pass data into CSV file








