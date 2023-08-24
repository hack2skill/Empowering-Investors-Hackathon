import requests, webbrowser
import json
from bs4 import BeautifulSoup
import re
from urllib.parse import urlparse
import pandas as pd
import os

def scrape_stock_market_news_from_google(query):

  url = "https://www.google.com/search?q=" + query #GOOGLE SEARCH
  response = requests.get(url)
  soup = BeautifulSoup(response.content, "html.parser")

  articles = soup.find_all("div", class_="egMi0 kCrYT")

  news = [] #EXTRACTION OF DATA
  for article in articles: 
    title = article.find("div", class_="BNeawe vvjwJb AP7Wnd").text
    link = article.find("a")["href"]
    domain = urlparse(link).netloc
    news.append({
        "title": title,
        "link": link
    })
  return news

def main():
  query = "Latest stock market news in India"

  news = scrape_stock_market_news_from_google(query)

  for article in news:
    print(article)

  with open(query + ".json", "w+") as f: #ADD TO JSON
    json.dump(news, f, indent=4)

  df = pd.DataFrame(news) #ADD TO EXCEL
  df.to_excel(query + ".xlsx")

if __name__ == "__main__":
  main()