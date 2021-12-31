import { FormMessageRequiredComponent } from './../components/form-message-required/form-message-required.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FormMessageRequiredComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [FormMessageRequiredComponent]
})
export class FormValidationsModule { }
