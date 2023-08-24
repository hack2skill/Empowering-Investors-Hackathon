import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  @ViewChild('secondsection')
  public secondsection!: ElementRef;
  
  isLinkEntered: boolean = false;
  isAnalyzeClicked: boolean = false;
  ytLink: string = ""
  changedytLink: string = ""
  finalytLink: SafeResourceUrl = ""
  whileLoading: boolean = false;
  // analysisResp: any;
  // analysisApi='https://us-central1-patientengagement-373605.cloudfunctions.net/testing-azure-pinecone';

  sebiregulations: string[] = ["Securities and Exchange Board of India (Alternative Investment Funds) Regulations, 2012 [Last amended on July 04, 2023].pdf", "Securities and Exchange Board of India (Debenture Trustees) Regulations, 1993 [Last amended on July 4, 2023].pdf", "Notification repealing Securities and Exchange Board of India (Central Database of Market Participants) Regulations, 2003.pdf"];
  httpclient: any;

  transcription: any = "";
  transcriptionSummarized: any;
  confidenceScore: any;
  category: any;
  reason: any;
  basket: any;

  constructor( public sanitizer: DomSanitizer, private dataservice: DataserviceService, private router: Router) {}

  ngOnInit(): void {
    
  }

  async linkentered(inputvideolink: any) {
    this.isLinkEntered = true;
    this.ytLink = inputvideolink;
    this.changedytLink = this.ytLink;
    this.changedytLink = this.ytLink.replace("watch?v=", "embed/");
    this.changedytLink = this.ytLink.replace("shorts/", "embed/");
    console.log(this.ytLink);
    this.finalytLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.changedytLink);
    this.whileLoading=true;
    this.analyzeclicked();

    this.dataservice.getAnalysis(this.ytLink).then((resp: any) => {
      console.log(resp);

      this.transcription = resp.transcribe;
      this.dataservice.transcription = this.transcription;
      this.transcriptionSummarized = resp.transcribe_summarized;
      this.confidenceScore = resp.confidence;
      this.category = resp.Categorize;
      this.reason = resp.reason;
      this.basket = resp.Basker;
      // this.topAnswer = {};
      // this.topAnswer['answer'] = resp;
      // console.log(this.topAnswer);
    });

    // const requestBody={
    //   "link": this.ytLink
    // }
    // return this.analysisResp=this.httpclient.post(this.analysisApi,requestBody, {responseType: 'text'}).toPromise();
  }

  async analyzeclicked(){
    this.isAnalyzeClicked = true;
    setTimeout(()=>{this.secondsection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });}, 50);
    
  }

  qnaclicked() {
    this.router.navigate(['/exhibit/videoqna']) 
  }


}
