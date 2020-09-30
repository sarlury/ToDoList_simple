import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authState$ = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private router: Router,
    private platform: Platform
  ) { 
    this.platform.ready().then(() => {
      this.isLogin();
    })
  }

  isLogin() {
    this.storage.get('login').then(res => {
      if(res) {
        this.authState$.next(true);
      }
    });
  }

  logIn(){
    this.storage.set('login', 'udah login').then(() => {
      this.router.navigate(['/home']);
      this.authState$.next(true);
    })
  }

  logout() {
    this.storage.remove('login').then(() => {
      this.router.navigate(['/login']);
      this.authState$.next(false);
    })
  }

  isAuth() {
    this.authState$.value;
  }
  
}
