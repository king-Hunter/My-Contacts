import { SignInModel } from '../model/sign-in-model';
import { Validator } from './../../../core/utils/validator';
import { LoginService } from './../service/login.service';
import { SignInInterface } from './../interface/sign-in-interface';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  providers: [Validator]
})
export class SignInPage implements OnInit {
  public signIn: SignInModel;
  public errorLogin: boolean;

  constructor(
    private loginService: LoginService,
    private validator: Validator,
    private route: Router
  ) {
    this.signIn = new SignInModel();
  }

  ngOnInit() {
    //
  }
  public createAccount() {
    this.route.navigate(['/login/create']);
  }

  async login(form: NgForm) {
    this.errorLogin = false;
    const user: SignInInterface = await this.loginService.getUser();
    if (this.validator.validateObj(form.value, user)) {
      this.loginService.activeSession();
      this.route.navigate(['/home']);
      setTimeout(() => {
        this.signIn = new SignInModel();
      }, 3000);
    } else {
      this.errorLogin = true;
    }
  }
}
