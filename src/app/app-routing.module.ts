import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: 'settings', component: SettingsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
