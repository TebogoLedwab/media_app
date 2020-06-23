import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
  
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],

=======
import { Routes, RouterModule } from '@angular/router';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
>>>>>>> b6835f5cb08f0ffdd5f722b6075dd6695504d8fe
  exports: [RouterModule]
})
export class AppRoutingModule { }
