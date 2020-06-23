
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
=======


import { AppRoutingModule } from './app-routing.module';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

>>>>>>> b6835f5cb08f0ffdd5f722b6075dd6695504d8fe

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    HomeComponent
=======
    PostUpdateComponent,
    LikeButtonComponent,
    HomeComponentComponent,
 
>>>>>>> b6835f5cb08f0ffdd5f722b6075dd6695504d8fe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
<<<<<<< HEAD
   
=======
>>>>>>> b6835f5cb08f0ffdd5f722b6075dd6695504d8fe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
