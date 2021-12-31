import { GeneratorM } from './../../contacts/util/name-generate';
import { Router } from '@angular/router';
import { SignInModel } from './../model/sign-in-model';
import { SignInInterface } from './../interface/sign-in-interface';
import { LoginService } from './../service/login.service';
import { NgForm } from '@angular/forms';
import { SignUpModel } from './../model/sign-up-model';
import { SignUpInterface } from './../interface/sign-up-interface';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  providers: [GeneratorM]
})
export class SignUpPage implements OnInit {
  public user: SignUpInterface;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private generator: GeneratorM,
    private location: Location
  ) {
    this.user = new SignUpModel();
  }

  ngOnInit() { }

  public createAccount(form: NgForm) {
    if (form.valid) {
      const account: SignUpInterface = this.generator.account(form);
      this.loginService.setCustomUser(account);
      this.route.navigate(['/home']);
    }
  }

  public close() {
    this.location.back();
  }
}
