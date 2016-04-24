import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {loginComponent} from './Login/login.component';
import {loginService} from './Login/login.service';
import {factoryComponent} from '.Factory/factory.component';

@Component({
    selector: 'index',
    templateUrl: 'view/index.html',
    directives: [ROUTER_DIRECTIVES],
  	providers: [
    ROUTER_PROVIDERS,
    loginService
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