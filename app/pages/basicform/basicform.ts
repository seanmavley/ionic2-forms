import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/basicform/basicform.html',
})
export class BasicformPage {
  private myData: any;
  constructor(private navCtrl: NavController) {  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.myData = formData.value;
    }
  }

}
