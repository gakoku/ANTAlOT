import {Component} from 'angular2/core';
import { Router } from 'angular2/router';
import {factoryComponent} from './factory/factory.component';

@Component({
    selector: 'login',
    templateUrl: 'view/login.html'
})

export class loginComponent{
	constructor(
    private _router: Router,
    ) { }
	alertMess = '';
	alertUser = '';
	alertPass = '';
	username = '';
	password = '';
	chkUser(){
		this.alertMess = '';
		if(this.username != ''){
			this.alertUser = '';
			if(this.password != ''){
				this.alertPass = '';
			}else{
				this.alertPass= 'Password is required'
			}
			if(this.username == 'admin'){
				if(this.password == 'admin'){
					this.alertMess = '';
					//this._router.navigate(['Factory']);
					window.location.assign("factory");
				}
			}else{
				if(this.username != 'admin' && this.username != '' && this.password != 'admin' && this.password != ''){
					this.alertMess = 'Username or Password INVALID';
				}
			}
		}else{
			this.alertUser = 'Username is required';
			if(this.password == ''){
				this.alertPass = 'Password is required';
			}else{
				this.alertPass = '';
			}
		}
	}
}