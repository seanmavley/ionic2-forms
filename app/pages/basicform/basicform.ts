import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FORM_DIRECTIVES} from '@angular/forms';

@Component({
  templateUrl: 'build/pages/basicform/basicform.html',
  directives: [FORM_DIRECTIVES]
})
export class BasicformPage {
  private myData: any;
  constructor(private navCtrl: NavController) {

  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.myData = formData.value;
    }
  }

}
