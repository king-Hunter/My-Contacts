import { LoginGuard } from './../routers/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPage } from './sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: SignInPage
  },
  {
    path: 'create',
    loadChildren: () => import('../sign-up/sign-up.module').then(m => m.SignUpPageModule), canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInPageRoutingModule { }
