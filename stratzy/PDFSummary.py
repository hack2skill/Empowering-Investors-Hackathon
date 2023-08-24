from langchain.text_splitter import CharacterTextSplitter,NLTKTextSplitter #text splitter
from langchain.embeddings import HuggingFaceEmbeddings #for using HugginFace models
from langchain import HuggingFaceHub
from langchain.indexes import VectorstoreIndexCreator #vectorize db index with chromadb
from langchain.chains import RetrievalQA, LLMChain
from langchain.llms import OpenAI
from langchain.document_loaders import PyPDFLoader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chains import ConversationalRetrievalChain
from langchain.prompts import PromptTemplate
from langchain.chains import RetrievalQA
from langchain.memory import ConversationBufferMemory
import nltk 
import redis
import os
import json
os.environ["OPEN_API_KEY"] = "J3dWgPvniwfXTWCOry2yT3BlbkFJkGxhfh9GYeXK1IL0ZEj0"
#r = redis.StrictRedis(host='10.0.0.105', port=6379, db=0)

llm = OpenAI(openai_api_key="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",temperature=0)

def getLLM(path):
    loader = PyPDFLoader(path)
    index = VectorstoreIndexCreator(
        embedding=OpenAIEmbeddings(openai_api_key="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"),
        text_splitter=NLTKTextSplitter(chunk_size=50000)).from_loaders([loader])
    memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
    chain = ConversationalRetrievalChain.from_llm(llm, index.vectorstore.as_retriever(), memory=memory,chain_type='map_reduce')
    return chain, memory, index

def formatBulletList(x):
    if len(x[0]) < 5: x.pop(0) 
    modified_summ = ''
    for i in x: modified_summ += '•' + i
    modified_summ = '\n' + modified_summ
    return modified_summ

def getSpeakers(chain,memory,ticker): 
    memory.clear()
    speakers = chain({'question':"The transcript starts with the management speaking. Who are the speakers from management? Print ONLY a python list. Only print the names. Do not include anyone who is not from {}.".format(ticker)})['answer']
    speakers = chain({'question':"Only keep the names of speakers which are from management. Print ONLY a python list and make sure the formatting will work inside an eval statement."})['answer']
    speakers = eval(speakers)
    return speakers

def getSummary(chain,memory,speakers):
    speakers_with_summary = {}
    for s in speakers:
        memory.clear()
        print(s)
        summ = chain({'question':"Print a summary of what {} said in the transcript in 10 unordered bullet points. For each bullet point, include context surrounding the idea so it is easily understood. The list should include key information about the business and plans for the future. The summary should not only focus on metrics and numbers but also highlight {}'s narrative and vision for the company\'s future. Each bullet point should end with a period.".format(s,s)})['answer']
        if summ[-1] not in ['\n','.']: 
            answer_split = summ.split('•')
            incomplete = chain({'question':'continue'})['answer']
            completed_point = llm('Print the correct combination of these two sentences. Sentence 1: {} Sentence 2: {}'.format(answer_split[-1],incomplete)).replace('\n','').replace('\"','')
            sentences = nltk.sent_tokenize(completed_point)
            sentences = [' ' + x + '\n' for x in sentences]
            answer_split.pop()
            answer_split = answer_split + sentences
            summ = formatBulletList(answer_split)
        speakers_with_summary[s] = summ
    return speakers_with_summary


def getJSON(speakers_with_summ,index):
    points_json = []
    for k,v in speakers_with_summ.items():
        for p in v.split('•'):
            if len(p) < 5: continue
            pgnum = index.vectorstore.similarity_search_with_relevance_scores('Where is this line: {}'.format(p))[-1][0].dict()['metadata']['page']
            points_json.append({'name':p,'speaker':k,'pageNumber':pgnum})
    return points_json

def driver(tickers):
    for ticker in tickers:
        print(ticker)
        path = 'Documents/' + ticker + '.pdf' # S3 Path
        chain, memory, index = getLLM(path)
        print('LLM Initialised')
        speakers = getSpeakers(chain,memory,ticker)
        print('Speakers Detected')
        print(speakers)
        summary = getSummary(chain,memory,speakers)
        for k,v in summary.items(): 
            print(k,v)
        print('Transcript Summarised')
        json_summary = getJSON(summary,index)
        print('Converted to JSON')
        print(json_summary)

        # #-------- Save the file path to redis  -----------#
        # r.set('earnings_summary_{}'.format(ticker), json.dumps(json_summary)) 

tickers = [t[:-4] for t in os.listdir('Documents')]
driver(tickers)