import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'welcome',
  //   component: WelcomePageComponent
  // },
  // {
  //   path: 'movies',
  //   component: MovieCardComponent
  // },
  // {
  //   path: '',
  //   redirectTo: 'welcome',
  //   pathMatch: 'prefix'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
