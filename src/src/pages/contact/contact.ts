import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  platformList: string = '';
  isApp: boolean = true;
  
  constructor(public navCtrl: NavController, public platform: Platform) {
	  let platforms = this.platform.platforms();
	  
	if(this.platform.is('core') || this.platform.is('mobileweb')) {
		this.isApp = false;
	} else {
		this.isApp = true;
	}
	
	if (this.isApp) {
		this.myLabel = 'This is a mobile';
	}
	else {
		this.myLabel = 'This is a desktop';
	}
  }
}
