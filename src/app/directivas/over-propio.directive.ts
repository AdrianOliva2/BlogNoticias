import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[overPropio]'
})
export class OverPropioDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onOver() {
    this.el.nativeElement.classList.add('bg-danger');
  }

  @HostListener('mouseleave') onOut() {
    this.el.nativeElement.classList.remove('bg-danger');
  }

}
