import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[inputColor]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class InputColorDirective {
    focusStateColor: string;
    blurStateColor: string;

    constructor(private _element: ElementRef, private _renderer: Renderer) {
        this.focusStateColor = '#FFF9D3';
        this.blurStateColor = '#FFFFFF';
    }

    onFocus() {
        this._element.nativeElement.style.backgroundColor = this.focusStateColor;
    }

    onBlur() {
        this._element.nativeElement.style.backgroundColor = this.blurStateColor;
    }
}