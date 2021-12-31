import { LoginService } from './module/login/service/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private loginService: LoginService) {
    this.initUser();
  }

  public async initUser() {
    await this.loginService.setDefaultUser();
  }
}
