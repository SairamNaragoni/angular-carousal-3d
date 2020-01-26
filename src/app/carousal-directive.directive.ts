import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCarousalDirective]'
})
export class CarousalDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
