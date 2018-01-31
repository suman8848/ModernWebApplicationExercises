import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `<h1>COUNTER</h1>
  <button (click)="increase()">Add</button>
  {{counterValue}}
  <button (click)="decrease()">Subtract</button> <br>
    {{counterMessage}}
  `,
  styles: ['h1 {color: darkgreen;}']
})
export class CounterComponent implements OnInit {

  @Input() counterValue: number = 0;
  @Input() counterMessage?: string;

  @Output() counterEmits = new EventEmitter<number>();



  constructor() {
  }

  ngOnInit() {
  }


  increase() {
    this.counterValue++;
    this.counterEmits.emit(this.counterValue);
    return false;
  }

  decrease() {
    this.counterValue--;
    this.counterEmits.emit(this.counterValue);
  }
}
