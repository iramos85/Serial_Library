import requests
from requests import get
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np

from time import sleep
from random import randint

url = 'https://killer.cloud/serial-killers?page=1'

results = requests.get(url)

soup = BeautifulSoup(results.text, 'html.parser')

#arrays to hold data
names = []
profile_url = []

#variables to specify for each filter
profile_div = soup.find_all('div', class_='col-xs-8 col-sm-9 pad0')
app_div = soup.find_all('a', class_='bl text-left mar5tb')


# this tells your scraper to iterate through each div for the H3 text tag
for profile_name in profile_div:
    name = profile_name.h3.text
    names.append(name)

#create an array for each url
profile_urls = [a["href"] for a in app_div]


#create table for Scraped Data
profiles = pd.DataFrame({
    'name': names,
    'url': profile_urls
})

#pass data into CSV file
profiles.to_csv('profiles.csv')














# import requests
# from bs4 import BeautifulSoup
# import csv


# source = requests.get('https://killer.cloud/serial-killers').text

# soup = BeautifulSoup(source, 'lxml')

# csv_file = open('names_scrape.csv', 'w')

# csv_writer = csv.writer(csv_file)
# csv_writer.writerow(['name'])

# # for div in soup.find_all('div'):

# name = soup.find_all('h3', class_='pad10t mar5t font-hel text-left w')
# print(name)

# print()

# csv_writer.writerow([name])

# csv_file.close()