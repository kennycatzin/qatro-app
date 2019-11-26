/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, QueryList } from '@angular/core';
/**
 * Item inside a tab header relative to which the ink bar can be aligned.
 * @docs-private
 */
export interface MatInkBarItem {
    _foundation: MatInkBarFoundation;
    elementRef: ElementRef<HTMLElement>;
}
/**
 * Abstraction around the MDC tab indicator that manages the ink bar of a tab header.
 * @docs-private
 */
export declare class MatInkBar {
    private _items;
    /** Item to which the ink bar is aligned currently. */
    private _currentItem;
    constructor(_items: QueryList<MatInkBarItem>);
    /** Hides the ink bar. */
    hide(): void;
    /** Aligns the ink bar to a DOM node. */
    alignToElement(element: HTMLElement): void;
}
/**
 * Implementation of MDC's sliding tab indicator foundation.
 * @docs-private
 */
export declare class MatInkBarFoundation {
    private _destroyed;
    private _foundation;
    private _element;
    private _indicator;
    private _indicatorContent;
    private _adapter;
    constructor(elementRef: ElementRef<HTMLElement>, document: Document);
    /** Aligns the ink bar to the current item. */
    activate(clientRect?: ClientRect): void;
    /** Removes the ink bar from the current item. */
    deactivate(): void;
    /** Gets the ClientRect of the indicator. */
    computeContentClientRect(): ClientRect;
    /** Initializes the foundation. */
    init(): void;
    /** Destroys the foundation. */
    destroy(): void;
    private _createIndicator;
}
