import {Component} from 'angular2/core';

@Component({
    selector: 'index',
    templateUrl: 'view/login.html'
})

export class AppComponent {
	alertMess: String = '';
	username: String;
	password: String;
	chkUser(){
		if(this.username == 'admin'){
			if(this.password == 'admin'){
				this.alertMess = '';
			}else{
				this.alertMess = 'Username or Password Invalid';
			}
		}else{
			this.alertMess = 'Username or Password INVALID';
		}
	}
}