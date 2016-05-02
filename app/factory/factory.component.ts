import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {sensorComponent} from '../sensor/sensor.component';
import {factoryListComponent} from './factory-list';

@Component({
    template:
    `
      <div>
        <div id="header">
    				<table id="comhead">
    					<td align='center' style='width:25%;'>
    						<div id="factorylogo">
    								<img class="uk-margin-bottom" width="60%" height="60%" src="images/factory.gif" alt="FACLOGO">
    							</div>
    					</td>
    					<td style='width:50%;'>
    						<div>
    						</div>
    					</td>
    					<td style='width:25%;'>
    						<div id="userprofile" >
    							<div align='center'>
    								<pre>Welcome, NAME <a href="#">logout</a></pre>
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

export class factoryComponent{}
