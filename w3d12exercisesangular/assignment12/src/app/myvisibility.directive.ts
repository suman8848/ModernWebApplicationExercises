import {Directive, ElementRef, HostBinding, Input, Renderer, OnInit} from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'

})
export class MyvisibilityDirective {

  @HostBinding('style.display') display;
  @Input() visible:boolean;

  // constructor(){}

  ngOnInit() { // reached after all bound properties are initilized
    if(this.visible) {
      this.display = 'block';
    }else {
      this.display = 'none';
    }
  }
}
