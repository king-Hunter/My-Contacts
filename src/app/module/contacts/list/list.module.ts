import { ShowInfoModule } from './../modules/show-info.module';
import { FormContactModule } from './../modules/form-contact.module';
import { CommonsModule } from 'src/app/core/modules/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    CommonsModule,
    FormContactModule,
    ShowInfoModule
  ],
  declarations: [ListPage]
})
export class ListPageModule { }
