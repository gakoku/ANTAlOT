import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'index',
    templateUrl: 'view/login.html',
    directives: [ROUTER_DIRECTIVES],
  	providers: [
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])

export class AppComponent {
	alertMess = '';
	alertUser = '';
	alertPass = '';
	username = '';
	password = '';
	chkUser(){
		if(this.username != ''){
			this.alertUser = '';
			if(this.password != ''){
				this.alertPass = '';
			}
			if(this.username == 'admin'){
				if(this.password == 'admin'){
					this.alertMess = '';
				}
			}else{
				this.alertMess = 'Username or Password INVALID';
			}
		}else{
			this.alertUser = 'Username is required';
			if(this.alertPass == ''){
				this.alertPass = 'Password is required';
			}
		}
	}
}