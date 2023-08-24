# -*- coding: utf-8 -*-
"""
Created on Wed Aug 23 14:13:41 2023

@author: saura
"""

import openai
import json
import pandas as pd
import numpy as np
import json
import os

def gpt_rules(prompt,dist_str):
    response_list = []

    with open('data/api_key.json') as json_data:
        inputs = json.load(json_data)

    openai.api_key = inputs['api_key']
    model = openai.Model.list()
    # print(req_cols_str)

    query = f"""
    You have quarterly earnings data for markets listed in NiftyFifty Indian index. 
    Based on the fundamental variables available in the data, produce rules to subset best stocks with a philosophy of value investing.
    Each rule should have at least two to three conditions
    The rule format should be like this: 
    variable one  operator numeric value one and/or variable two  operator numeric value two

    Example for the rule:
    roic > 25 AND dividendYield > 15 AND marketCapitalization > 15

    We have following fundamental variables in our database, use these and create the rules
    grossProfitRatio
    ebitdaratio
    netIncomeRatio
    currentRatio
    returnOnCapitalEmployed
    dividendPayoutRatio
    priceToBookRatio
    priceEarningsRatio
    dividendYield
    returnOnEquity
    debtEquityRatio
    dividendPayoutRatio
    priceCashFlowRatio

    Send above variables if user asks for variables names or features names we have.
    Here is the distribution of each varible:
    {dist_str}

    Values given in the rules should be according to distribution of the variable

    Your job is ,if a user comes with vague statement you need to generate a rule similar to the examples.
    User statement will contain keywords which will be similar to the columns mentioned above,
    Rule should always have more than one variable per keyword to subset the data
    Always use variables names as stated in the list from database
    A rule should not have more that three variables.
    Give one rule at a time   
    """
    query = query + '\n' + prompt

    response_list.append({"role": "system", "content": query})
    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=response_list)

    return response['choices'][0]['message']['content']