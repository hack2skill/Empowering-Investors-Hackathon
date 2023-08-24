
from matplotlib.pyplot import axis
import streamlit as st  
import pandas as pd  
import yfinance as yf  
import datetime  
from datetime import date
from plotly import graph_objs as go  
from plotly.subplots import make_subplots
from prophet import Prophet  
from prophet.plot import plot_plotly
import time  
from streamlit_option_menu import option_menu  

st.set_page_config(layout="wide", initial_sidebar_state="expanded")

def add_meta_tag():
    meta_tag = """
        <head>
            <meta name="google-site-verification" content="QBiAoAo1GAkCBe1QoWq-dQ1RjtPHeFPyzkqJqsrqW-s" />
        </head>
    """
    st.markdown(meta_tag, unsafe_allow_html=True)


add_meta_tag()


today = date.today()  
st.write('''# I.N.V.E.S.T. ''') 
st.sidebar.image("./StockStream/StockStream/Images/237e57514b5e59a375c74748a055d4cd-removebg-preview.png", width=250,
                 use_column_width=False)  # logo
st.sidebar.write('''# I.N.V.E.S.T. ''')
with st.sidebar: 
        selected = option_menu("Utilities", ["Stocks Performance Comparison", "Real-Time Stock Price", "Stock Prediction"])

start = st.sidebar.date_input(
    'Start', datetime.date(2022, 1, 1)) 
end = st.sidebar.date_input('End', datetime.date.today())  


stock_df = pd.read_csv("./StockStream/StockStream/StockData.csv")


if(selected == 'Stocks Performance Comparison'):  
    st.subheader("Stocks Performance Comparison")
    tickers = stock_df["Company Name"]
    dropdown = st.multiselect('Pick your assets', tickers)

    with st.spinner('Loading...'):  
        time.sleep(2)
        

    dict_csv = pd.read_csv('./StockStream/StockStream/StockData.csv', header=None, index_col=0).to_dict()[1]  # read csv file
    symb_list = []  
    for i in dropdown:  
        val = dict_csv.get(i)  
        symb_list.append(val)  

    def relativeret(df): 
        rel = df.pct_change()  
        cumret = (1+rel).cumprod() - 1 
        cumret = cumret.fillna(0)  
        return cumret  

    if len(dropdown) > 0:  
        df = relativeret(yf.download(symb_list, start, end))[
            'Adj Close']  
        raw_df = relativeret(yf.download(symb_list, start, end))
        raw_df.reset_index(inplace=True) 

        closingPrice = yf.download(symb_list, start, end)[
            'Adj Close']  
        volume = yf.download(symb_list, start, end)['Volume']
        
        st.subheader('Raw Data {}'.format(dropdown))
        st.write(raw_df) 
        chart = ('Line Chart', 'Area Chart', 'Bar Chart')  
        
        dropdown1 = st.selectbox('Pick your chart', chart)
        with st.spinner('Loading...'):  
            time.sleep(2)

        st.subheader('Relative Returns {}'.format(dropdown))
                
        if (dropdown1) == 'Line Chart':  
            st.line_chart(df)  
            st.write("### Closing Price of {}".format(dropdown))
            st.line_chart(closingPrice)  
            
            st.write("### Volume of {}".format(dropdown))
            st.line_chart(volume)  

        elif (dropdown1) == 'Area Chart':  
            st.area_chart(df)  
            st.write("### Closing Price of {}".format(dropdown))
            st.area_chart(closingPrice)  
            st.write("### Volume of {}".format(dropdown))
            st.area_chart(volume)  

        elif (dropdown1) == 'Bar Chart':  
            st.bar_chart(df)  
            st.write("### Closing Price of {}".format(dropdown))
            st.bar_chart(closingPrice) 

            st.write("### Volume of {}".format(dropdown))
            st.bar_chart(volume)  

        else:
            st.line_chart(df, width=1000, height=800,
                          use_container_width=False)  
            st.write("### Closing Price of {}".format(dropdown))
            st.line_chart(closingPrice) 

            st.write("### Volume of {}".format(dropdown))
            st.line_chart(volume)  

    else:  
        st.write('Please select atleast one asset')  
    

