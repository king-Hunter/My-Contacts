import { ContactsService } from './../service/contacts.service';
import { ContactModel } from './../model/contact-model';
import { ShowInfoComponent } from './../show-info/show-info.component';
import { FormContactComponent } from './../form-contact/form-contact.component';
import { ContactInterface } from './../interface/contact-interface';
import { LoginService } from './../../login/service/login.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public loaderList: boolean;
  public listConctact: Array<ContactInterface>;
  public notExistContacts: boolean;
  constructor(
    private loginService: LoginService,
    private modalController: ModalController,
    private contact: ContactsService
  ) {
    this.notExistContacts = false;
    this.listConctact = [];
    this.loaderList = false;
  }

  ngOnInit() {
    this.loadListContact();
  }

  async loadListContact() {
    this.loaderList = true;
    this.listConctact = await this.loginService.getListContact();
    setTimeout(() => {
      this.validateContact();
      this.loaderList = false;
    }, 2000);
  }
  public addContact() {
    this.formContact('agregar');
  }
  public editContact(contact: ContactInterface) {
    this.formContact('editar', contact);
  }

  public deleteContact(contact: ContactInterface) {
    this.contact.deleteContact(contact.id);
    let id: number = null;
    this.listConctact.forEach((element, index) => {
      if (contact.id === element.id) {
        id = index;
      }
    });
    this.listConctact.splice(id, 1);
    this.validateContact();
  }

  async formContact(option: string, contact: ContactInterface = new ContactModel()) {
    const modal = await this.modalController.create({
      component: FormContactComponent,
      cssClass: 'custom-modal-form',
      componentProps: {
        option,
        contact
      }
    });
    await modal.present();
    await modal.onDidDismiss().then((r) => {
      if (r.data !== undefined) {
        this.updateList(r.data.data);
      }
    });
  }

  async showInfo(contact: ContactInterface) {
    const modal = await this.modalController.create({
      component: ShowInfoComponent,
      cssClass: 'custom-modal-form',
      componentProps: {
        contact
      }
    });
    await modal.present();
  }

  private updateList(contact: ContactInterface) {
    this.listConctact.push(contact);
    this.validateContact();
  }
  private validateContact() {
    if (this.listConctact.length === 0) {
      this.notExistContacts = true;
    } else {
      this.notExistContacts = false;
    }
  }
}
