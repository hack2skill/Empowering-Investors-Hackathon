import pandas as pd
import os
from bs4 import BeautifulSoup
import requests
import sys
import datetime
import shutil

def getPDFLinks(tickers):
    if not isinstance(tickers, list): return "Provide only a list!"
    links = {}
    for t in tickers:
        URL = 'https://www.screener.in/company/' + t + '/consolidated/'
        req = requests.get(URL)
        soup = BeautifulSoup(req.content, 'html5lib')

        try: earnings_links_with_date = soup.find(class_='documents concalls flex-column').find('ul').find_all('li')
        except:
            links[t] = None
            continue
        earnings_dict = {}

        for li in earnings_links_with_date:
            link = li.findChild(title="Raw Transcript")
            if not link: continue
            else: 
                d = li.findChild('div').string.replace(' ','').replace('\n','')
                d = datetime.datetime.strptime(d,'%b%Y').strftime('%Y-%m-%d')
                earnings_dict[d] = link.attrs['href']
        links[t] = earnings_dict[sorted(list(earnings_dict.keys()))[-1]]
            
    return links

tickers = ['RELIANCE','CIPLA'] # Input any list of tickers

links = getPDFLinks(tickers) #FORMAT: {Ticker:Link, Ticker:Link}
path = 'Documents'
if os.path.exists(path) and os.path.isdir(path):
    shutil.rmtree(path)
os.mkdir('Documents')
headers = {'User-Agent': 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'}
for t,l in links.items():
    print(t,l)
    r = requests.get(l,headers=headers)
    with open('Documents/{}.pdf'.format(t), 'wb') as f:
        f.write(r.content)
