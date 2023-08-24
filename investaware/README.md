# Empowering-Investors-Hackathon

## Submission Instruction:
  1. Fork this repository
  2. Create a folder with your Team Name
  3. Upload all the code and necessary files in the created folder
  4. Upload a **README.md** file in your folder with the below mentioned informations.
  5. Generate a Pull Request with your Team Name. (Example: submission-XYZ_team)

## README.md must consist of the following information:

#### Team Name - InvestAware
#### Problem Statement -  Content Curation and Execution
#### Team Leader Email - sagar.agarwal@beyondirr.tech

## A Brief of the Prototype:
  1: The video is inside: https://www.youtube.com/watch?v=ksngr6Zrwvg
  2: The application is live: https://investaware.beyondirr.tech and with username test@test.com and      password test@123
  3: The admin is live on :https://api.investaware.beyondirr.tech/admin with same credentials as above.
  
## Tech Stack: 
   ReactJs
   Django

   
## Step-by-Step Code Execution Instructions:
  For API repo:
  1: Checkout api repo and Create virtual environment venv downloading conda and using Python 3.9
  2: Enter Virtual Environment source/venv/bin/activate 
  3: pip install -r requirements.txt
  4: Add ALLOWED_HOSTS = ["127.0.0.1"] and CSRF_TRUSTED_ORIGINS = ["http://127.0.0.1"]
  5: Run python manage.py runserver

  For Frontend repo:
  1: Install nvm
  2: nvm use 16
  3: npm install
  4: npm start
  5: search for {{api_url}} in code and change to "127.0.0.1:8000" as it points to api repo


  
## What I Learned:
   During the prototype development of a Django and React-based investment content app, I learned to integrate frontend and backend seamlessly, manage user authentication, design interactive UI, fetch and display dynamic data, and optimize for responsiveness. Testing and debugging were crucial for a smooth user experience, enhancing my full-stack skills significantly.