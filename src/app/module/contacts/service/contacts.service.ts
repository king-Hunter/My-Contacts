import { ContactModel } from './../model/contact-model';
import { ContactInterface } from './../interface/contact-interface';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private storage: Storage) { }

  public async getListContact(): Promise<ContactInterface[]> {
    const listContact: Array<ContactInterface> = await this.storage.get('listContact');
    if (listContact !== null) {
      return listContact;
    }
    return [];
  }

  public async addContact(contact: ContactInterface) {
    const listContact = this.getListContact();
    (await listContact).push(contact);
    this.storage.set('listContact', listContact);
  }

  public async editContact(contact: ContactInterface) {
    const listContact = this.getListContact();
    (await listContact).forEach((element: ContactModel) => {
      if (element.id === contact.id) {
        element = contact;
      }
    });
    this.storage.set('listContact', listContact);
  }

  public async deleteContact(id: string) {
    const listContact = this.getListContact();
    let deleteId: number = null;
    (await listContact).forEach(
      (contact: ContactModel, index: number) => {
        if (contact.id === id) {
          deleteId = index;
        }
      }
    );
    if (deleteId !== null) {
      (await listContact).splice(deleteId, 1);
    }
    this.storage.set('listContact', listContact);
  }
}
