/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/core')) :
	typeof define === 'function' && define.amd ? define('@angular/material-experimental/mdc-autocomplete', ['exports', '@angular/common', '@angular/core', '@angular/material/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.materialExperimental = global.ng.materialExperimental || {}, global.ng.materialExperimental.mdcAutocomplete = {}),global.ng.common,global.ng.core,global.ng.material.core));
}(this, (function (exports,common,core,core$1) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatAutocompleteModule = /** @class */ (function () {
    function MatAutocompleteModule() {
    }
    MatAutocompleteModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [core$1.MatCommonModule, common.CommonModule],
                    exports: [core$1.MatCommonModule],
                },] },
    ];
    return MatAutocompleteModule;
}());

exports.MatAutocompleteModule = MatAutocompleteModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-experimental-mdc-autocomplete.umd.js.map
