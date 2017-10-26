import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor( private el: ElementRef, private render: Renderer) { 
    render.setElementStyle(el.nativeElement, "backgroundColor", "#775877");
  }

}
