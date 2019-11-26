/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/core')) :
	typeof define === 'function' && define.amd ? define('@angular/material-experimental/mdc-radio', ['exports', '@angular/core', '@angular/common', '@angular/material/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.materialExperimental = global.ng.materialExperimental || {}, global.ng.materialExperimental.mdcRadio = {}),global.ng.core,global.ng.common,global.ng.material.core));
}(this, (function (exports,core,common,core$1) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatRadio = /** @class */ (function () {
    function MatRadio() {
    }
    MatRadio.decorators = [
        { type: core.Component, args: [{selector: 'mat-radio',
                    template: "",
                    styles: [""],
                    host: {
                        'class': 'mat-mdc-radio',
                    },
                    exportAs: 'matRadio',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return MatRadio;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatRadioModule = /** @class */ (function () {
    function MatRadioModule() {
    }
    MatRadioModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [core$1.MatCommonModule, common.CommonModule],
                    exports: [MatRadio, core$1.MatCommonModule],
                    declarations: [MatRadio],
                },] },
    ];
    return MatRadioModule;
}());

exports.MatRadio = MatRadio;
exports.MatRadioModule = MatRadioModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-experimental-mdc-radio.umd.js.map
