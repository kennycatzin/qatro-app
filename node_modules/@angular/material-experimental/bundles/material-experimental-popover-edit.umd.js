/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk-experimental/popover-edit'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@angular/material-experimental/popover-edit', ['exports', '@angular/core', '@angular/cdk-experimental/popover-edit', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.materialExperimental = global.ng.materialExperimental || {}, global.ng.materialExperimental.popoverEdit = {}),global.ng.core,global.ng.cdkExperimental.popoverEdit,global.ng.common));
}(this, (function (exports,core,popoverEdit,common) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A component that attaches to a form within the edit.
 * It coordinates the form state with the table-wide edit system and handles
 * closing the edit when the form is submitted or the user clicks
 * out.
 * @template FormValue
 */
var MatEditLens = /** @class */ (function (_super) {
    __extends(MatEditLens, _super);
    function MatEditLens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatEditLens.decorators = [
        { type: core.Directive, args: [{
                    selector: 'form[matEditLens]',
                    host: {
                        'class': 'mat-edit-lens',
                    },
                    inputs: [
                        'clickOutBehavior: matEditLensClickOutBehavior',
                        'preservedFormValue: matEditLensPreservedFormValue',
                        'ignoreSubmitUnlessValid: matEditLensIgnoreSubmitUnlessValid',
                    ],
                    outputs: ['preservedFormValueChange: matEditLensPreservedFormValueChange'],
                    providers: [popoverEdit.EditRef],
                },] },
    ];
    return MatEditLens;
}(popoverEdit.CdkEditControl));
/**
 * Reverts the form to its initial or previously submitted state on click.
 * @template FormValue
 */
var MatEditRevert = /** @class */ (function (_super) {
    __extends(MatEditRevert, _super);
    function MatEditRevert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatEditRevert.decorators = [
        { type: core.Directive, args: [{
                    selector: 'button[matEditRevert]',
                    host: {
                        'type': 'button',
                    }
                },] },
    ];
    return MatEditRevert;
}(popoverEdit.CdkEditRevert));
/**
 * Closes the lens on click.
 * @template FormValue
 */
var MatEditClose = /** @class */ (function (_super) {
    __extends(MatEditClose, _super);
    function MatEditClose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatEditClose.decorators = [
        { type: core.Directive, args: [{
                    selector: 'button[matEditClose]',
                    host: {
                        'type': 'button',
                    }
                },] },
    ];
    return MatEditClose;
}(popoverEdit.CdkEditClose));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var POPOVER_EDIT_HOST_BINDINGS = {
    'tabIndex': '0',
    'class': 'mat-popover-edit-cell',
    '[attr.aria-haspopup]': 'true',
};
/** @type {?} */
var POPOVER_EDIT_INPUTS = [
    'template: matPopoverEdit',
    'context: matPopoverEditContext',
    'colspan: matPopoverEditColspan',
];
/** @type {?} */
var EDIT_PANE_CLASS = 'mat-edit-pane';
/** @type {?} */
var MAT_ROW_HOVER_CLASS = 'mat-row-hover-content';
/** @type {?} */
var MAT_ROW_HOVER_RTL_CLASS = MAT_ROW_HOVER_CLASS + '-rtl';
/** @type {?} */
var MAT_ROW_HOVER_ANIMATE_CLASS = MAT_ROW_HOVER_CLASS + '-visible';
/** @type {?} */
var MAT_ROW_HOVER_CELL_CLASS = MAT_ROW_HOVER_CLASS + '-host-cell';
/**
 * Attaches an ng-template to a cell and shows it when instructed to by the
 * EditEventDispatcher service.
 * Makes the cell focusable.
 * @template C
 */
var MatPopoverEdit = /** @class */ (function (_super) {
    __extends(MatPopoverEdit, _super);
    function MatPopoverEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    MatPopoverEdit.prototype.panelClass = /**
     * @protected
     * @return {?}
     */
    function () {
        return EDIT_PANE_CLASS;
    };
    MatPopoverEdit.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matPopoverEdit]:not([matPopoverEditTabOut])',
                    host: POPOVER_EDIT_HOST_BINDINGS,
                    inputs: POPOVER_EDIT_INPUTS,
                },] },
    ];
    return MatPopoverEdit;
}(popoverEdit.CdkPopoverEdit));
/**
 * Attaches an ng-template to a cell and shows it when instructed to by the
 * EditEventDispatcher service.
 * Makes the cell focusable.
 * @template C
 */
