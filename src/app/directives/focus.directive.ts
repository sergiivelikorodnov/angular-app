import { AfterContentInit, Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements AfterContentInit {
  constructor(private el: ElementRef) {}

  //focus field after init content
  ngAfterContentInit(): void {
    this.el.nativeElement.focus()
  }
}