elif(selected == 'Real-Time Stock Price'):  
    st.subheader("Real-Time Stock Price")
    tickers = stock_df["Company Name"]  
    a = st.selectbox('Pick a Company', tickers)

    with st.spinner('Loading...'):  
            time.sleep(2)

    dict_csv = pd.read_csv('./StockStream/StockStream/StockData.csv', header=None, index_col=0).to_dict()[1]  # read csv file
    symb_list = []  

    val = dict_csv.get(a)  
    symb_list.append(val) 

    if "button_clicked" not in st.session_state:  
        st.session_state.button_clicked = False  

    def callback():  
        st.session_state.button_clicked = True  
    if (
        st.button("Search", on_click=callback)  
        or st.session_state.button_clicked  
    ):
        if(a == ""):  
            st.write("Click Search to Search for a Company")
            with st.spinner('Loading...'): 
             time.sleep(2)
        else:  
            data = yf.download(symb_list, start=start, end=end)
            data.reset_index(inplace=True)  
            st.subheader('Raw Data of {}'.format(a))  
            st.write(data) 

            def plot_raw_data(): 
                fig = go.Figure()  
                fig.add_trace(go.Scatter( 
                    x=data['Date'], y=data['Open'], name="stock_open")) 
                fig.add_trace(go.Scatter( 
                    x=data['Date'], y=data['Close'], name="stock_close")) 
                fig.layout.update( 
                    title_text='Line Chart of {}'.format(a) , xaxis_rangeslider_visible=True) 
                st.plotly_chart(fig)  

            def plot_candle_data():  
                fig = go.Figure()  
                fig.add_trace(go.Candlestick(x=data['Date'], 
                                             open=data['Open'],
                                             high=data['High'], 
                                             low=data['Low'], 
                                             close=data['Close'], name='market data')) 
                fig.update_layout(  
                    title='Candlestick Chart of {}'.format(a), 
                    yaxis_title='Stock Price', 
                    xaxis_title='Date') 
                st.plotly_chart(fig) 

            chart = ('Candle Stick', 'Line Chart')  
            dropdown1 = st.selectbox('Pick your chart', chart)
            with st.spinner('Loading...'): 
             time.sleep(2)
            if (dropdown1) == 'Candle Stick':  
                plot_candle_data()  
            elif (dropdown1) == 'Line Chart':  
                plot_raw_data()  
            else: 
                plot_candle_data() 


elif(selected == 'Stock Prediction'):  
    st.subheader("Stock Prediction")

    tickers = stock_df["Company Name"]  
    a = st.selectbox('Pick a Company', tickers)
    with st.spinner('Loading...'):  
             time.sleep(2)
    dict_csv = pd.read_csv('./StockStream/StockStream/StockData.csv', header=None, index_col=0).to_dict()[1]  
    symb_list = []  
    val = dict_csv.get(a)  
    symb_list.append(val)  
    if(a == ""):  
        st.write("Enter a Stock Name") 
    else:  
        data = yf.download(symb_list, start=start, end=end)
        data.reset_index(inplace=True)  
        st.subheader('Raw Data of {}'.format(a))  
        st.write(data)  

        def plot_raw_data():  
            fig = go.Figure()  
            fig.add_trace(go.Scatter( 
                x=data['Date'], y=data['Open'], name="stock_open")) 
            fig.add_trace(go.Scatter(
                x=data['Date'], y=data['Close'], name="stock_close")) 
            fig.layout.update( 
                title_text='Time Series Data of {}'.format(a), xaxis_rangeslider_visible=True) 
            st.plotly_chart(fig) 

        plot_raw_data()  
        n_years = st.slider('Years of prediction:', 1, 4)
        period = n_years * 365 

        
        df_train = data[['Date', 'Close']]
        df_train = df_train.rename(
            columns={"Date": "ds", "Close": "y"})  

        m = Prophet()  
        m.fit(df_train)  
        future = m.make_future_dataframe(
            periods=period) 
        forecast = m.predict(future) 

       
        st.subheader('Forecast Data of {}'.format(a))  
        st.write(forecast)  

        st.subheader(f'Forecast plot for {n_years} years')  
        fig1 = plot_plotly(m, forecast)  
        st.plotly_chart(fig1)  

        st.subheader("Forecast components of {}".format(a))  
        fig2 = m.plot_components(forecast)  
        st.write(fig2)  

