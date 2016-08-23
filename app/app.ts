import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {BasicformPage} from './pages/basicform/basicform';
import {BuildformPage} from './pages/buildform/buildform';

@Component({
  templateUrl: 'build/app.html',
  providers: [NavController],
})

export class MyApp {
  @ViewChild('nav') nav : NavController;
  private pages: any[];
  private rootPage: any;

  constructor(private platform: Platform, private menu: MenuController) {
    this.rootPage = BuildformPage;
    // this.rootPage = TabsPage;
    this.menu = menu;

    this.pages = [
        { title: 'Basic', component: BasicformPage },
        { title: 'Build Form', component: BuildformPage}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.menu.close()
    this.nav.push(page.component);
  };
}

ionicBootstrap(MyApp);
