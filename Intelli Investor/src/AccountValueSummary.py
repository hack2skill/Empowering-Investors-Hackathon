# -*- coding: utf-8 -*-
"""
Created on Thu Sep  8 16:14:42 2022

@author: narla
"""

from datetime import timedelta
import numpy as np
import pandas as pd

def GetIndvSharpe(x):
    NumDaysPerYear = x.resample('1Y').count().max()
    NumDaysPerYear = int(NumDaysPerYear)
    AnnualizationFactor = 365 if NumDaysPerYear>364 else 260
    try:
        Sharpe = np.sqrt(AnnualizationFactor) *(np.nanmean(x)  / np.nanstd(x))
    except:
        Sharpe = np.nan
    return Sharpe

def take_first(array_like):
    if len(array_like) !=0:
        req_val = array_like[0]
    else:
        req_val = np.nan
    return req_val

def max_dd(returns):
    r = returns.add(1).cumprod()
    dd = r.div(r.cummax()).sub(1)
    mdd = dd.min()
    end = dd.idxmin()
    start = dd.loc[:end]
    start = start[start>=0].index[-1]
    if max(dd.loc[start+timedelta(days=1):]) < 0:
        NewEnd = r.index[-1]
    else:
        NewEnd = dd.loc[start+timedelta(days=1):].idxmax()
    return mdd, start.date(), NewEnd.date()

def Get_D2Sharpe(OverallPL):
    NumDaysPerYear = OverallPL.resample('1Y').count().max()
    NumDaysPerYear = int(NumDaysPerYear)
    InEq = OverallPL.copy()
    InEq = InEq.iloc[0,0]
    SharpeD = OverallPL.copy().iloc[:,0]
    SharpeD = SharpeD.diff() / InEq
    AnnualizationFactor = 365 if NumDaysPerYear>364 else 260 # (260,365)[NumDaysPerYear>364]
    SharpeD = np.sqrt(AnnualizationFactor) *(np.nanmean(SharpeD)  / np.nanstd(SharpeD))
    SharpeM = OverallPL.copy()
    SharpeM = SharpeM.resample('m').agg(take_first).diff()
    SharpeM = SharpeM / InEq
    SharpeM = np.sqrt(12) *(np.nanmean(SharpeM)  / np.nanstd(SharpeM))
    return SharpeD,SharpeM

def GetSummary(PL_StreamDf,Diff=False):
    NumDaysPerYear = PL_StreamDf.resample('1Y').count().max()
    NumDaysPerYear = int(NumDaysPerYear)
    AnnualizationFactor = 365 if NumDaysPerYear>364 else 260
    
    
    OverallPL = PL_StreamDf.copy()
    OverallPL.columns = ['PortfolioPL']
    TestPL = OverallPL.loc[OverallPL.index.max(),'PortfolioPL'] - OverallPL.loc[OverallPL.index.min(),'PortfolioPL']
    
    if Diff:
        TestSharpe = GetIndvSharpe(OverallPL['PortfolioPL'].diff())
    else:
        TestSharpe = GetIndvSharpe(OverallPL['PortfolioPL'].pct_change())
    
    StartDate = OverallPL.index.min()
    EndDate = OverallPL.index.max()
    NumYears = ((EndDate -StartDate ).days)/365
    ActualPL = OverallPL.loc[EndDate,'PortfolioPL']#(OverallPL.loc[EndDate,'PortfolioPL'] - OverallPL.loc[StartDate,'PortfolioPL'])
    InitialEq = OverallPL.loc[StartDate,'PortfolioPL']
    AAR = (((ActualPL / InitialEq) ** (1/NumYears)) - 1) * 100
    

    MaxDD, DD_Start, DD_End = max_dd(OverallPL.pct_change().iloc[:,0].fillna(0))
    Vol = OverallPL.pct_change().iloc[:,0].std()
    DD_Vol = MaxDD / (Vol * np.sqrt(AnnualizationFactor))
    
    x = OverallPL.resample('m').agg(take_first).pct_change()
    SharpeM = np.sqrt(12) *(np.nanmean(x)  / np.nanstd(x))
    
    
    SharpeD_D2,SharpeM_D2 = Get_D2Sharpe(OverallPL)
    
    SummaryDf = pd.DataFrame([[round(TestSharpe,2),round(SharpeM,2),
                               round(SharpeD_D2,2),round(SharpeM_D2,2),
                               TestPL,round(AAR,2),round(MaxDD,2),DD_Start,
                               DD_End,round(DD_Vol,2),Vol *np.sqrt(AnnualizationFactor)]])
    SummaryDf.columns = ['SharpeD','SharpeM','SharpeD_D2','SharpeM_D2','PL','AAR','MaxDD','DD_Start','DD_End','DD_Vol','Vol']
    
    
    SummaryDf = SummaryDf[['SharpeD','AAR','Vol','MaxDD','DD_Start','DD_End','DD_Vol']]
    SummaryDf['Vol'] = (SummaryDf['Vol'] * 100).round(2)
    SummaryDf['MaxDD'] = (SummaryDf['MaxDD'] * 100).round(2)
    SummaryDf.columns = ['Sharpe','CAGR%','Vol%','MaxDD%','DD_Start','DD_End','DD_Vol']
    return SummaryDf