import {Component} from 'angular2/core';
import { Router } from 'angular2/router';
import {loginService} from './Login/login.service';

@Component({
    selector: 'login',
    templateUrl: 'view/login.html'
})

export class loginComponent{
    private _router: Router;
    private _loginDetail: LoginDetail;
}