import {Component} from 'angular2/core';
@Component({
  selector: 'hello',
  templateUrl: 'app/view/hello_world.html'
})
export class HelloWorld {
  yourName: string = '';
}