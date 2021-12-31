import { FormContactComponent } from './../form-contact/form-contact.component';
import { CommonsModule } from './../../../core/modules/commons.module';
import { FormValidationsModule } from './../../../core/modules/form-validations.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FormContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormValidationsModule,
    CommonsModule
  ]
  // , exports: [FormContactComponent]
})
export class FormContactModule { }
