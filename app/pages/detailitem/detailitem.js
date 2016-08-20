import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the DetailitemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/detailitem/detailitem.html',
})
export class DetailitemPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
