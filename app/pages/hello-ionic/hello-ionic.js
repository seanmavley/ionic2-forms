import {Page} from 'ionic-angular';
import { FORM_DIRECTIVES } from 'angular2/common'

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
  directives: [FORM_DIRECTIVES]
})
export class HelloIonicPage {
  constructor() {
    // let's two way bind
    this.myData = null;
  }

  onSubmit(formData) {
    console.log('Form submission is ', formData);
    this.myData = formData;
  }
}
