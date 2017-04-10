import { Directive, HostListener, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[highlightElement]'
})

export class HighlightElementDirective {
    @Input() highlightColor: string;
    defaultColor: string;

    constructor(private el: ElementRef) {
        this.defaultColor = '#FFF9D3';
    }
    
    @HostListener('mouseenter') onMouseEnter() {
        this._highlight(this.highlightColor || this.defaultColor);
    }
    
    @HostListener('mouseleave') onMouseLeave() {
        this._highlight(null);
    }

    private _highlight(color: string) {
        console.log(this.el.nativeElement.style)
        this.el.nativeElement.style.backgroundColor = color;
    }
}