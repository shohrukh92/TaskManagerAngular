import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[inputColor]'    
})

export class InputColorDirective {
    focusStateColor: string;

    constructor(private _element: ElementRef, private _renderer: Renderer) {
        this.focusStateColor = '#FFF9D3';        
    }

    @HostListener('focus') onFocus() {
        this._setBackgroundColor(this.focusStateColor);
    }

    @HostListener('blur') onBlur() {
        this._setBackgroundColor(null);
    }

    private _setBackgroundColor(color) {
        this._element.nativeElement.style.backgroundColor = color;
    }
}