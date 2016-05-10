import { Page } from 'ionic-angular';
import { FormBuilder, ControlGroup } from 'angular2/common';

@Page({
  templateUrl: 'build/pages/buildform/buildform.html',
})

export class BuildformPage {
  static get parameters() {
    return [[FormBuilder]];
  }

  constructor(formBuilder) {
    this.nav = nav;
    this.myData = null;
    this.myForm = formBuilder.group({
      'subject': '',
      'message': ''
    })
  }

  onSubmit(formData) {
    console.log('Form submitted is ', formData);
    this.myData = formData;
  }
}
