import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-docqna',
  templateUrl: './docqna.component.html',
  styleUrls: ['./docqna.component.scss']
})
export class DocqnaComponent implements OnInit{
  buttonclicked = false;
  topAnswer: any;
  constructor(public dataservice:DataserviceService) { }
  inputquery: string | undefined;
  ngOnInit(): void {
  }

  submitquery() {
    this.buttonclicked = true;
    this.topAnswer = undefined;
    this.dataservice.retrieveDOCQnAresponse(this.inputquery).then((resp: any) => {
      console.log(resp);
      console.log(this.dataservice.docqnaresp);
      this.topAnswer = {};
      this.topAnswer['answer'] = resp;
      console.log(this.topAnswer);
    });
  }
}
