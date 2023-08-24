import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocqnaComponent } from './docqna/docqna.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbChatModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbRouteTabsetModule, NbSelectModule, NbThemeModule, NbToggleModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { VideoqnaComponent } from './videoqna/videoqna.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocqnaComponent,
    ExhibitsComponent,
    VideoqnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    NbFormFieldModule,
    NbIconModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbToggleModule,
    // NgxSliderModule,
    NbAccordionModule,
    NbSelectModule,
    PdfViewerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
