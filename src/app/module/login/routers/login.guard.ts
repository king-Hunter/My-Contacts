import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private storage: Storage, private route: Router) { }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const sessionExist = await this.storage.get('session');
    if (sessionExist !== null && sessionExist) {
      this.route.navigate(['/home']);
      return false;
    }
    return true;
  }

}
