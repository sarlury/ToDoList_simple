import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  profile: any;

  constructor(
    private aboutServices: AboutService
  ) { }

  ngOnInit() {
    this.aboutServices.loadData().subscribe(res => {
      this.profile = res;
    })
  }

}
