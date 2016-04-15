import {Component} from 'angular2/core';

@Component({
    selector: 'index',
    templateUrl: 'view/login.html'
})

export class AppComponent {
	alertMess: String = '';
	alertUser: String = '';
	alertPass: String = '';
	username: String = '';
	password: String = '';
	chkUser(){
		if(this.username == 'admin'){
			if(this.password == 'admin'){
				this.alertMess = '';
			}else{
				if(this.password = ''){
					this.alertPass = 'Password is required';
				}else{
					this.alertMess = 'Username or Password INVALID';
				}
			}
		}else{
			if(this.username = ''){
				this.alertUser = 'Username is required';
			}else{
				this.alertMess = 'Username or Password INVALID';
			}
		}
	}
}