# Empowering-Investors-Hackathon

#### Team Name - stratzy
#### Problem Statement - Content Curation and Education - Retail Investors not getting time/interest in reading or understanding management concalls/transcripts
#### Team Leader Email - mohit@stratzy.in

## A Brief of the Prototype:
<img width="714" alt="Screenshot 2023-08-24 at 3 26 34 PM" src="https://github.com/ved115/Empowering-Investors-Hackathon/assets/7903563/3489b977-f02c-4f0b-88ea-e7d99b2460ce">

  We use an LLM model to create a summary of the management concalls which allows retail investors to quickly glance over the main pointers organised by each speaker. Each pointer is clickable which takes them to the page on the pdf where the information in the pointer is referenced from.
  
## Tech Stack: 
   Python, GPT 3.5
   Libraries: LangChain, BeautifulSoup, nltk
   
## Step-by-Step Code Execution Instructions:
  1. Run the PDFScraper.py file to obtain PDF links for each of the tickers. Each link corresponds to the concall transcript for the latest earnings release for that company. This will also download PDFs for each ticker and save them to the local directory.
  2. Run PDFSummary.py and the summaries will be printed for each ticker. The page numbers will also be saved for each point in a JSON format for further analysis.
  
## What I Learned:
   LLMs are much more complex than they seem to be. It is quite difficult to obtain perfect output each time one interacts with an LLM such as GPT 3.5. For example, most of the time when GPT is prompted to produce code, it is not written perfectly and usually contains bugs that prevent it from being run. When working on this project, the main idea was to produce consistent outputs that do not change significantly when running on the same inputs. Obtaining deterministic behaviour was crucial in developing this tool.
