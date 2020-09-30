import { Component } from '@angular/core';
import { LoginService } from './serives/login.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: LoginService,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    if(this.platform.is('hybrid')) {
      this.storage.get('intro').then(res => {
        if(res){
          this.router.navigate(['/login'])
        }else {
          this.router.navigate(['/intro'])
        }
      })
    } else {
      this.router.navigate(['/login'])
    }
  
  // this.loginService.authState$.subscribe(state => {
  //   if(state) {
  //     this.router.navigate(['/home'])
  //   } else {
  //     this.router.navigate(['/login'])
  //   }
  // })

  }
}
