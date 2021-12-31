import { SignUpInterface } from './../interface/sign-up-interface';
import { SignInModel } from './../model/sign-in-model';
import { ContactInterface } from './../../contacts/interface/contact-interface';
import { DefaultSignIn } from '../model/sign-in-model';
import { SignInInterface } from './../interface/sign-in-interface';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage: Storage) { }

  public async getUser(): Promise<SignInInterface> {
    const user: SignInInterface = await this.storage.get('default');
    const custom: SignInInterface = await this.storage.get('user');
    if (custom === null) {
      return user;
    }
    return custom;
  }

  public async existDefault(): Promise<boolean> {
    const user = await this.getUser();
    return (user.user === 'admin');
  }

  public async setDefaultUser() {
    const defaultUser = await this.storage.get('user');
    if (defaultUser === undefined || defaultUser === null) {
      this.storage.set('default', new DefaultSignIn());
    }
  }

  public async getListContact(): Promise<ContactInterface[]> {
    const listContact: Array<ContactInterface> = await this.storage.get('listContact');
    if (listContact !== null) {
      return listContact;
    }
    return [];
  }

  public activeSession() {
    this.storage.set('session', true);
  }

  public closeSession() {
    this.storage.remove('session');
  }

  public setCustomUser(user: SignUpInterface) {
    this.storage.remove('user');
    this.storage.remove('profile');
    this.storage.set('user', new SignInModel(user.email, user.password));
    this.storage.set('profile', user);
    this.activeSession();
  }
}
