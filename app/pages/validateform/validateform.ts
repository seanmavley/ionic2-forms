import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'build/pages/validateform/validateform.html',
})
export class ValidateformPage {
  myForm: FormGroup;
  private myData: any;
  constructor(private navCtrl: NavController, private builder: FormBuilder) {
    this.myForm = builder.group({
      'subject': ['', Validators.required],
      'message': ['', Validators.required]
      // 'subject': '',
      // 'message': ''
    })
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log('Form data is ', formData.value);
        this.myData = formData.value;
      }
  }

}
