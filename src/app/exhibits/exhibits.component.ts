import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbRouteTab } from '@nebular/theme';

@Component({
  selector: 'app-exhibits',
  templateUrl: './exhibits.component.html',
  styleUrls: ['./exhibits.component.scss']
})
export class ExhibitsComponent implements OnInit{


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tabs: NbRouteTab[] = [
    // {
    //   responsive: true,
    //   disabled:true
    // },
    {
      title: 'Question Against Input Video',
      route: 'videoqna',
      responsive: true
    },
    {
      title: 'SEBI Regulations Help',
      route: 'docqna',
      responsive: true
    }
  ]

  navigateToHome() {
    this.router.navigate(['']);
  }

}
