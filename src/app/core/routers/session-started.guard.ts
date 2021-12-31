import { Storage } from '@ionic/storage';
import { LoginService } from './../../module/login/service/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionStartedGuard implements CanActivate {
  constructor(private route: Router, private storage: Storage) { }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    const sessionExist = await this.storage.get('session');
    if (sessionExist === null && !sessionExist) {
      this.route.navigate(['/']);
      return false;
    }
    return true;
  }
}

