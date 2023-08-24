from flask import Flask, jsonify, render_template, request , send_file
import os
import openai
import json
import requests
import openai
import matplotlib.pyplot as plt
import base64
import yfinance as yf
import io
from dotenv import load_dotenv
load_dotenv()


# info_stock = yf.Ticker("tatasteel.ns")
# print(type(info_stock.balance_sheet.to_string()))
# Valid options are 1d, 5d, 1mo, 3mo, 6mo, 1y,
# 2y, 5y, 10y and ytd.

openai.api_key = os.getenv("OPENAI_API_KEY")

list_data=[]

graph = []
def get_graph(company_name,period="1y"): # name is ticker symbol
    stock = yf.Ticker(company_name)
    hist = stock.history(period=period)

    # Plotting
    plt.figure(figsize=(10, 6))
    plt.plot(hist.index, hist['Close'], label='Close Price', color='blue')
    plt.title(f"{company_name} Stock Price Over Time")
    plt.xlabel("Date")
    plt.ylabel("Price")
    plt.legend()
    plt.grid(True)
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    plt.close()
    image_base64 = base64.b64encode(buffer.read()).decode('utf-8')
    graph.append(image_base64)
    




def get_company_news(company_name):
    params = {
        "engine": "google",
        "tbm": "nws",
        "q": company_name,
        "api_key": os.environ["SERPAPI_API_KEY"],
    }

    response = requests.get('https://serpapi.com/search', params=params)
    data = response.json()

    return data.get('news_results')



def write_news_to_file(news, filename):
    with open(filename, 'w') as file:
        for news_item in news:
            if news_item is not None:
                title = news_item.get('title', 'No title')
                link = news_item.get('link', 'No link')
                date = news_item.get('date', 'No date')
                file.write(f"Title: {title}\n")
                file.write(f"Link: {link}\n")
                file.write(f"Date: {date}\n\n")
                
                



def get_stock_evolution(company_name, period="1y"):
    ## # Valid options are 1d, 5d, 1mo, 3mo, 6mo, 1y
    # Get the stock information
    stock = yf.Ticker(company_name)

    # Get historical market data
    hist = stock.history(period=period)

    # Convert the DataFrame to a string with a specific format
    data_string = hist.to_string()
    list_data.append(data_string)
    

    # # Append the string to the "investment.txt" file
    # with open("investment.txt", "a") as file:
    #     file.write(f"\nStock Evolution for {company_name}:\n")
    #     file.write(data_string)
    #     file.write("\n")
        
# get_stock_evolution("MSFT")  # replace "MSFT" with the ticker symbol of the company you are interested in


def get_financial_statements(ticker):
    # Create a Ticker object
    company = yf.Ticker(ticker)
    get_graph(ticker) # graph calling

    # Get financial data
    balance_sheet = company.balance_sheet.to_string()
    income_statement = company.income_stmt.to_string()
    # valuation_measures = str(company.valuation_measures)  # This one might already be a dictionary or string

    cash_flow = company.cash_flow.to_string()
    
    list_data.append(balance_sheet)
    list_data.append(income_statement)
    list_data.append(cash_flow)

    # Write data to file
    # with open("investment.txt", "a") as file:
    #     file.write("\nBalance Sheet\n")
    #     file.write(balance_sheet)
    #     file.write("\nCash Flow\n")
    #     file.write(cash_flow)
    #     file.write("\nIncome Statement\n")
    #     file.write(income_statement)
        # file.write("\nValuation Measures\n")
        # file.write(valuation_measures)





def get_data(company_name, company_ticker, period="1y", filename="investment.txt"):
    news = get_company_news(company_name)
    list_data.append(news)
    # if news:
    #     # write_news_to_file(news, filename)
    #     list_data.append(news)
    # else:
    #     print("No news found.")


    # ithoke write to a file aanu
    # get_stock_evolution(company_ticker)
    
    print("Stock evolution written to file.")

    get_financial_statements(company_ticker)
    
    
    
    
    
    

