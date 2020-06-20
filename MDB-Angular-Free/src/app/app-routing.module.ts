import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostUpdateComponent } from './components/post-update/post-update.component';

const routes: Routes = [
  {path: '', component: PostUpdateComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
