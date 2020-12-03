import requests
from requests import get
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np
import csv


url = 'https://killer.cloud/serial-killers/show/292/elias-abuelazam'

results = requests.get(url)

soup = BeautifulSoup(results.text, 'html.parser')

name = []
summaries = []
years_active = []
location = []
active_time = []

def page_scraper(url):
    for body in soup.find_all('body'):

        title = body.find('h1', class_='bl pad10 mar0').text
        name.append(title)

        summary = body.find('p', class_='lead b pad0 mar20t text-justify').text
        summaries.append(summary)

        # active_years = body.find('td', class_='text-right text-uppercase')
        # years_active.append(active_years)

        # area = body.find('th', class_='text-right text-uppercase').text
        # location.append(area)

        active = body.find('h4', class_='pad5 mar0 bg-g w').text
        active_time.append(active)

    killer_profile = pd.DataFrame({
        'Name': name,
        'Summary': summaries,
        # 'Years Active': years_active,
        # 'Location': location,
        'Active': active_time
    })

    killer_profile.to_csv('killer_profiles.csv')

page_scraper(url)

