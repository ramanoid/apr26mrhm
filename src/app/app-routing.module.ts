import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {DetailsComponent} from './components/details/details.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'details',
    component:DetailsComponent
  },
  {
    path:"posts",
    component:PostsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
