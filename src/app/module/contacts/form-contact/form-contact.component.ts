import { MessageTitleForm } from './../types/type-message-form';
import { Validator } from './../../../core/utils/validator';
import { Option } from './../types/type-option';
import { ContactsService } from './../service/contacts.service';
import { GeneratorM } from './../util/name-generate';
import { ContactInterface, PhoneInterface } from './../interface/contact-interface';
import { TNumber } from './../types/type-number';
import { ModalController } from '@ionic/angular';
import { ContactModel, PhoneModel } from './../model/contact-model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { TemplateObject } from '../util/object-template';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
  providers: [TemplateObject, GeneratorM, Validator]
})
export class FormContactComponent implements OnInit {
  @Input() public option: Option;
  @Input() public contact: ContactModel;
  public mail: string;
  public loaderFormContact: boolean;
  public defaultTemeplateNumber: Array<TNumber>;
  public messageTitle: MessageTitleForm;
  constructor(
    private modalController: ModalController,
    private tobject: TemplateObject,
    private generate: GeneratorM,
    private contactsService: ContactsService,
    public validate: Validator
  ) {
    this.loaderFormContact = false;
    this.messageTitle = 'Editar Contacto';
    this.defaultTemeplateNumber = this.tobject.templatePhone();
  }

  ngOnInit() {
    console.log(this.option);
    console.log(this.contact);
    this.init();
  }

  public saveContact(form: NgForm) {
    this.loaderFormContact = true;
    const contact: ContactInterface = this.proccessBeforeSaveContact(form);
    if (this.valitateOption) {
      this.contactsService.addContact(contact);
    } else {
      this.contactsService.editContact(contact);
    }
    setTimeout(() => {
      if (this.valitateOption) {
        this.modalController.dismiss(
          { data: contact }
        );
      } else {
        this.modalController.dismiss();
      }
      this.loaderFormContact = false;
    }, 2000);
  }

  public proccessBeforeSaveContact(form: NgForm) {
    const nickName: string = this.generate.getnickName(form);
    const phone: PhoneInterface = this.generate.generteNumbers(form.value.phone_type, form.value.phone_number);
    const email: string = this.generate.generateEmails(form.value.email);
    return new ContactModel((this.valitateOption) ? this.generateId() : this.contact.id, nickName, form.value.full_name, phone, email);
  }

  generateId(): string {
    let uuid = '';
    let characters = '';
    characters = 'aABCDEbcdefghijklmnopqrQRSTUVWXYZstuvwxyzFGHIJKLMNOP';
    const charactersLength: number = characters.length;
    for (let i = 0; i < 45; i++) {
      uuid += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return uuid;
  }

  public closeModal() {
    this.modalController.dismiss();
  }

  private init() {
    if (this.valitateOption) {
      this.messageTitle = 'Nuevo Contacto';
      this.mail = null;
      this.contact = new ContactModel();
    } else {
      this.mail = this.contact.email;
    }
  }

  get valitateOption() {
    return (this.validate.validateOption(this.option));
  }
}
