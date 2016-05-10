import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/basic-form/basic-form.html',
})

export class BasicformPage {
  constructor() {
    this.myData = null;
  }

  onSubmit(formData) {
    console.log('Form submission is ', formData);
    this.myData = formData;
  }
}
