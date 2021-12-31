import { FormValidationsModule } from './../../../core/modules/form-validations.module';
import { CommonsModule } from './../../../core/modules/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    CommonsModule,
    FormValidationsModule
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
