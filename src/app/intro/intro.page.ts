import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  start(){
    this.storage.set('intro', 'udah liat intro');
    this.router.navigate(['/login']);
  }

}
