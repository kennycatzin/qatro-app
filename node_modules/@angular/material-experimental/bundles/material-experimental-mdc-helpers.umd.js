/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('@angular/material-experimental/mdc-helpers', ['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.materialExperimental = global.ng.materialExperimental || {}, global.ng.materialExperimental.mdcHelpers = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(mmalerba): This is needed so the `mdc-helpers` directory will be counted as a secondary
//  entry point by our gulp build system. Being a secondary entry point ensures that the Sass
//  partial is copied to the root of the release. When we switch to bazel for building our releases
//  we can delete this.
var MatMdcHelpersModule = /** @class */ (function () {
    function MatMdcHelpersModule() {
    }
    MatMdcHelpersModule.decorators = [
        { type: core.NgModule, args: [{},] },
    ];
    return MatMdcHelpersModule;
}());

exports.MatMdcHelpersModule = MatMdcHelpersModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-experimental-mdc-helpers.umd.js.map
