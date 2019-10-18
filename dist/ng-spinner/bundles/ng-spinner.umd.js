(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-spinner', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-spinner'] = {}, global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'app-ng-spinner',
                        template: "<div [ngClass]=\"['text-' + this.color,'spinner-' + this.type]\" [ngStyle]=\"{'width': size+'rem','height':size+'rem'}\"\r\n  role=\"status\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgSpinnerComponent.ctorParameters = function () { return []; };
        NgSpinnerComponent.propDecorators = {
            type: [{ type: core.Input }],
            size: [{ type: core.Input }],
            color: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [NgSpinnerComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [NgSpinnerComponent]
                    },] }
        ];
        return NgSpinnerModule;
    }());

    exports.NgSpinnerComponent = NgSpinnerComponent;
    exports.NgSpinnerModule = NgSpinnerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-spinner.umd.js.map
