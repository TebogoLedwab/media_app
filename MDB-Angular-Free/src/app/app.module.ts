
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PostUpdateComponent,
    LikeButtonComponent,
    HomeComponentComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
