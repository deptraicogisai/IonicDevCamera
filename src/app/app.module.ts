import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {File} from '@ionic-native/file';
import {Transfer} from '@ionic-native/transfer';
import {FilePath} from '@ionic-native/file-path';
import {Camera} from '@ionic-native/camera';
import {MediaCapture} from '@ionic-native/media-capture';
import {Brightness} from "@ionic-native/brightness";
import {Facebook} from "@ionic-native/facebook";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Brightness ,
    File,
    MediaCapture,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
