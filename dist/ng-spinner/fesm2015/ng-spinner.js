import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSpinnerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-spinner',
                template: "<div [ngClass]=\"['text-' + this.color,'spinner-' + this.type]\" [ngStyle]=\"{'width': size+'rem','height':size+'rem'}\"\r\n  role=\"status\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NgSpinnerComponent.ctorParameters = () => [];
NgSpinnerComponent.propDecorators = {
    type: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgSpinnerComponent.prototype.type;
    /** @type {?} */
    NgSpinnerComponent.prototype.size;
    /** @type {?} */
    NgSpinnerComponent.prototype.color;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSpinnerModule {
}
NgSpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgSpinnerComponent],
                imports: [
                    CommonModule
                ],
                exports: [NgSpinnerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgSpinnerComponent, NgSpinnerModule };
//# sourceMappingURL=ng-spinner.js.map