def financial_analyst(request):
    print(f"Received request: {request}")
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-0613",
        temperature=0,
        messages=[{
            "role":
            "user",
            "content":
            f"Given the user request, what is the comapany name and the company stock ticker ?: {request}?"
        }],
        functions=[{
            "name": "get_data",
            "description":
            "Get financial data on a specific company for investment purposes",
            "parameters": {
                "type": "object",
                "properties": {
                    "company_name": {
                        "type":
                        "string",
                        "description":
                        "The name of the company",
                    },
                    "company_ticker": {
                        "type":
                        "string",
                        "description":
                        "the ticker of the stock of the company"
                    },
                    "period": {
                        "type": "string",
                        "description": "The period of analysis"
                    },
                    "filename": {
                        "type": "string",
                        "description": "the filename to store data"
                    }
                },
                "required": ["company_name", "company_ticker"],
            },
        }],
        function_call={"name": "get_data"},
    )

    message = response["choices"][0]["message"]
    print(response)
    print(message)

    if message.get("function_call"):
        # Parse the arguments from a JSON string to a Python dictionary
        arguments = json.loads(message["function_call"]["arguments"])
        print(arguments,"1")
        company_name = arguments["company_name"]
        company_ticker = arguments["company_ticker"]
        print(company_name, company_ticker,"2")
        list_data.clear()
        # Parse the return value from a JSON string to a Python dictionary
        get_data(company_name, company_ticker)

        # with open("investment.txt", "r") as file:
        #     content = file.read()[:14000]
        
        content = ''
        for i in list_data:
            if type(i) == list:
                for j in i:
                    
                    content += str(j)
                    content += '\n'
            else:
                content += i
                content += '\n'
        
        content = content[:14000]
        
        print(content)

        second_response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-16k",
            messages=[
                {
                    "role": "user",
                    "content": request
                },
                message,
                {
                    "role": "system",
                    "content": """write as if you are a financial expert. Provide numbers to justify
                      your assertions, a lot ideally. Never mention
                      something like this:
                      However, it is essential to consider your own risk
                      tolerance, financial goals, and time horizon before
                      making any investment decisions. It is recommended
                      to consult with a financial advisor or do further
                      research to gain more insights into the company's f
                      undamentals and market trends. The user
                      already knows that"""
                },
                {
                    "role": "assistant",
                    "content": content,
                },
            ],
        )

        output_list = [ second_response["choices"][0]["message"]["content"] , graph ]
        list_data.clear()
        return output_list





app = Flask(_name_)
openai.api_key = os.getenv("OPENAI_API_KEY")
#

def answer_generic_question(topic: str, question: str = "explain about it", require_google: bool = True):
    print(f"Answering question on {topic} about {question}")
    
    
    if require_google == True:
        params = {
        "engine": "google",
        "tbm": "nws",
        "q": topic+" "+question,
        "api_key": os.environ["SERPAPI_API_KEY"],
        }
        response = requests.get('https://serpapi.com/search', params=params)
        data = response.json()
        datastr  = (str((data.get('news_results'))))
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-0613",
            messages=[{
                "role":
                "user",
                "content":
                f'''Given the user question, write a good condensed response based on the info given (use if necessary)  
                question :{topic}
                content : {datastr}
                '''
                     }],
            )

        message = response["choices"][0]["message"]
        return message
    

    # response = openai.ChatCompletion.create(
    #     model="gpt-3.5-turbo-0613",
    #     messages=[{
    #         "role":
    #         "user",
    #         "content":
    #         f'''Given the user question, write a good condensed response as a financial assistant
    #         question :{topic}
           
    #         '''
    #     }],)
        
    # message = response["choices"][0]["message"]
    # return message
    



