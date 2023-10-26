import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
