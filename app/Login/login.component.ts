import {Component} from 'angular2/core';
import { RouteConfig, RouteOutlet } from 'angular2/router';
import {factoryComponent} from './Factory/factory.component';

@Component({
    selector: 'login',
    templateUrl: 'view/login.html',
    directives: [RouterOutlet]
})

export class loginComponent {
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
					//this._router.navigate();
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