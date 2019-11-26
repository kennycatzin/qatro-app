/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, NgModule } from '@angular/core';
import { CdkEditControl, CdkEditRevert, CdkEditClose, EditRef, _CELL_SELECTOR, _closest, CdkPopoverEdit, CdkPopoverEditTabOut, CdkRowHoverContent, CdkEditOpen, CdkEditable, CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { CommonModule } from '@angular/common';

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
class MatEditLens extends CdkEditControl {
}
MatEditLens.decorators = [
    { type: Directive, args: [{
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
                providers: [EditRef],
            },] },
];
/**
 * Reverts the form to its initial or previously submitted state on click.
 * @template FormValue
 */
class MatEditRevert extends CdkEditRevert {
}
MatEditRevert.decorators = [
    { type: Directive, args: [{
                selector: 'button[matEditRevert]',
                host: {
                    'type': 'button',
                }
            },] },
];
/**
 * Closes the lens on click.
 * @template FormValue
 */
class MatEditClose extends CdkEditClose {
}
MatEditClose.decorators = [
    { type: Directive, args: [{
                selector: 'button[matEditClose]',
                host: {
                    'type': 'button',
                }
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const POPOVER_EDIT_HOST_BINDINGS = {
    'tabIndex': '0',
    'class': 'mat-popover-edit-cell',
    '[attr.aria-haspopup]': 'true',
};
/** @type {?} */
const POPOVER_EDIT_INPUTS = [
    'template: matPopoverEdit',
    'context: matPopoverEditContext',
    'colspan: matPopoverEditColspan',
];
/** @type {?} */
const EDIT_PANE_CLASS = 'mat-edit-pane';
/** @type {?} */
const MAT_ROW_HOVER_CLASS = 'mat-row-hover-content';
/** @type {?} */
const MAT_ROW_HOVER_RTL_CLASS = MAT_ROW_HOVER_CLASS + '-rtl';
/** @type {?} */
const MAT_ROW_HOVER_ANIMATE_CLASS = MAT_ROW_HOVER_CLASS + '-visible';
/** @type {?} */
const MAT_ROW_HOVER_CELL_CLASS = MAT_ROW_HOVER_CLASS + '-host-cell';
/**
 * Attaches an ng-template to a cell and shows it when instructed to by the
 * EditEventDispatcher service.
 * Makes the cell focusable.
 * @template C
 */
class MatPopoverEdit extends CdkPopoverEdit {
    /**
     * @protected
     * @return {?}
     */
    panelClass() {
        return EDIT_PANE_CLASS;
    }
}
MatPopoverEdit.decorators = [
    { type: Directive, args: [{
                selector: '[matPopoverEdit]:not([matPopoverEditTabOut])',
                host: POPOVER_EDIT_HOST_BINDINGS,
                inputs: POPOVER_EDIT_INPUTS,
            },] },
];
/**
 * Attaches an ng-template to a cell and shows it when instructed to by the
 * EditEventDispatcher service.
 * Makes the cell focusable.
 * @template C
 */
class MatPopoverEditTabOut extends CdkPopoverEditTabOut {
    /**
     * @protected
     * @return {?}
     */
    panelClass() {
        return EDIT_PANE_CLASS;
    }
}
MatPopoverEditTabOut.decorators = [
    { type: Directive, args: [{
                selector: '[matPopoverEdit][matPopoverEditTabOut]',
                host: POPOVER_EDIT_HOST_BINDINGS,
                inputs: POPOVER_EDIT_INPUTS,
            },] },
];
/**
 * A structural directive that shows its contents when the table row containing
 * it is hovered or when an element in the row has focus.
 */
class MatRowHoverContent extends CdkRowHoverContent {
    /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    initElement(element) {
        super.initElement(element);
        element.classList.add(MAT_ROW_HOVER_CLASS);
    }
    /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    makeElementHiddenButFocusable(element) {
        element.classList.remove(MAT_ROW_HOVER_ANIMATE_CLASS);
    }
    /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    makeElementVisible(element) {
        (/** @type {?} */ (_closest((/** @type {?} */ (this.elementRef.nativeElement)), _CELL_SELECTOR))).classList.add(MAT_ROW_HOVER_CELL_CLASS);
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
        () => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                element.classList.add(MAT_ROW_HOVER_ANIMATE_CLASS);
            }));
        }));
    }
}
MatRowHoverContent.decorators = [
    { type: Directive, args: [{
                selector: '[matRowHoverContent]',
            },] },
];
/**
 * Opens the closest edit popover to this element, whether it's associated with this exact
 * element or an ancestor element.
 */
class MatEditOpen extends CdkEditOpen {
}
MatEditOpen.decorators = [
    { type: Directive, args: [{
                selector: '[matEditOpen]',
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    MatPopoverEdit,
    MatPopoverEditTabOut,
    MatRowHoverContent,
    MatEditLens,
    MatEditRevert,
    MatEditClose,
    MatEditOpen
];
class MatPopoverEditModule {
}
MatPopoverEditModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CdkPopoverEditModule,
                    CommonModule,
                ],
                exports: [
                    ...EXPORTED_DECLARATIONS,
                    CdkEditable,
                ],
                declarations: EXPORTED_DECLARATIONS,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatEditLens, MatEditRevert, MatEditClose, MatPopoverEditModule, MatPopoverEdit, MatPopoverEditTabOut, MatRowHoverContent, MatEditOpen };
//# sourceMappingURL=popover-edit.js.map