def answer_specific_question(question: str, pdf: bool=False, graph: bool=False, summarize: bool=False):
    
  
    analysis = financial_analyst(question) # list with text and graph       
    return analysis


def learn(topic: str):
    print(f"Learning on {topic}")


main_function_descriptions = [
    {
        "name": "answer_generic_question",
        "description": "Provide an answer to a question on a specific topic.",
        "parameters": {
            "type": "object",
            "properties": {
                "topic": {
                    "type": "string",
                    "description": "The topic of the question.",
                },
                "question": {
                    "type": "string",
                    "description": "The question to be answered.",
                    "default": "explain about it",
                },
                "require_google": {
                    "type": "boolean",
                    "description": "Flag indicating whether Google search is required.",
                    "default": False,
                },
            },
            "required": ["topic","question"],
        },
    },
    {
        "name": "answer_specific_question",
        "description": "Used to answer specific qusetions on a company . ",
        "parameters": {
            "type": "object",
            "properties": {
                "question": {
                    "type": "string",
                    "description": "The question or topic to be analyzed.",
                },
                "pdf": {
                    "type": "boolean",
                    "description": "Flag indicating whether to analyze a PDF document.",
                },
                "graph": {
                    "type": "boolean",
                    "description": "Flag indicating whether to generate graphs.",
                },
                "summarize": {
                    "type": "boolean",
                    "description": "Flag indicating whether to summarize the analysis.",
                },
                
            },
            "required": ["question", "pdf", "graph", "summarize"],
        },
    },
    {
        "name": "learn",
        "description": "Initiate learning process on a specific topic.",
        "parameters": {
            "type": "object",
            "properties": {
                "topic": {
                    "type": "string",
                    "description": "The topic to learn about.",
                },
            },
            "required": ["topic"],
        },
    },
]




@app.route('/')
def home():
    return 'Hello, World!'




@app.route('/text' , methods=['POST'])
def text():
    input_text = request.json["text"] 
    print(input_text)
    headers = request.headers
    
    auth = headers.get("smart")
    
    if auth == os.getenv("PASS_PHRASE"):
        response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-0613",
        messages=[{"role": "user", "content": input_text}],
        temperature=0,
   
        functions=main_function_descriptions,
        function_call="auto", 
        )
        print(response,"main responsse")
        output = response.choices[0].message
        reason= response.choices[0].finish_reason
        
        if reason == "function_call":
            chosen_function = eval(output.function_call.name)
            print(chosen_function)
            params = json.loads(output.function_call.arguments)
            
            
            
            if(chosen_function == answer_generic_question):
                result = answer_generic_question(**params)
                print("generic question")
                wts_text=openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                        "role": "user",
                        "content": f'''hey can you make the below paragraph more concise for whatsapp . add emojis and make it point wise to make it more readable.
                        Retuen only the output text without making it look like an llm generated text
                        Here is the paragraph: {result["content"]}'''

                    }
                ],
            )
                return jsonify({"wts_text": wts_text["choices"][0]["message"]["content"]})
            
            
            if(chosen_function == answer_specific_question):
                print("specific question")
                print(params)
                result=answer_specific_question(**params)
                
                print(type(result))
            
                pdf_text_response=openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                        "role": "user",
                        "content": f'''hey can you make the below paragraph more concise for whatsapp . add emojis and make it point wise to make it more readable
                        Here is the paragraph: {result[0]}'''

                    }
                ],
            )
                
                
            pdf_text= pdf_text_response["choices"][0]["message"]["content"]
                
               
            return jsonify({"text": result[0],"graph": str(result[1][0]),"wts_text":pdf_text})

            
        else:
                content = response["choices"][0]["message"]["content"]
                return jsonify({"wts_text": content})
                
                
            
    else:
        response = "You are not authorized to use this service"
        return jsonify({"text": response})
    
    
    
if _name_ == '_main_':
    app.run(host="0.0.0.0", port=8000, debug=True, threaded=True)