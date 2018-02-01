import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrcomponent',
  template: `<h1>Array of String from parent component on un-ordered list</h1>
  <div>
    <ul>
      <li *ngFor= "let stringArray of arr"> {{stringArray}}</li>
    </ul>
  </div>
    <h1>Custom directive "upper" for uppercase</h1>
    <div>
      <ul>
        <li *ngFor="let stringArray of arr" appUpper>{{stringArray}} </li>
      </ul>
    </div>
    <h1>Custom directive myvisibility</h1>
    <div>
      <ul appMyvisibility [visible]="this.visible">
        <li *ngFor = "let stringArray of arr" >{{stringArray}}</li>
      </ul>
      <h1>Custom directive for changing colors</h1>
      <ul>
        <li *ngFor="let stringArray of arr" (appMycolor) = "colorChange($event)">{{stringArray}}</li>
      </ul>
    </div>
    {{changeColor}}
  `,
  styleUrls: ['./arrcomponent.component.css'],
  inputs:['arr']

})
export class ArrcomponentComponent implements OnInit {

  visible:Boolean = true;
  changeColor?: string;

  constructor() { }

  ngOnInit() {
  }

  colorChange(color: string){
    this.changeColor = "selected color: "+ color;
  }

}
