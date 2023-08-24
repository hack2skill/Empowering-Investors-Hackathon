# Empowering-Investors-Hackathon

## Submission Instruction:
  1. Fork this repository
  2. Create a folder with your Team Name
  3. Upload all the code and necessary files in the created folder
  4. Upload a **README.md** file in your folder with the below mentioned informations.
  5. Generate a Pull Request with your Team Name. (Example: submission-XYZ_team)

## README.md must consist of the following information:

#### Team Name - FinCredVerify
#### Problem Statement - Identifying Misleading Claims 
#### Team Leader Email - pranjalkar99.work@gmail.com

## A Brief of the Prototype:
  The Idea is to make a ui-friendly website where users put the link of the youtube/instagram video/shorts,etc. The website will utilize APIs to gather essential data,including text transcripts, captions, influencer profiles, and comments. A Langchain-powered agent will analyze the text and other data using Language Models (LLMs).Based on the analysis, the AI model will assign a score and classify the content asverified or not. The aim is to streamline the verification process using advancedtechnology and provide users with reliable insights.
## Business Opportunity ##
Streamlined Verification:
Simplify content verification by allowing users to input videolinks, leveraging advanced Language Models for accurate analysis, and delivering clearauthenticity scores, empowering users to make informed decisions.
Freemium Model & Partnerships:
Offer basic verification for free, enticing users toupgrade to a premium plan for advanced insights. Forge partnerships with brands andagencies for sponsored content validation, creating revenue streams.
Data-Driven Growth:
Utilize user data for continuous AI model improvement andgenerate valuable insights. Offer reports and analyses for sale, potentially partnering withsocial media platforms for seamless integration and expanding market reach.

## Tech Stack: 
  FASTAPI, for building backend api
Vuejs , for building frontend
Tensorflow, Nltk, huggingface: for building the comment sections sentiments-analyzer
Langchain: for chaining LLM model, with search agents for fact-check, as well as retrievalagent on documents of SEBI
LLM model: for analysis, like openai, cohere, palm
APIs of youtube and instagram for getting the video, text, caption, and other content fromthe URL
   
## Step-by-Step Code Execution Instructions:
  This Section must contain a set of instructions required to clone and run the prototype so that it can be tested and deeply analyzed
  `python -m venv env`
  `source env/bin/activate`
  `pip install -r requirements.txt`
  `uvicorn main:app --reload`



## What I Learned:
  Building LLM applications and Openai, Langchain chaininga agents, to make Generative AI applications.