var MatPopoverEditTabOut = /** @class */ (function (_super) {
    __extends(MatPopoverEditTabOut, _super);
    function MatPopoverEditTabOut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    MatPopoverEditTabOut.prototype.panelClass = /**
     * @protected
     * @return {?}
     */
    function () {
        return EDIT_PANE_CLASS;
    };
    MatPopoverEditTabOut.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matPopoverEdit][matPopoverEditTabOut]',
                    host: POPOVER_EDIT_HOST_BINDINGS,
                    inputs: POPOVER_EDIT_INPUTS,
                },] },
    ];
    return MatPopoverEditTabOut;
}(popoverEdit.CdkPopoverEditTabOut));
/**
 * A structural directive that shows its contents when the table row containing
 * it is hovered or when an element in the row has focus.
 */
var MatRowHoverContent = /** @class */ (function (_super) {
    __extends(MatRowHoverContent, _super);
    function MatRowHoverContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    MatRowHoverContent.prototype.initElement = /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    function (element) {
        _super.prototype.initElement.call(this, element);
        element.classList.add(MAT_ROW_HOVER_CLASS);
    };
    /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    MatRowHoverContent.prototype.makeElementHiddenButFocusable = /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.classList.remove(MAT_ROW_HOVER_ANIMATE_CLASS);
    };
    /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    MatRowHoverContent.prototype.makeElementVisible = /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    function (element) {
        (/** @type {?} */ (popoverEdit._closest((/** @type {?} */ (this.elementRef.nativeElement)), popoverEdit._CELL_SELECTOR))).classList.add(MAT_ROW_HOVER_CELL_CLASS);
        if (this.services.directionality.value === 'rtl') {
            element.classList.add(MAT_ROW_HOVER_RTL_CLASS);
        }
        else {
            element.classList.remove(MAT_ROW_HOVER_RTL_CLASS);
        }
        element.classList.remove(MAT_ROW_HOVER_ANIMATE_CLASS);
        this.services.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            setTimeout((/**
             * @return {?}
             */
            function () {
                element.classList.add(MAT_ROW_HOVER_ANIMATE_CLASS);
            }));
        }));
    };
    MatRowHoverContent.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matRowHoverContent]',
                },] },
    ];
    return MatRowHoverContent;
}(popoverEdit.CdkRowHoverContent));
/**
 * Opens the closest edit popover to this element, whether it's associated with this exact
 * element or an ancestor element.
 */
var MatEditOpen = /** @class */ (function (_super) {
    __extends(MatEditOpen, _super);
    function MatEditOpen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatEditOpen.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matEditOpen]',
                },] },
    ];
    return MatEditOpen;
}(popoverEdit.CdkEditOpen));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EXPORTED_DECLARATIONS = [
    MatPopoverEdit,
    MatPopoverEditTabOut,
    MatRowHoverContent,
    MatEditLens,
    MatEditRevert,
    MatEditClose,
    MatEditOpen
];
var MatPopoverEditModule = /** @class */ (function () {
    function MatPopoverEditModule() {
    }
    MatPopoverEditModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        popoverEdit.CdkPopoverEditModule,
                        common.CommonModule,
                    ],
                    exports: EXPORTED_DECLARATIONS.concat([
                        popoverEdit.CdkEditable,
                    ]),
                    declarations: EXPORTED_DECLARATIONS,
                },] },
    ];
    return MatPopoverEditModule;
}());

exports.MatEditLens = MatEditLens;
exports.MatEditRevert = MatEditRevert;
exports.MatEditClose = MatEditClose;
exports.MatPopoverEditModule = MatPopoverEditModule;
exports.MatPopoverEdit = MatPopoverEdit;
exports.MatPopoverEditTabOut = MatPopoverEditTabOut;
exports.MatRowHoverContent = MatRowHoverContent;
exports.MatEditOpen = MatEditOpen;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-experimental-popover-edit.umd.js.map
