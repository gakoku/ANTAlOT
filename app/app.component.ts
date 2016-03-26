import {Component} from 'angular2/core';

@Component({
    selector: 'index',
    templateUrl: 'app/view/login.html'
})

export class AppComponent { 
	alertMess = '';
	username = 'admin';
	password = '';
	
}
