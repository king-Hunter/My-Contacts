import { LoginService } from './../../../module/login/service/login.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() public message: string;
  @Input() public visibleMenu: boolean;
  @Input() public isClose: boolean;
  @Output() public closeResponder = new EventEmitter<any>();

  constructor(
    private menuController: MenuController,
    private route: Router,
    private loginService: LoginService
  ) {
  }
  ngOnInit() {
  }
  public menu() {
    if (this.visibleMenu) {
      this.menuController.open();
    }
  }
  public closeModal() {
    this.closeResponder.emit();
  }

  public logout() {
    this.loginService.closeSession();
    this.route.navigate(['/']);
  }
}
