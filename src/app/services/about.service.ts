import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url = "http://localhost/3000";
  activeUser$ = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  loadData(): Observable<Users> {
    return this.http.get<Users>("../../assets/data/data.json").pipe(
      tap(res => {
        console.log("Data received");
        if(res.activation == 1){
          this.activeUser$.next(false);
          alert("User invalid")
        } else {
          this.activeUser$.next(true);
        }
      })
    )
  }
}
