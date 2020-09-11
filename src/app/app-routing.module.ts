import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'resgister',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'resgister',
    loadChildren: () => import('./pages/resgister/resgister.module').then(m => m.ResgisterPageModule)
  },
  {
    path: 'question-start',
    loadChildren: () => import('./pages/question-start/question-start.module').then(m => m.QuestionStartPageModule)
  },
  {
    path: 'videoslide',
    loadChildren: () => import('./pages/videoslide/videoslide.module').then(m => m.VideoslidePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
