import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter [counterValue] = "this.counterValue" [counterMessage] = "this.componentCounterMessage"  (counterEmits) = "changeCounter($event)" ></app-counter> <br>
    <input type="number" (keyup)="onKey($event.target.value) "> 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counterValue = 0;
  componentCounterMessage?:string;


  changeCounter(counter:number){
    this.componentCounterMessage = "Component counter is: "+ counter;
  }

  onKey(eventValue) {
    let number = parseInt(eventValue);
    if (isNaN(number)) return false;
    else this.counterValue = eventValue
  }
}
