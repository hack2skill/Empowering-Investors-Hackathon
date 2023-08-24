import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { DocqnaComponent } from './docqna/docqna.component';
import { VideoqnaComponent } from './videoqna/videoqna.component';

const routes: Routes = [
  {path:'exhibit',component:ExhibitsComponent,children:[
    {path:'docqna',component:DocqnaComponent},
    {path:'videoqna',component:VideoqnaComponent}]
  },
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
