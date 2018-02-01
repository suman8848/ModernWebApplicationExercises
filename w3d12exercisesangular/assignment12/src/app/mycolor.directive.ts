import {Directive, ElementRef, EventEmitter, HostListener, Output, Renderer} from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  private r:Renderer;
  private e: ElementRef;

  private color: Array<string> = ["red","green","blue","purple","cyan","maroon"];
  colorSelection:string;

  @Output() changeColor = new EventEmitter<string>();


  constructor(e:ElementRef, r:Renderer) {
    this.e = e;
    this.r = r;
  }

  @HostListener('click')
  eventChangeColor():void {
    this.colorSelection= this.color[Math.floor(Math.random()*this.color.length)];
    this.r.setElementStyle(this.e.nativeElement,'color',this.colorSelection);
    this.changeColor.emit(this.colorSelection);
  }



}
