import requests, webbrowser
import json
from bs4 import BeautifulSoup
import re
from urllib.parse import urlparse
import pandas as  pd
import os

def get_stock_market_books(level):
  if level == 1:
    books = ["1. The Intelligent Investor", "2. The Little Book of Common Sense Investing", "3. A Random Walk Down Wall Street"]
  elif level == 2:
    books = ["1. How to Make Money in Stocks", "2. Stock Investing For Dummies", "3. Market Wizards"]
  elif level == 3:
    books = ["1. The New Market Wizards", "2. The Art of Contrary Thinking", "3. Reminiscences of a Stock Operator"]
  else:
    raise ValueError("Invalid level. Please choose 1, 2, or 3.")
  return books

def main():
  print("Select the level that you would consider yourself to be:")
  print("1: Beginner")
  print("2: Intermediate")
  print("3: Advanced")
  level = int(input("Enter the level of the stock market books you want: "))
  print("Here are the books we recommend:")
  books = get_stock_market_books(level)

  for book in books:
    print(book)

if __name__ == "__main__":
  main()