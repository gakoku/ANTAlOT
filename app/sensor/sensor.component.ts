import {Component} from 'angular2/core';

@Component({
    template: `
    <div id="dashboard">
			<table class="uk-table">
				<tr>
					<td class='uk-width-9-10'></td>
					<td class='uk-width-1-10'>
						<button id='AddBtn' class="uk-button uk-button-large uk-button-primary " data-uk-modal="{target:'#AddBox'}" type="button">
							ADD
						</button>
					</td>
				</tr>
			</table>
			<table id='card' class="card uk-table">
				<tr>
          <td align="center" class='uk-width-2-10 uk-text-middle'>
            <img src="images/Good meter.png" alt="good meter">
          </td>
					<td class='uk-width-6-10 uk-text-middle'>
						<p class='uk-text-primary uk-text-bold uk-text-center uk-h1'>
								<a (click)="goToDetail()">Sensor 1</a>
						</p>
					</td>
					<td class='uk-width-2-10 uk-text-middle uk-text-center'>
						<div class="uk-button-group">
    						<button class="uk-button uk-button-large" data-uk-modal='{target:"#EditBox"}'>
    							EDIT
    						</button>
    						<button class="uk-button uk-button-large">
    							DELETE
    						</button>
    					</div>
					</td>
				</tr>
        <tr>
          <td align="center" class='uk-width-2-10 uk-text-middle'>
            <img src="images/Alert Meter.png" alt="alert meter">
          </td>
					<td class='uk-width-6-10 uk-text-middle'>
						<p class='uk-text-primary uk-text-bold uk-text-center uk-h1'>
								<a (click)="goToDetail()">Sensor 2</a>
						</p>
					</td>
					<td class='uk-width-2-10 uk-text-middle uk-text-center'>
						<div class="uk-button-group">
    						<button class="uk-button uk-button-large" data-uk-modal='{target:"#EditBox"}'>
    							EDIT
    						</button>
    						<button class="uk-button uk-button-large">
    							DELETE
    						</button>
    					</div>
					</td>
				</tr>
			</table>
      <div id="AddBox" class="uk-modal">
        <div class="uk-modal-dialog">
          <a class="uk-modal-close uk-close"></a>
          <div class="uk-modal-header">
            <form class="uk-form">
              <h3>
                NAME : <input type="text" placeholder="SENSOR NAME">
              </h3>
              <h3>
                IP ADDRESS : <input type="text" placeholder="IP ADDRESS">
              </h3>
              <h3>
                Descriptions :
                <textarea cols="25" rows="" placeholder="Descriptions"></textarea>
              </h3>
            </form>
          </div>
          <div class="uk-modal-footer uk-text-right">
            <button class="uk-button uk-button-large uk-button-primary " type="button">
              ADD
            </button>
          </div>
        </div>
      </div>
      <div id="EditBox" class="uk-modal">
        <div class="uk-modal-dialog">
          <a class="uk-modal-close uk-close"></a>
          <form class="uk-form">
            <h3>
              NAME : <input class='uk-h3' type="text" [(ngModel)]="senName" placeholder="SENSOR NAME">
            </h3>
            <h3>
              IP ADDRESS : <input class='uk-h3' [(ngModel)]="senIp" type="text" placeholder="IP ADDRESS">
            </h3>
            <h3>
              Descriptions :
              <textarea class='uk-h3' [(ngModel)]="senDesc" cols="25" rows="" placeholder="Descriptions"></textarea>
            </h3>
            <div class="uk-modal-footer uk-text-right">
              <button class="uk-button uk-button-large uk-button-primary " type="button">
                EDIT
              </button>
            </div>
          </form>
        </div>
    </div>
    `
})

export class sensorComponent{
  senName: String = "Temperature Meter";
  senIp: String = "169.168.1.1"
  senDesc: String = "Temperature Items";

}
