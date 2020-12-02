import requests
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np
import csv


source = requests.get('https://killer.cloud/serial-killers/show/292/elias-abuelazam').text

soup = BeautifulSoup(source, 'lxml')

csv_file = open('cms_scrape.csv', 'w')

csv_writer = csv.writer(csv_file)
csv_writer.writerow(['headline', 'summary'])

for body in soup.find_all('body'):
    # body = soup.find('body')

    # print(div)

    headline = body.find('h1', class_='bl pad10 mar0').text
    # print(headline)

    summary = body.find('p', class_='lead b pad0 mar20t text-justify').text
    # print(summary)

    years_active = body.find('td', class_='text-right text-uppercase')
    # print(years_active)

    # print()

    csv_writer.writerow([headline, summary])

csv_file.close()