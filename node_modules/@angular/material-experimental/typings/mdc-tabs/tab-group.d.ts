/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, QueryList, ChangeDetectorRef } from '@angular/core';
import { _MatTabGroupBase, MatTabsConfig } from '@angular/material/tabs';
import { MatTab } from './tab';
import { MatTabHeader } from './tab-header';
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */
export declare class MatTabGroup extends _MatTabGroupBase {
    _tabs: QueryList<MatTab>;
    _tabBodyWrapper: ElementRef;
    _tabHeader: MatTabHeader;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, defaultConfig?: MatTabsConfig, animationMode?: string);
}
