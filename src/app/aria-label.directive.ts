import $ from 'jquery';

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appAriaLabel]'
})
export class AriaLabelDirective implements OnInit {
    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('appAriaLabel') public ariaLabelValue: string;
    @Input() public ariaLabelTo: string = 'input';

    constructor(private readonly _el: ElementRef) { }

    public ngOnInit(): void {
        const htmlEl: JQuery<HTMLElement> = this.ariaLabelTo != null
            ? $(this._el.nativeElement).find(this.ariaLabelTo)
            : $(this._el.nativeElement);

        if (htmlEl) {
            htmlEl.attr('aria-label', this.ariaLabelValue);
        }
    }
}
