# -*- coding: utf-8 -*-
"""
Created on Tue Aug 22 01:05:33 2023

@author: saura
"""

import dash
from dash import Dash,html, dcc, callback
from dash.dependencies import Input, Output,State
import dash_bootstrap_components as dbc
from dash.exceptions import PreventUpdate
from src.chat_gpt_clas import gpt_rules
import webbrowser
import pandas as pd
from plotly import graph_objects as go
from src.Get_performance import get_act_val, extract_query

req_columns = ['grossProfitRatio','ebitdaratio','netIncomeRatio','currentRatio','returnOnCapitalEmployed','returnOnEquity','dividendPayoutRatio',
      'priceToBookRatio','priceEarningsRatio','dividendYield','debtEquityRatio','dividendPayoutRatio']
data = pd.read_pickle('data/fundamental_data_app.pkl')
req_data = data[req_columns].copy()
des = req_data.describe().T
des.index.name = 'variables'
des = des.reset_index()
dist_data = des.drop(['count','mean','std'],axis=1)

prices_data = pd.read_pickle('data/prices.pkl')
prices_data = prices_data.ffill()

dates = pd.DataFrame(prices_data.index,index=prices_data.index)

app = Dash(__name__,external_stylesheets=[dbc.themes.MATERIA])

navbar = dbc.Navbar( 
    children=[
        html.H1('Intelli Invesor')
    ],
    color='dark',
    style={'justify-content':'center'})

app.layout = html.Div([
    navbar,
    html.Br(),
    dbc.Row([
        dbc.Col( dbc.Input(id='text-input',type='text',placeholder='Type your Idea here...',className = 'textarea-screener'),),
        dbc.Col(dcc.Textarea(id='suggestion-box',placeholder="",disabled=True,className = 'textarea-screener',style = {'background-color': 'white','color': 'black'}),)
        ]),
    html.Div(
    children = [dbc.Button('Submit',id='submit-button',className = 'button',style={'marginTop': '6px','marginLeft': '4px'})]
    , style = {'justify-content':'center', 'display':'flex'}),
    html.Div(dbc.Input(id='bt-input',type='text',placeholder='Enter your rule here...',className = 'textarea-screener'), style = {'justify-content':'center'}),
    html.Div(
    children = [dbc.Button('Backtest',id='bt-button',n_clicks=0,className = 'button',style={'marginTop': '6px','marginLeft': '4px'})]
    , style = {'justify-content':'center', 'display':'flex'}),
    html.Br(),
    html.Div(id='result-metrics')
    ])


@app.callback(Output('suggestion-box','value'),
              Input('submit-button','n_clicks'),
              State('text-input','value'),
              prevent_initial_call=True)
def gpt_ans(n_clicks,prompt):
    if n_clicks>0:
        response = gpt_rules(prompt,dist_data.to_string())
        return response
    return None
    

@app.callback(Output('bt-input','value'),
              Input('suggestion-box','value'),
              prevent_initial_call=True
              )
def rule_extract(prompt):
    rule_lst = extract_query(prompt)
    return rule_lst[0]


@app.callback(Output('result-metrics','children'),
              Input('bt-button','n_clicks'),
              State('bt-input','value'))
def gpt_metric(n_clicks,rule):
    if n_clicks is not None:
        if n_clicks>0:
            acct_val,perfsummary,all_wts = get_act_val(rule,prices_data,data, dates)
            
            if all_wts.sum().sum() == 0:
                return  html.Div(style={'display':'flex','justify-content':'center'},
                                  children = [html.H3('No Markets were picked up')])
            plot_df = pd.DataFrame(columns=['Strategy','SPY'])
            plot_df['Strategy'] = acct_val
            # plot_df['SPY'] = get_benchmark(acct_val.index[0],equity_engine)
            plot_df = plot_df.pct_change().fillna(0).add(1).cumprod()
            
            
            fig = go.Figure()
            fig.add_trace(go.Scatter(x=plot_df.index, y=plot_df['Strategy'], name='Strategy'))
            # fig.add_trace(go.Scatter(x=plot_df.index, y=plot_df['SPY'], name='SPY Buy and Hold'))
            fig.update_layout(
                            font=dict(
                        color="black"
                    ))
            all_wts = all_wts.ffill()
            aw = all_wts.sum()
            all_wts = all_wts.drop(aw[aw==0].index,axis=1)

            cur_wts = all_wts.iloc[-1]*10
            cur_wts = cur_wts[cur_wts!=0]
            fig1 = go.Figure()
            fig1.add_trace(go.Pie(labels=list(cur_wts.index), values=list(cur_wts.values)))
            fig1.update_traces(hole=.4, hoverinfo="label")
            fig1.update_layout(
                            font=dict(
                        color="black"
                    ))
            child = html.Div([
            dbc.Container([
            dbc.Row([
                
                dbc.Row([
                    dbc.Table.from_dataframe(perfsummary, striped=True, bordered=True, hover=True)
                ]),
                dbc.Row([
                   dcc.Graph(figure=fig)
                ]),
                dbc.Row([
                    dcc.Graph(figure=return_area_fig(all_wts,plot_title=''))
                    ]),
            ])
        ]),])
            return child
        return None
    return None

def return_area_fig(df,plot_title):
    fig = go.Figure()
    for col in df.columns:
        data = df[col].dropna()
        data = data.loc[data!=0]
        fig.add_trace(go.Scatter(x=df.index,y=df[col],mode='lines',stackgroup='one',hoveron='fills+points',name=col,text=col))
    fig.update_layout(
    title={
        'text': plot_title
        },
                 font=dict(
                
                color="Black"
            ))
    return fig
    


if __name__ == '__main__':
    webbrowser.open('http://127.0.0.1:8050')
    app.run_server(debug=False)
    