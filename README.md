# SEBI - Empowering Investors Hackathon

#### Team Name - The Turing Tribe
#### Problem Statement - With the rapid proliferation of digital platforms, there has been an alarming surge in deceptive investment claims propagated by self-proclaimed influencers. Such misinformation poses a significant threat, potentially causing unwary investors substantial financial losses. This challenge necessitates innovative solutions in the form of advanced models, cutting-edge tools, and user-centric products that meticulously scrutinize and ascertain the authenticity of influencers active on digital platforms. By harnessing the power of advanced technologies such as Generative AI and Machine Learning, these solutions strive not only to promptly identify and red-flag deceptive claims but also to erect a robust protective barrier around investors, thereby preempting potential financial hazards.

#### Team Leader Email - rajveer.mathur25@gmail.com

<img width="348" alt="TuringTribe" src="https://github.com/KGSSV/SEBI/blob/main/assets/latest%20ttt.png">
<br>

## A Brief of the Prototype: 
Demo Video : https://drive.google.com/file/d/19XEfTAJg9SRasPMAOhiWdkwGQsiUGfsf/view?usp=sharing          
&nbsp;&nbsp;The Prototype is disected into 3 parts
#### 1.Landing UI: Users are prompted to provide links to YouTube videos or YouTube shorts to initiate the process. In doing so, users gain access to the concurrently generated transcription also.
<img width="550" height="330" alt="End2End" src="https://github.com/KGSSV/SEBI/blob/main/assets/MicrosoftTeams-image%20(11).png">

#### 2. The Analysis : Here the user gets the consolidated / processed knowledge of various metrics such as : Category , Confidence Score , List of Descriptives , Missing Context
<img width="550" height="330" alt="End2End" src="https://github.com/KGSSV/SEBI/blob/main/assets/MicrosoftTeams-image%20(12).png">

#### 3. Document Refrenced : Here the documents will be fetched to support claims.
<img width="550" height="330" alt="End2End" src="https://github.com/KGSSV/SEBI/blob/main/assets/MicrosoftTeams-image%20(13).png">

#### 4. Q&A : Here the users can query against each and every SEBI Guideline document
<img width="550" height="330" alt="End2End" src="https://github.com/KGSSV/SEBI/blob/main/assets/MicrosoftTeams-image%20(14).png">

<img width="550" height="330" alt="End2End" src="https://github.com/KGSSV/SEBI/blob/main/assets/MicrosoftTeams-image%20(15).png">

 

## Tech Stack: 

#### HTML, CSS & Angular (UI Playground)
#### GCP Cloud


## Step-by-Step Code Execution Instructions:
#### UI Playground/ Sandbox - User Story
1. Open Link : https://brave-glacier-0ade3280f.3.azurestaticapps.net
   (Due to Costing Constraints of cloud-resources and openai-Api. Please ping us before exploring our live site) 
3. Enter Youtube Link as an input &nbsp;
####   2.1  Youtube Link 1 : https://youtube.com/shorts/Ud9HJffKFds?si=Fga8DFzFSU9hWcAC &nbsp;
####   2.2  Youtube Link 2 : https://youtube.com/shorts/abgriPKGPHc?si=Afb0LymB98eJVoFz &nbsp;
        Feel Free to enter your own youtube link.
        Note : The given link needs to claim / attest / speak about SEBI
4. Once the link is entered click the button "Analyse"
5. Backend will be fired it will take abount 30-40 seconds to return back the results and get populated in the User Interface
6. Once results are populated you can check various paramters
7. If wanted head on to the Q&A and ask your own questoin against the video content
8. If you want to provide Q&A Against SEBI Guidelines Then headon to SEBI GUIDELINE section in the same page
    Note : When Providing your questions Keep your questions relevent to content / video 

  
## What I Learned:
During the development of the prototype, the most significant learning I had was the immense potential and power of AI-driven and automation in revolutionizing the fin-tech world. As the prototype evolved and integrated various elements, I witnessed firsthand how the combination of AI-driven can help in identfying misleading claims, seamless embedding model management integrations could create a highly efficient and effective solution.

One of the key takeaways from the development process was the remarkable speed at which the prototype could identify claims and provide feedback. AI's ability to rapidly analyze video, generate transcript, and analyzing critical statements made in the video. This acceleration translated into faster access to reliable information.

Another crictical insight that we learnt was how LLM use their capability to generate contextual answers when trained on expansive dataset. We also learned the capability of Audio models like whisper which can transcribe multi-lingual audios into text.
