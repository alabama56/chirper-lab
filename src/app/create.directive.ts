import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCreate]'
})
export class CreateDirective {

  constructor(private temp: TemplateRef<any>, private view: ViewContainerRef ) { }

  @Input() set appCreate(time: number) {
    setTimeout(() => {
      this.view.createEmbeddedView(this.temp)
    }, time)
    
  }
}
