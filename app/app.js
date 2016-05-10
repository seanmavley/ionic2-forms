import { App, IonicApp, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { BasicformPage } from './pages/basic-form/basic-form';
import { ListPage } from './pages/list/list';
import { BuildformPage } from './pages/buildform/buildform';
import { FormvalidatePage } from './pages/formvalidate/formvalidate';

@App({
    templateUrl: 'build/app.html',
    config: {}
})
class MyApp {
    static get parameters() {
        return [
            [IonicApp],
            [Platform],
            [MenuController]
        ];
    }

    constructor(app, platform, menu) {
        // set up our app
        this.app = app;
        this.platform = platform;
        this.menu = menu;
        this.initializeApp();

        // set our app's pages
        this.pages = [
            { title: 'Basic Form', component: BasicformPage },
            { title: 'Form Builder', component: BuildformPage },
            { title: 'Form Validate', component: FormvalidatePage }
        ];

        // make BasicformPage the root (or first) page
        // this.rootPage = FormvalidatePage;
        // this.rootPage = BuildformPage;
        this.rootPage = BasicformPage;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }
}
