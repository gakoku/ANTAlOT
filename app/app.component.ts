import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {loginComponent} from './Login/login.component';
import {loginDetail} from './Login/login-detail';
import {factoryComponent} from '.Factory/factory.component';

@Component({
    selector: 'index',
    templateUrl: 'view/index.html',
    directives: [ROUTER_DIRECTIVES],
  	providers: [
    ROUTER_PROVIDERS,
    loginDetail
  ]
})

@RouteConfig([
  {
    path: '/Login',
    name: 'login',
    component: loginComponent,
    useAsDefault: true
  }//,
  //{
  //  path: '/Factory',
  //  name: 'factory',
  //  component: factoryComponent
  //}
])

export class AppComponent {}