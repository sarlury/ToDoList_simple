import { Component, OnInit } from '@angular/core';
import { LoginService } from '../serives/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.logIn();
  }

}
