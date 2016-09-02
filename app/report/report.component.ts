import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    template: `
    <div>
      <h1>Report Page</h1>
    </div>
    `
})

export class reportComponent{
  constructor(
  private _router: Router
  ) { }
  senName: String = "Sensor 1";
  senIp: String = "169.168.1.1"
  senDesc: String = "Temperature Sensor";

  goToMachine(){
    this._router.navigate(['Machine']);
  }

}
