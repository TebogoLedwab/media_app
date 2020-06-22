import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
