import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginService } from '../serives/login.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('taskInpit') input;

  taskList = [];
  taskName: any;

  constructor(
    public alertCtrl: AlertController,
    private loginService: LoginService
  ) {}

  ionViewDidLoad(){
   setTimeout(() => {
     this.input.setFocus();
   }, 350);
  }

  addTask() {
    const task = this.taskName;
    this.taskList.push(task);
    this.taskName = '';
  }

  delete(index) {
    this.taskList.splice(index, 1);
  }

  async update(index) {
    const alert = await this.alertCtrl.create({
      message: 'Update Task?',
      inputs: [{
        name: 'editTask', placeholder: 'Task'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
    {
      text: 'Update',
      handler: data => {
        this.taskList[index] = data.editTask;
      }
    }]
    });
    alert.present();
  }


  logout() {
  this.loginService.logout();    
  }

}
