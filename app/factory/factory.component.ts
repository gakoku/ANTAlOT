import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {sensorComponent} from '../sensor/sensor.component';
import {factoryListComponent} from './factory-list';

@Component({
    template:
    `
      <div>
        <div id="header">
    				<table class="uk-width-1-1">
    					<td align='center' style='width:25%;'>
    						<div>
    								<img class="uk-margin-bottom" width="100px" height="100px" src="images/logo.png" alt="FACLOGO">
    							</div>
    					</td>
    					<td style='width:50%;'>
    						<div>
    						</div>
    					</td>
    					<td style='width:25%;'>
    						<div>
    							<div align='center'>
    								<pre>Welcome, admin <a href="#">logout</a></pre>
    							</div>
    						</div>
    					</td>
    				</table>
    		</div>
          <router-outlet></router-outlet>
      </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
  path: '/',
  name: 'FactoryList',
  component: factoryListComponent,
  useAsDefault: true
  },
  {path: '/sensor',name: 'Sensor',component: sensorComponent}
])

export class factoryComponent{
  constructor(
    private _router: Router
  ) {}
}
