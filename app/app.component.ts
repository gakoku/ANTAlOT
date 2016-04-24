import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {loginComponent} from './login.component';
import {factoryComponent} from './factory.component';

@Component({
    selector: 'index',
    templateUrl: 'view/index.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/',
    name: 'Login',
    component: loginComponent,
    useAsDefault: true
  }
])

export class AppComponent {}