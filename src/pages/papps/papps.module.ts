import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PappsPage } from './papps';

@NgModule({
  declarations: [
    PappsPage,
  ],
  imports: [
    IonicPageModule.forChild(PappsPage),
  ],
})
export class PappsPageModule {}
