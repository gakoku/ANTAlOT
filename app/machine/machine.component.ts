import {Component} from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
    template: `
    <div>
      <div>
        <!-- HeaderTab -->
        <table class="uk-table">
          <tr>
            <td class='uk-width-1-3 uk-text-center uk-panel-box'>
              <a (click)='goToFactory()'>
                <div  class='uk-width-1-1'>
                  <h2 class='uk-text-middle'>FACTORY</h2>
                </div>
              </a>
            </td>
            <td class='uk-width-1-3 uk-text-center uk-panel-box  uk-panel-box-primary'>
              <div>
                <h2>MACHINE</h2>
              </div>
            </td>
            <td class='uk-width-1-3 uk-text-center uk-panel-box-secondary'>
              <div>
                <h2>ANT</h2>
              </div>
            </td>
          </tr>
        </table>
      </div>
      PAGE Machine
      <a (click)='goToSensor()'>
        go to sensor
      </a>
    </div>
    `
})

export class machineComponent{
  constructor(
  private _router: Router
  ) { }

  goToSensor(){
    this._router.navigate(['Sensor']);
  }

  goToFactory(){
    this._router.navigate(['FactoryList']);
  }
}
