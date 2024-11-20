import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  @Input('appHighlightOnFocus') highlightColour = '';
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('focus') onFocus() {
    this.setHighlight(this.highlightColour || 'yellow');
  }

  private setHighlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'outline', color ? `2px solid ${color}` : '');
  }

}
