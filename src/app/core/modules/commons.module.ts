import { HeaderComponent } from './../components/header/header.component';
import { LoaderComponent } from './../components/loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HeaderComponent, LoaderComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, LoaderComponent]
})
export class CommonsModule { }
