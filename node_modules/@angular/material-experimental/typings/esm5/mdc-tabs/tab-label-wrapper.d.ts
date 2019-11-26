/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, OnDestroy } from '@angular/core';
import { MatTabLabelWrapper as BaseMatTabLabelWrapper } from '@angular/material/tabs';
import { MatInkBarFoundation, MatInkBarItem } from './ink-bar';
/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */
export declare class MatTabLabelWrapper extends BaseMatTabLabelWrapper implements MatInkBarItem, OnDestroy {
    elementRef: ElementRef;
    _foundation: MatInkBarFoundation;
    constructor(elementRef: ElementRef, _document: any);
    ngOnDestroy(): void;
    /** Sets focus on the wrapper element */
    focus(): void;
}
