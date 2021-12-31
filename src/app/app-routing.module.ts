import { SessionStartedGuard } from './core/routers/session-started.guard';
import { LoginGuard } from './module/login/routers/login.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./module/login/sign-in/sign-in.module').then(m => m.SignInPageModule), canActivate: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./module/contacts/list/list.module').then(m => m.ListPageModule), canActivate: [SessionStartedGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
