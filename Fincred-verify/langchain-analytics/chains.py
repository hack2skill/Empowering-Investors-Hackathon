from langchain.tools import DuckDuckGoSearchRun
search = DuckDuckGoSearchRun()
from langchain.prompts import PromptTemplate
from langchain.chains import SequentialChain
from langchain.chains import LLMChain
from langchain.tools import BaseTool
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.agents import AgentType
from langchain.llms import OpenAI
from langchain.agents import Tool
from langchain.agents import initialize_agent
import os

# Replace 'YOUR_API_KEY_ENV_VARIABLE' with the actual name of your environment variable
api_key = os.getenv('OPENAI_API_KEY')

if api_key:
    print(f'Your OpenAI API key is: {api_key}')
else:
    print('API key not found. Please set the environment variable.')

llm = OpenAI(temperature=0.7, openai_api_key = api_key)
summ_template = """
You are a fact-checker and analyst. Given a text transcript, your task is to provide a concise summary of its main points while emphasizing any potential fakeness or false claims.

Text Transcript: {transcript}

Fact-Checker's Summary:
"""
sum_prompt_template = PromptTemplate(input_variables=["transcript"], template=summ_template)
summary_chain = LLMChain(llm=llm, prompt=sum_prompt_template, output_key="summary")

com_template = """
You are a comment analyst. Given a set of comments, your task is to provide a concise summary of the main points while emphasizing any potential fakeness or false claims in the comments. Additionally, assess whether the audience appears to be informed and if they have added relevant context to their comments.

Comments:
{comments}

Comment Analyst's Summary:
"""
com_prompt_template = PromptTemplate(input_variables=["comments"], template=com_template)
comment_chain = LLMChain(llm=llm, prompt=com_prompt_template, output_key="comment_summary")

simplify_chain = SequentialChain(
    chains=[summary_chain, comment_chain],
    input_variables=["comments", "transcript"],
    output_variables=["comment_summary", "summary"],
    verbose=True)



tools = [search]
agent = initialize_agent(tools,
                         llm,
                         agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
                         verbose=True)

def get_Insights(transcript, comments):
    return simplify_chain({"comments":comments, "transcript":transcript})

def run_agent(transcript):
    return agent.run("Given the provided text transcript, please perform the following tasks:\n\n"
              "1. Identify any claims made in the text.\n"
              "2. Conduct a search to gather insights related to the claims.\n"
              "3. Warn about potential risks associated with the content that are not discussed in the text.\n"
              "4. Provide an assessment of the benefits mentioned in the text.\n\n"
              "Return the following:\n"
              "- A list of identified claims.\n"
              "- Insights gathered from the search.\n"
              "- Warnings about potential risks.\n"
              "- An assessment of benefits mentioned in the text." + transcript)
    
