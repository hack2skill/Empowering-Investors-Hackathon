import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  docqnaresp: any;
  docqnaApi='https://us-central1-patientengagement-373605.cloudfunctions.net/testing-azure-pinecone';

  vidqnaresp: any;
  vidqnaApi = "https://xic4o6hmzpk3mmxo5qajfvs4yy0miybh.lambda-url.us-east-1.on.aws/"


  firstResp: any;
  firstApi = 'https://24etcievzbgpwymqxi4vgegsny0doxta.lambda-url.us-east-1.on.aws/';
  analysisResp: any;
  analysisApi='https://mqqnxujnpav6kpa3mkun5forji0oktte.lambda-url.us-east-1.on.aws/';


  transcription: any;

  constructor(private httpclient: HttpClient) { } 

  async retrieveDOCQnAresponse(inputquery: any){
    // let params = new HttpParams().set("query",inputquery);

    const requestBody={
      "question":inputquery
    }
    

    console.log(requestBody);
    return this.docqnaresp=this.httpclient.post(this.docqnaApi,requestBody, {responseType: 'text'}).toPromise();
  }

  async retrieveVIDQnAresponse(prompt: any){
    // let params = new HttpParams().set("query",inputquery);
    this.transcription = "The Securities and Exchange Board of India, or SEBI, has banned six people from accessing the securities market for up to three years and imposed a pretty heavy fine on them. Their wrongdoing? Well, they were found to have sent misleading messages on stock investment on their Telegram channel. Among them, three were administrators of the channel Bull Run 2017, or Bull Run Investment Educational Channel, which had more than 49,000 subscribers. So what did they do? Well, first they bought stocks of a particular company. Then they sent out buy recommendation messages for these stocks to their subscribers. The trio then sold the stocks to their subscribers at a higher price. This comes at a time when the government has been particularly wary about financial influencers or finfluencers. In fact, the SEBI has been working on guidelines to regulate these finfluencers. you"
    const requestBody={
      "prompt": prompt,
      "transcription": this.transcription
    }
    
    console.log(requestBody);
    return this.vidqnaresp=this.httpclient.post(this.vidqnaApi,requestBody, {responseType: 'text'}).toPromise();
  }

  async getAnalysis(link: any) {
    
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('mode', 'no-cors');
    // headers = headers.set("ngrok-skip-browser-warning","69420")
    // headers = headers.append('ngrok-skip-browser-warning', "true")
    // let headers = { 
    //   'ngrok-skip-browser-warning':true
    // } 
  
    const requestBody={
      "link": link
    }

    // https://24etcievzbgpwymqxi4vgegsny0doxta.lambda-url.us-east-1.on.aws/
    // https://mqqnxujnpav6kpa3mkun5forji0oktte.lambda-url.us-east-1.on.aws/


    // fetch('https://24etcievzbgpwymqxi4vgegsny0doxta.lambda-url.us-east-1.on.aws/')
    // .then(response => response.json())
    // .then(data => {
    //   // Process the response data
    //   console.log(data)

    //   // Update the dropdown or perform other actions
    //   // based on the response data
    // })
    // .catch(error => {
    //   // Handle any errors that occurred during the request
    //   console.error(error);
    // });

    // return "hello"

    // return this.analysisResp = this.httpclient.post("https://us-central1-patientengagement-373605.cloudfunctions.net/testing-azure-pinecone",requestBody).toPromise();

    this.firstResp=this.httpclient.post(this.firstApi,requestBody).toPromise();
    return this.analysisResp = this.httpclient.get(this.analysisApi).toPromise();

  }

}
