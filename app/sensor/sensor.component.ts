import {Component} from 'angular2/core';

@Component({
    template: `
    <h1>TEST</h1><button (click)="goback()">Back</button>
    `
})

export class sensorComponent{
	goback(){
		window.history.back();
	}
}
