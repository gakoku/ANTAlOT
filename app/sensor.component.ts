import {Component} from 'angular2/core';

@Component({
    selector: 'sensor',
    template: '<h1>TEST</h1><button (click)="goback()">Back</button>'
    //templateUrl: 'view/sensor.html'
})

export class sensorComponent{
	goback(){
		window.history.back();
	}
}