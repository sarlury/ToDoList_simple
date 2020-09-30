import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from '../serives/login.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}
  canActivate(): Observable<boolean> {
    return this.loginService.authState$.pipe(
      map(isAuth => {
        if(isAuth) {
          return true;
        } else {
          this.router.navigateByUrl('/login');
          return false;
        }
      })
    )
  }
  
}
