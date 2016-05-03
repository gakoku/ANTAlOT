import {Component} from 'angular2/core';
import { Router } from 'angular2/router';

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
			<table id='card' class="uk-table" style='border: 1px solid;'>
				<tr>
					<td class='uk-width-8-10 uk-text-middle'>
						<p class='uk-text-primary uk-text-bold uk-text-center uk-h1'>
								<a (click)="goToSensor()">Factory 1</a>
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
                NAME : <input type="text" placeholder="FACTORY NAME">
              </h3>
              <h3>
                ADDRESS : <textarea cols="25" rows="" placeholder="ADDRESS"></textarea>
              </h3>
              <h3>
                MEMBER
                <button class="uk-button uk-button-mini uk-button-success " type="button">
                  +
                </button>
              </h3>
              <h3>
                1 :
                <input type="text" placeholder="MEMBER NAME">
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
          <h1>Test</h1>
          <p>Test Dialog</p>
        </div>
    </div>
    `
})

export class factoryListComponent{
  constructor(
  private _router: Router
  ) { }

  goToSensor(){
    this._router.navigate(['Sensor']);
  }
}
