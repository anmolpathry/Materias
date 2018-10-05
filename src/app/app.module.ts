import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { CienciasPage } from '../pages/ciencias/ciencias';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { PappsPage } from '../pages/papps/papps';
import { ComPage } from '../pages/com/com';
import { RobPage } from '../pages/rob/rob';
import { PyEPage } from '../pages/py-e/py-e';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    CienciasPage,
    DibujoPage,
    PappsPage,
    ComPage,
    RobPage,
    PyEPage
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    CienciasPage,
    DibujoPage,
    PappsPage,
    ComPage,
    RobPage,
    PyEPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
