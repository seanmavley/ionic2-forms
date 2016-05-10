import {Page, NavController} from 'ionic-angular';
import { FormBuilder, Validators, AbstractControl, ControlGroup } from 'angular2/common';

@Page({
  templateUrl: 'build/pages/formvalidate/formvalidate.html',
})
export class FormvalidatePage {
  static get parameters() {
    return [[FormBuilder]];
  }

  constructor(formBuilder) {
    this.nav = nav;
    this.myData = null;
    this.myForm = formBuilder.group({
      'subject': ['', Validators.required],
      'message': ['', Validators.required]
    })

    this.subject = this.myForm.controls['subject'];
    this.message = this.myForm.controls['message']
  }

  onSubmit(formData) {
    console.log('Form submitted is ', formData);
    this.myData = formData;
  }
}