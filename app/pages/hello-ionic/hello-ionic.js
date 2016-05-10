import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
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
