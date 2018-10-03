import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HistoriaPage} from '../historia/historia';
import { CienciasPage } from '../ciencias/ciencias';
import { DibujoPage } from '../dibujo/dibujo';
import { PappsPage } from '../papps/papps';
import { ComPage } from '../com/com';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  ciencias = CienciasPage;
  dibujo = DibujoPage;
  apps = PappsPage;
  comunicacion= ComPage;

  constructor(public navCtrl: NavController) {

  }

  clickHistoria(){
    this.navCtrl.push(this.historia);
  }

  clickCS(){
    this.navCtrl.push(this.ciencias);
  }

  clickDib(){
    this.navCtrl.push(this.dibujo);
  }

  clickApp(){
    this.navCtrl.push(this.apps);
  }

  clickCOM(){
    this.navCtrl.push(this.comunicacion);
  }

}
