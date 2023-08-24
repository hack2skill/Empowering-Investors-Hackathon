# -*- coding: utf-8 -*-
"""
Created on Thu Aug 24 15:24:39 2023

@author: saura
"""

import pandas as pd
from src.AccountValueSummary import GetSummary
import vectorbt as vbt
import os
from dateutil.relativedelta import relativedelta
import re
import json 
from itertools import product 
import numpy as np
# import yfinance as yf

def get_act_val(query,close_prices,fundamentalData, dates):
    
    # close_prices,open_prices,data_dict, dates,constituent_info = data_importer()
    rule_lst = query.split(';')
    rebal = 'Q'
    if len(rule_lst) == 1:
        rebal_dates = dates.resample(rebal).last()
    else:
        if 'yearly' in rule_lst[1].lower():
            rebal = 'Y'
        rebal_dates = dates.resample(rebal).last()
    
    formula = rule_lst[0].replace("\n"," ")
    
    if 'and' in formula.lower():
        if 'AND' in formula:
            formula_list = formula.split(" AND ")
        else:
            formula_list = formula.split(" and ")
    else:
        if '&' in formula:
            formula_list = formula.split(" & ")
        else:
            formula_list = [formula]
    cols = []
    for filter_ in formula_list:
        ratio,operator_,value=filter_.split()
        cols.append(ratio)
    
    fund_data = fundamentalData.reset_index().set_index(['symbol','date'])
    
    rule = rule_lst[0].replace('AND','&')
    eval_df = pd.DataFrame({'Signal':fund_data.eval(rule).astype('int')})
    sigs = eval_df.reset_index().pivot_table(columns='symbol',index='date',values='Signal')
    sigs = pd.concat([sigs,close_prices[[]]],axis=1).ffill().fillna(0)
    
    signals = pd.DataFrame(index=dates['Date'].values,columns = sigs.columns)
    signals.loc[rebal_dates['Date'].values] = sigs.loc[rebal_dates['Date'].values]
    signals = signals.ffill().fillna(0)
    # constituent_info = constituent_info.fillna(0)
    # signals = signals*constituent_info
    signals = signals.loc[close_prices.index]
    signals = signals.loc[:,signals.columns.isin(close_prices.columns)]
    signals = signals.apply(lambda x: x / x.sum(),axis=1)
    signals = signals.ffill().fillna(0)
    
    
    # close_prices = 
    signals.columns.name = 'symbol'
    close_prices.columns.name = 'symbol'
    # open_prices.columns.name = 'symbol'
    
    signals.index.name = 'Date'
    close_prices.index.name = 'Date'
    # open_prices.index.name = 'Date'
    
    vbt_pf = vbt.Portfolio.from_orders(
        close_prices,  # current close as reference price
        size=signals.shift(),  
        price= close_prices,  # current close as execution price
        size_type='targetpercent', 
        init_cash=1000000,
        cash_sharing=True,  # share capital between assets in the same group
        call_seq='auto',  # sell before buying
        freq='d',  # index frequency for annualization
        size_granularity= 1,
        # raise_reject=True,
        lock_cash=True,
        # group_by = 'Grp',
        min_size = 0,
        
        )
    
    act_val = vbt_pf.value()
    perf_summary = GetSummary(pd.DataFrame(vbt_pf.value()))
    
    return (act_val,perf_summary,signals)

def extract_query(text):

    pattern = r'(\w+)\s*(<|>|<=|>=|=)\s*([\d.]+)(?:\s+(AND|OR))?'

    matches = re.findall(pattern, text)
    queries = []

    if matches:
        query = ""
        for match in matches:
            field = match[0]
            operator = match[1]
            value = match[2]
            condition = f"{field} {operator} {value}"
            query += condition

            if match[3]:
                logical_operator = match[3].upper()
                query += f" {logical_operator} "
            else:
                queries.append(query.strip())
                query = ""

        if query:
            queries.append(query.strip())

    return queries