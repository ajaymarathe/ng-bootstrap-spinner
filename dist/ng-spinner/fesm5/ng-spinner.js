import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgSpinnerComponent = /** @class */ (function () {
    function NgSpinnerComponent() {
    }
    /**
     * @return {?}
     */
    NgSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ng-spinner',
                    template: "<div [ngClass]=\"['text-' + this.color,'spinner-' + this.type]\" [ngStyle]=\"{'width': size+'rem','height':size+'rem'}\"\r\n  role=\"status\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgSpinnerComponent.ctorParameters = function () { return []; };
    NgSpinnerComponent.propDecorators = {
        type: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }]
    };
    return NgSpinnerComponent;
}());
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
var NgSpinnerModule = /** @class */ (function () {
    function NgSpinnerModule() {
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
    return NgSpinnerModule;
}());

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
