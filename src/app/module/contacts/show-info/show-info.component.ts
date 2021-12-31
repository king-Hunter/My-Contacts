import { MessageTitleForm } from './../types/type-message-form';
import { ContactModel } from './../model/contact-model';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss'],
})
export class ShowInfoComponent implements OnInit {
  @Input() public contact: ContactModel;
  public messageTitle: MessageTitleForm;
  public loaderAShowContact: boolean;

  constructor(private modalController: ModalController) {
    this.messageTitle = 'Mi Contacto';
    this.loaderAShowContact = true;
    this.init();
  }

  ngOnInit() {
    console.log(this.contact);
  }

  private init() {
    setTimeout(() => {
      this.loaderAShowContact = false;
    }, 2000);
  }

  public closeModal() {
    this.modalController.dismiss();
  }
}
