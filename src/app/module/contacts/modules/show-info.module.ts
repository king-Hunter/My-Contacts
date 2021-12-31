import { ShowInfoComponent } from './../../contacts/show-info/show-info.component';
import { CommonsModule } from './../../../core/modules/commons.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ShowInfoComponent],
  imports: [
    CommonModule,
    IonicModule,
    CommonsModule
  ]
})
export class ShowInfoModule { }
