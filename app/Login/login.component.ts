import {Component} from 'angular2/core';
import { Router } from 'angular2/router';
import {loginDetail} from './Login/login-detail'

@Component({
    selector: 'login',
    templateUrl: 'view/login.html'
})

export class loginComponent implements OnInit  {
	constructor(
    private _router: Router,
    private _loginDetail: LoginDetail)
    ){}
}