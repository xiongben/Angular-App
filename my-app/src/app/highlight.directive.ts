import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

  constructor(public el: ElementRef) {
    // el.nativeElement.style.background = 'blue';
   }

   @HostListener('mouseenter') onMouseEnter() {
     console.log(this.highlightColor)
      this.highlight(this.highlightColor || 'blue');
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
   }

   highlight(color: string) {
     this.el.nativeElement.style.color = color;
   }

}
