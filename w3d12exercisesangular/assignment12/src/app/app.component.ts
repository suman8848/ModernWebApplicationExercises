import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-arrcomponent [arr] = "this.arrayString"></app-arrcomponent>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayString: Array<String>;

  constructor(){
    this.arrayString=["Suman Khatiwada","Modern Web Application", "CS567", "MUM"];
  }

}
