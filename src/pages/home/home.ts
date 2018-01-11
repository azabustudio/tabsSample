import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfigurationService } from '../../providers/configuration/configuration.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  environment: string = ConfigurationService.environment;

  constructor(public navCtrl: NavController) {

  }

}
