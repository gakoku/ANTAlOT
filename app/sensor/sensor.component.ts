import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    template: `
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
          <td class='uk-width-1-3 uk-text-center uk-panel-box-secondary'>
            <a (click)='goToMachine()' class='uk-text-middle'>
              <div>
                <h2>MACHINE</h2>
              </div>
            </a>
          </td>
          <td class='uk-width-1-3 uk-text-center uk-panel-box uk-panel-box-primary'>
            <div>
              <h2>ANT</h2>
            </div>
          </td>
        </tr>
      </table>
    </div>
    `
})

export class sensorComponent{
  constructor(
  private _router: Router
  ) { }
  senName: String = "Sensor 1";
  senIp: String = "169.168.1.1"
  senDesc: String = "Temperature Sensor";

  goToMachine(){
    this._router.navigate(['Machine']);
  }

  goToFactory(){
    this._router.navigate(['FactoryList']);
  }
}
