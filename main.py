from langchain.document_loaders import PyPDFLoader,DirectoryLoader
from langchain import PromptTemplate
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS
from langchain.llms import CTransformers
from langchain.chains import RetrievalQA
import chainlit as cl

FaissPath = 'vectorstore/db_faiss'

prompt_Template = ''' You are an educator, answering
questions about stock market and related topics. You provide basic answers, in simple terms.
Use the following pieces of information to answer the user's question.
If you don't know the answer, just say that you don't know, don't try to make up an answer.

Context: {context}
Question: {question}

Only return the helpful answer below and nothing else.
Helpful answer:

'''
# Prompt definition
def setPrompt():
    prompt = PromptTemplate(template = prompt_Template, input_variables=['context','question'])

    return prompt

# Form a QnA Chain
def retrievalQNA(llm,prompt,database):
    qaChain = RetrievalQA.from_chain_type(llm=llm,
                                          chain_type='stuff',
                                          retriever = database.as_retriever(search_kwargs = {'k':2}),
                                          return_source_documents=True,
                                          chain_type_kwargs={'prompt':prompt}
                                          )
    return qaChain

# Load LLM
def loadLLM():
    llm = CTransformers(
        model="llama-2-7b-chat.ggmlv3.q8_0.bin",
        model_type='llama',
        max_new_tokens = 700,
        temperature = 0.5
    )
    return llm

# Final call QnA Bot
def QnABot():
    embeddings = HuggingFaceEmbeddings(model_name='sentence-transformers/all-MiniLM-L6-v2',
                                       model_kwargs={'device': 'cpu'})  # Check Line 26

    dataBase=FAISS.load_local(FaissPath,embeddings)
    llm=loadLLM()
    qaPrompt = setPrompt()
    qa = retrievalQNA(llm,qaPrompt,dataBase)

    return qa

#Output
def Results(query):
    qa_result = QnABot()
    response = qa_result({'query':query})
    return response

# Chainlit interface
@cl.on_chat_start
async def start():
    chain = QnABot()
    msg = cl.Message(content="Starting the bot...")
    await msg.send()
    msg.content = "Hi, Welcome to Fin-Ed Bot. What is your query?"
    await msg.update()

    cl.user_session.set("chain", chain)
@cl.on_message
async def main(message):
    chain = cl.user_session.get('chain')
    cb = cl.AsyncLangchainCallbackHandler(stream_final_answer=True, answer_prefix_tokens=["FINAL", "ANSWER"])
    cb.answer_reached=True
    res = await chain.acall(message,callbacks=[cb])
    answer = res['result']
    sources = res['source_documents']

    if sources:
        answer += f"\nSources:"+str(sources)
    else:
        answer += "\nNo sources"
    await cl.Message(content=answer).send()