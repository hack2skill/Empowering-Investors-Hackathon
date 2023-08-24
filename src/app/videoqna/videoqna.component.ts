import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-videoqna',
  templateUrl: './videoqna.component.html',
  styleUrls: ['./videoqna.component.scss']
})
export class VideoqnaComponent {
  buttonclicked = false;
  topAnswer: any;
  constructor(public dataservice:DataserviceService) { }
  inputquery: string | undefined;
  ngOnInit(): void {
  }

  submitquery() {
    this.buttonclicked = true;
    this.topAnswer = undefined;
    this.dataservice.retrieveVIDQnAresponse(this.inputquery).then((resp: any) => {
      console.log(resp);
      this.topAnswer = {};
      this.topAnswer['answer'] = resp;
      console.log(this.topAnswer);
      console.log(this.dataservice.vidqnaresp);
    });
  }

  
}
