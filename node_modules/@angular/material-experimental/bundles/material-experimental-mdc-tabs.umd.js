/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/tabs'), require('@angular/cdk/portal'), require('@angular/cdk/bidi'), require('@material/tab-indicator'), require('@angular/common'), require('@angular/cdk/scrolling'), require('@angular/cdk/platform'), require('@angular/platform-browser/animations'), require('@angular/material/core'), require('@angular/cdk/a11y'), require('@angular/cdk/observers')) :
	typeof define === 'function' && define.amd ? define('@angular/material-experimental/mdc-tabs', ['exports', '@angular/core', '@angular/material/tabs', '@angular/cdk/portal', '@angular/cdk/bidi', '@material/tab-indicator', '@angular/common', '@angular/cdk/scrolling', '@angular/cdk/platform', '@angular/platform-browser/animations', '@angular/material/core', '@angular/cdk/a11y', '@angular/cdk/observers'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.materialExperimental = global.ng.materialExperimental || {}, global.ng.materialExperimental.mdcTabs = {}),global.ng.core,global.ng.material.tabs,global.ng.cdk.portal,global.ng.cdk.bidi,global.mdc.tabIndicator,global.ng.common,global.ng.cdk.scrolling,global.ng.cdk.platform,global.ng.platformBrowser.animations,global.ng.material.core,global.ng.cdk.a11y,global.ng.cdk.observers));
}(this, (function (exports,core,tabs,portal,bidi,tabIndicator,common,scrolling,platform,animations,core$1,a11y,observers) { 'use strict';

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
 * The portal host directive for the contents of the tab.
 * \@docs-private
 */
var MatTabBodyPortal$1 = /** @class */ (function (_super) {
    __extends(MatTabBodyPortal$$1, _super);
    function MatTabBodyPortal$$1(componentFactoryResolver, viewContainerRef, host) {
        return _super.call(this, componentFactoryResolver, viewContainerRef, host) || this;
    }
    MatTabBodyPortal$$1.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matTabBodyHost]'
                },] },
    ];
    /** @nocollapse */
    MatTabBodyPortal$$1.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ViewContainerRef },
        { type: MatTabBody, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                         * @return {?}
                         */
                        function () { return MatTabBody; })),] }] }
    ]; };
    return MatTabBodyPortal$$1;
}(tabs.MatTabBodyPortal));
/**
 * Wrapper for the contents of a tab.
 * \@docs-private
 */
var MatTabBody = /** @class */ (function (_super) {
    __extends(MatTabBody, _super);
    function MatTabBody(elementRef, dir, changeDetectorRef) {
        return _super.call(this, elementRef, dir, changeDetectorRef) || this;
    }
    MatTabBody.decorators = [
        { type: core.Component, args: [{selector: 'mat-tab-body',
                    template: "<div class=\"mat-mdc-tab-body-content\" #content [@translateTab]=\"{ value: _position, params: {animationDuration: animationDuration} }\" (@translateTab.start)=\"_onTranslateTabStarted($event)\" (@translateTab.done)=\"_translateTabComplete.next($event)\"><ng-template matTabBodyHost></ng-template></div>",
                    styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}"],
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    animations: [tabs.matTabsAnimations.translateTab],
                    host: {
                        'class': 'mat-mdc-tab-body',
                    },
                },] },
    ];
    /** @nocollapse */
    MatTabBody.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
        { type: core.ChangeDetectorRef }
    ]; };
    MatTabBody.propDecorators = {
        _portalHost: [{ type: core.ViewChild, args: [portal.PortalHostDirective, { static: false },] }]
    };
    return MatTabBody;
}(tabs._MatTabBodyBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Decorates the `ng-template` tags and reads out the template from it.
 */
var MatTabContent$1 = /** @class */ (function (_super) {
    __extends(MatTabContent$$1, _super);
    function MatTabContent$$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatTabContent$$1.decorators = [
        { type: core.Directive, args: [{ selector: '[matTabContent]' },] },
    ];
    return MatTabContent$$1;
}(tabs.MatTabContent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to flag tab labels for use with the portal directive
 */
var MatTabLabel$1 = /** @class */ (function (_super) {
    __extends(MatTabLabel$$1, _super);
    function MatTabLabel$$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatTabLabel$$1.decorators = [
        { type: core.Directive, args: [{
                    selector: '[mat-tab-label], [matTabLabel]',
                },] },
    ];
    return MatTabLabel$$1;
}(tabs.MatTabLabel));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Abstraction around the MDC tab indicator that manages the ink bar of a tab header.
 * \@docs-private
 */
var   /**
 * Abstraction around the MDC tab indicator that manages the ink bar of a tab header.
 * \@docs-private
 */
MatInkBar = /** @class */ (function () {
    function MatInkBar(_items) {
        this._items = _items;
    }
    /** Hides the ink bar. */
    /**
     * Hides the ink bar.
     * @return {?}
     */
    MatInkBar.prototype.hide = /**
     * Hides the ink bar.
     * @return {?}
     */
    function () {
        this._items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._foundation.deactivate(); }));
    };
    /** Aligns the ink bar to a DOM node. */
    /**
     * Aligns the ink bar to a DOM node.
     * @param {?} element
     * @return {?}
     */
    MatInkBar.prototype.alignToElement = /**
     * Aligns the ink bar to a DOM node.
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var correspondingItem = this._items.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.elementRef.nativeElement === element; }));
        /** @type {?} */
        var currentItem = this._currentItem;
        if (currentItem) {
            currentItem._foundation.deactivate();
        }
        if (correspondingItem) {
            /** @type {?} */
            var clientRect = currentItem ?
                currentItem._foundation.computeContentClientRect() : undefined;
            // The MDC indicator won't animate unless we give it the `ClientRect` of the previous item.
            correspondingItem._foundation.activate(clientRect);
            this._currentItem = correspondingItem;
        }
    };
    return MatInkBar;
}());
/**
 * Implementation of MDC's sliding tab indicator foundation.
 * \@docs-private
 */
var /**
 * Implementation of MDC's sliding tab indicator foundation.
 * \@docs-private
 */
MatInkBarFoundation = /** @class */ (function () {
    function MatInkBarFoundation(elementRef, document) {
        var _this = this;
        this._adapter = {
            addClass: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) {
                if (!_this._destroyed) {
                    _this._element.classList.add(className);
                }
            }),
            removeClass: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) {
                if (!_this._destroyed) {
                    _this._element.classList.remove(className);
                }
            }),
            setContentStyleProperty: (/**
             * @param {?} propName
             * @param {?} value
             * @return {?}
             */
            function (propName, value) {
                _this._indicatorContent.style.setProperty(propName, value);
            }),
            computeContentClientRect: (/**
             * @return {?}
             */
            function () {
                // `getBoundingClientRect` isn't available on the server.
                return _this._destroyed || !_this._indicatorContent.getBoundingClientRect ? {
                    width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0
                } : _this._indicatorContent.getBoundingClientRect();
            })
        };
        this._element = elementRef.nativeElement;
        this._foundation = new tabIndicator.MDCSlidingTabIndicatorFoundation(this._adapter);
        this._createIndicator(document);
    }
    /** Aligns the ink bar to the current item. */
    /**
     * Aligns the ink bar to the current item.
     * @param {?=} clientRect
     * @return {?}
     */
    MatInkBarFoundation.prototype.activate = /**
     * Aligns the ink bar to the current item.
     * @param {?=} clientRect
     * @return {?}
     */
    function (clientRect) {
        this._foundation.activate(clientRect);
    };
    /** Removes the ink bar from the current item. */
    /**
     * Removes the ink bar from the current item.
     * @return {?}
     */
    MatInkBarFoundation.prototype.deactivate = /**
     * Removes the ink bar from the current item.
     * @return {?}
     */
    function () {
        this._foundation.deactivate();
    };
    /** Gets the ClientRect of the indicator. */
    /**
     * Gets the ClientRect of the indicator.
     * @return {?}
     */
    MatInkBarFoundation.prototype.computeContentClientRect = /**
     * Gets the ClientRect of the indicator.
     * @return {?}
     */
    function () {
        return this._foundation.computeContentClientRect();
    };
    /** Initializes the foundation. */
    /**
     * Initializes the foundation.
     * @return {?}
     */
    MatInkBarFoundation.prototype.init = /**
     * Initializes the foundation.
     * @return {?}
     */
    function () {
        this._foundation.init();
    };
    /** Destroys the foundation. */
    /**
     * Destroys the foundation.
     * @return {?}
     */
    MatInkBarFoundation.prototype.destroy = /**
     * Destroys the foundation.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var indicator = this._indicator;
        if (indicator.parentNode) {
            indicator.parentNode.removeChild(indicator);
        }
        this._element = this._indicator = this._indicatorContent = (/** @type {?} */ (null));
        this._foundation.destroy();
        this._destroyed = true;
    };
    /**
     * @private
     * @param {?} document
     * @return {?}
     */
    MatInkBarFoundation.prototype._createIndicator = /**
     * @private
     * @param {?} document
     * @return {?}
     */
    function (document) {
        if (!this._indicator) {
            /** @type {?} */
            var indicator = this._indicator = document.createElement('span');
            /** @type {?} */
            var content = this._indicatorContent = document.createElement('span');
            indicator.className = 'mdc-tab-indicator';
            content.className = 'mdc-tab-indicator__content mdc-tab-indicator__content--underline';
            indicator.appendChild(content);
            this._element.appendChild(indicator);
        }
    };
    return MatInkBarFoundation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used in the `mat-tab-group` view to display tab labels.
 * \@docs-private
 */
var MatTabLabelWrapper$1 = /** @class */ (function (_super) {
    __extends(MatTabLabelWrapper$$1, _super);
    function MatTabLabelWrapper$$1(elementRef, _document) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        _this._foundation = new MatInkBarFoundation(elementRef, _document);
        _this._foundation.init();
        return _this;
    }
    /**
     * @return {?}
     */
    MatTabLabelWrapper$$1.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._foundation.destroy();
    };
    /** Sets focus on the wrapper element */
    /**
     * Sets focus on the wrapper element
     * @return {?}
     */
    MatTabLabelWrapper$$1.prototype.focus = /**
     * Sets focus on the wrapper element
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
    };
    MatTabLabelWrapper$$1.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matTabLabelWrapper]',
                    inputs: ['disabled'],
                    host: {
                        '[class.mat-mdc-tab-disabled]': 'disabled',
                        '[attr.aria-disabled]': '!!disabled',
                    }
                },] },
    ];
    /** @nocollapse */
    MatTabLabelWrapper$$1.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };
    return MatTabLabelWrapper$$1;
}(tabs.MatTabLabelWrapper));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTab$1 = /** @class */ (function (_super) {
    __extends(MatTab$$1, _super);
    function MatTab$$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatTab$$1.decorators = [
        { type: core.Component, args: [{selector: 'mat-tab',
                    // Note that usually we'd go through a bit more trouble and set up another class so that
                    // the inlined template of `MatTab` isn't duplicated, however the template is small enough
                    // that creating the extra class will generate more code than just duplicating the template.
                    template: "<ng-template><ng-content></ng-content></ng-template>",
                    inputs: ['disabled'],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    exportAs: 'matTab',
                },] },
    ];
    MatTab$$1.propDecorators = {
        _explicitContent: [{ type: core.ContentChild, args: [MatTabContent$1, { read: core.TemplateRef, static: true },] }],
        templateLabel: [{ type: core.ContentChild, args: [MatTabLabel$1, { static: false },] }]
    };
    return MatTab$$1;
}(tabs.MatTab));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * \@docs-private
 */
var MatTabHeader = /** @class */ (function (_super) {
    __extends(MatTabHeader, _super);
    function MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform$$1, 
    // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
    animationMode) {
        return _super.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform$$1, animationMode) || this;
    }
    /**
     * @return {?}
     */
    MatTabHeader.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._inkBar = new MatInkBar(this._items);
        _super.prototype.ngAfterContentInit.call(this);
    };
    MatTabHeader.decorators = [
        { type: core.Component, args: [{selector: 'mat-tab-header',
                    template: "<div class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before\" #previousPaginator aria-hidden=\"true\" mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\" [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollBefore\" (click)=\"_handlePaginatorClick('before')\" (mousedown)=\"_handlePaginatorPress('before')\" (touchend)=\"_stopInterval()\"><div class=\"mat-mdc-tab-header-pagination-chevron\"></div></div><div class=\"mat-mdc-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\"><div #tabList class=\"mat-mdc-tab-list\" [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\" role=\"tablist\" (cdkObserveContent)=\"_onContentChanges()\"><div class=\"mat-mdc-tab-labels\"><ng-content></ng-content></div></div></div><div class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after\" #nextPaginator aria-hidden=\"true\" mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\" [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollAfter\" (mousedown)=\"_handlePaginatorPress('after')\" (click)=\"_handlePaginatorClick('after')\" (touchend)=\"_stopInterval()\"><div class=\"mat-mdc-tab-header-pagination-chevron\"></div></div>",
                    styles: [".mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(.4,0,.2,1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:.1s}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-mdc-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-pagination-after,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before{padding-right:4px}.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;opacity:.4;pointer-events:none}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1)}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;opacity:.4}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center] .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-mdc-tab-labels{justify-content:flex-end}"],
                    inputs: ['selectedIndex'],
                    outputs: ['selectFocusedIndex', 'indexFocused'],
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        'class': 'mat-mdc-tab-header',
                        '[class.mat-mdc-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                        '[class.mat-mdc-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
                    },
                },] },
    ];
    /** @nocollapse */
    MatTabHeader.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: scrolling.ViewportRuler },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
        { type: core.NgZone },
        { type: platform.Platform },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
    ]; };
    MatTabHeader.propDecorators = {
        _items: [{ type: core.ContentChildren, args: [MatTabLabelWrapper$1,] }],
        _tabListContainer: [{ type: core.ViewChild, args: ['tabListContainer', { static: true },] }],
        _tabList: [{ type: core.ViewChild, args: ['tabList', { static: true },] }],
        _nextPaginator: [{ type: core.ViewChild, args: ['nextPaginator', { static: false },] }],
        _previousPaginator: [{ type: core.ViewChild, args: ['previousPaginator', { static: false },] }]
    };
    return MatTabHeader;
}(tabs._MatTabHeaderBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */
var MatTabGroup = /** @class */ (function (_super) {
    __extends(MatTabGroup, _super);
    function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
        return _super.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode) || this;
    }
    MatTabGroup.decorators = [
        { type: core.Component, args: [{selector: 'mat-tab-group',
                    exportAs: 'matTabGroup',
                    template: "<mat-tab-header #tabHeader [selectedIndex]=\"selectedIndex\" [disableRipple]=\"disableRipple\" (indexFocused)=\"_focusChanged($event)\" (selectFocusedIndex)=\"selectedIndex = $event\"><div class=\"mdc-tab mat-mdc-tab\" #tabNode role=\"tab\" matTabLabelWrapper cdkMonitorElementFocus *ngFor=\"let tab of _tabs; let i = index\" [id]=\"_getTabLabelId(i)\" [attr.tabIndex]=\"_getTabIndex(tab, i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"_tabs.length\" [attr.aria-controls]=\"_getTabContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [attr.aria-label]=\"tab.ariaLabel || null\" [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\" [class.mdc-tab--active]=\"selectedIndex == i\" [disabled]=\"tab.disabled\" (click)=\"_handleClick(tab, tabHeader, i)\"><div class=\"mat-mdc-tab-ripple\" mat-ripple [matRippleTrigger]=\"tabNode\" [matRippleDisabled]=\"tab.disabled || disableRipple\"></div><span class=\"mdc-tab__content\"><span class=\"mdc-tab__text-label\"><ng-template [ngIf]=\"tab.templateLabel\"><ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template></ng-template><ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template></span></span></div></mat-tab-header><div class=\"mat-mdc-tab-body-wrapper\" [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\" #tabBodyWrapper><mat-tab-body role=\"tabpanel\" *ngFor=\"let tab of _tabs; let i = index\" [id]=\"_getTabContentId(i)\" [attr.aria-labelledby]=\"_getTabLabelId(i)\" [class.mat-mdc-tab-body-active]=\"selectedIndex == i\" [content]=\"tab.content\" [position]=\"tab.position\" [origin]=\"tab.origin\" [animationDuration]=\"animationDuration\" (_onCentered)=\"_removeTabBodyWrapperHeight()\" (_onCentering)=\"_setTabBodyWrapperHeight($event)\"></mat-tab-body></div>",
                    styles: [".mdc-tab{padding-right:24px;padding-left:24px;position:relative;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:0;background:0 0;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{position:relative;display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;width:24px;height:24px;font-size:24px;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__icon,.mdc-tab--active .mdc-tab__text-label{transition-delay:.1s}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl],[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:0;padding-right:8px}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab.mdc-tab{height:48px;flex-grow:0;min-width:160px}.mat-mdc-tab::before{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none}.mat-mdc-tab:hover::before{opacity:.04}.mat-mdc-tab.cdk-keyboard-focused::before,.mat-mdc-tab.cdk-program-focused::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12}.mat-mdc-tab-group[mat-stretch-tabs]>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-group{display:flex;flex-direction:column}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height .5s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable.mat-mdc-tab-body-wrapper{transition:none;animation:none}"],
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    inputs: ['color', 'disableRipple'],
                    host: {
                        'class': 'mat-mdc-tab-group',
                        '[class.mat-mdc-tab-group-dynamic-height]': 'dynamicHeight',
                        '[class.mat-mdc-tab-group-inverted-header]': 'headerPosition === "below"',
                    },
                },] },
    ];
    /** @nocollapse */
    MatTabGroup.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: undefined, decorators: [{ type: core.Inject, args: [tabs.MAT_TABS_CONFIG,] }, { type: core.Optional }] },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
    ]; };
    MatTabGroup.propDecorators = {
        _tabs: [{ type: core.ContentChildren, args: [MatTab$1,] }],
        _tabBodyWrapper: [{ type: core.ViewChild, args: ['tabBodyWrapper', { static: false },] }],
        _tabHeader: [{ type: core.ViewChild, args: ['tabHeader', { static: false },] }]
    };
    return MatTabGroup;
}(tabs._MatTabGroupBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
var MatTabNav = /** @class */ (function (_super) {
    __extends(MatTabNav, _super);
    function MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, 
    /**
     * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
     */
    platform$$1, animationMode) {
        return _super.call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform$$1, animationMode) || this;
    }
    /**
     * @return {?}
     */
    MatTabNav.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._inkBar = new MatInkBar(this._items);
        _super.prototype.ngAfterContentInit.call(this);
    };
    MatTabNav.decorators = [
        { type: core.Component, args: [{selector: '[mat-tab-nav-bar]',
                    exportAs: 'matTabNavBar, matTabNav',
                    inputs: ['color'],
                    template: "<div class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before\" #previousPaginator aria-hidden=\"true\" mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\" [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollBefore\" (click)=\"_handlePaginatorClick('before')\" (mousedown)=\"_handlePaginatorPress('before')\" (touchend)=\"_stopInterval()\"><div class=\"mat-mdc-tab-header-pagination-chevron\"></div></div><div class=\"mat-mdc-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\"><div class=\"mat-mdc-tab-list\" #tabList (cdkObserveContent)=\"_onContentChanges()\"><div class=\"mat-mdc-tab-links\"><ng-content></ng-content></div></div></div><div class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after\" #nextPaginator aria-hidden=\"true\" mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\" [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollAfter\" (mousedown)=\"_handlePaginatorPress('after')\" (click)=\"_handlePaginatorClick('after')\" (touchend)=\"_stopInterval()\"><div class=\"mat-mdc-tab-header-pagination-chevron\"></div></div>",
                    styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-mdc-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-pagination-after,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before{padding-right:4px}.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;opacity:.4;pointer-events:none}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1)}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center] .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end] .mat-mdc-tab-links{justify-content:flex-end}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}"],
                    host: {
                        'class': 'mat-mdc-tab-nav-bar mat-mdc-tab-header',
                        '[class.mat-mdc-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                        '[class.mat-mdc-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
                        '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
                        '[class.mat-accent]': 'color === "accent"',
                        '[class.mat-warn]': 'color === "warn"',
                    },
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MatTabNav.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
        { type: core.NgZone },
        { type: core.ChangeDetectorRef },
        { type: scrolling.ViewportRuler },
        { type: platform.Platform, decorators: [{ type: core.Optional }] },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
    ]; };
    MatTabNav.propDecorators = {
        _items: [{ type: core.ContentChildren, args: [core.forwardRef((/**
                     * @return {?}
                     */
                    function () { return MatTabLink; })), { descendants: true },] }],
        _tabListContainer: [{ type: core.ViewChild, args: ['tabListContainer', { static: true },] }],
        _tabList: [{ type: core.ViewChild, args: ['tabList', { static: true },] }],
        _nextPaginator: [{ type: core.ViewChild, args: ['nextPaginator', { static: false },] }],
        _previousPaginator: [{ type: core.ViewChild, args: ['previousPaginator', { static: false },] }]
    };
    return MatTabNav;
}(tabs._MatTabNavBase));
/**
 * Link inside of a `mat-tab-nav-bar`.
 */
var MatTabLink = /** @class */ (function (_super) {
    __extends(MatTabLink, _super);
    function MatTabLink(tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, _document, animationMode) {
        var _this = _super.call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode) || this;
        _this._foundation = new MatInkBarFoundation(elementRef, _document);
        _this._foundation.init();
        return _this;
    }
    /**
     * @return {?}
     */
    MatTabLink.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this._foundation.destroy();
    };
    MatTabLink.decorators = [
        { type: core.Component, args: [{selector: '[mat-tab-link], [matTabLink]',
                    exportAs: 'matTabLink',
                    inputs: ['disabled', 'disableRipple', 'tabIndex'],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    template: "<div class=\"mat-mdc-tab-ripple\" mat-ripple [matRippleTrigger]=\"elementRef.nativeElement\" [matRippleDisabled]=\"rippleDisabled\"></div><span class=\"mdc-tab__content\"><span class=\"mdc-tab__text-label\"><ng-content></ng-content></span></span>",
                    styles: [".mdc-tab{padding-right:24px;padding-left:24px;position:relative;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:0;background:0 0;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{position:relative;display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;width:24px;height:24px;font-size:24px;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__icon,.mdc-tab--active .mdc-tab__text-label{transition-delay:.1s}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl],[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:0;padding-right:8px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(.4,0,.2,1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:.1s}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-link.mdc-tab{height:48px;flex-grow:0;min-width:160px}.mat-mdc-tab-link::before{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none}.mat-mdc-tab-link:hover::before{opacity:.04}.mat-mdc-tab-link.cdk-keyboard-focused::before,.mat-mdc-tab-link.cdk-program-focused::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12}.mat-mdc-tab-link.mat-mdc-tab-disabled{pointer-events:none;opacity:.4}.mat-mdc-tab-header[mat-stretch-tabs] .mat-mdc-tab-link{flex-grow:1}@media (max-width:599px){.mat-mdc-tab-link{min-width:72px}}"],
                    host: {
                        'class': 'mdc-tab mat-mdc-tab-link',
                        '[attr.aria-current]': 'active ? "page" : null',
                        '[attr.aria-disabled]': 'disabled',
                        '[attr.tabIndex]': 'tabIndex',
                        '[class.mat-mdc-tab-disabled]': 'disabled',
                        '[class.mdc-tab--active]': 'active',
                    }
                },] },
    ];
    /** @nocollapse */
    MatTabLink.ctorParameters = function () { return [
        { type: MatTabNav },
        { type: core.ElementRef },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
        { type: String, decorators: [{ type: core.Attribute, args: ['tabindex',] }] },
        { type: a11y.FocusMonitor },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
    ]; };
    return MatTabLink;
}(tabs._MatTabLinkBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTabsModule = /** @class */ (function () {
    function MatTabsModule() {
    }
    MatTabsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        core$1.MatCommonModule,
                        portal.PortalModule,
                        core$1.MatRippleModule,
                        observers.ObserversModule,
                        a11y.A11yModule,
                    ],
                    exports: [
                        core$1.MatCommonModule,
                        MatTabContent$1,
                        MatTabLabel$1,
                        MatTab$1,
                        MatTabGroup,
                        MatTabNav,
                        MatTabLink,
                    ],
                    declarations: [
                        MatTabContent$1,
                        MatTabLabel$1,
                        MatTab$1,
                        MatTabGroup,
                        MatTabNav,
                        MatTabLink,
                        // Private directives, should not be exported.
                        MatTabBody,
                        MatTabBodyPortal$1,
                        MatTabLabelWrapper$1,
                        MatTabHeader
                    ]
                },] },
    ];
    return MatTabsModule;
}());

exports.matTabsAnimations = tabs.matTabsAnimations;
exports._MAT_INK_BAR_POSITIONER = tabs._MAT_INK_BAR_POSITIONER;
exports.MatTabChangeEvent = tabs.MatTabChangeEvent;
exports.MAT_TABS_CONFIG = tabs.MAT_TABS_CONFIG;
exports.MatTabBodyPortal = MatTabBodyPortal$1;
exports.MatTabContent = MatTabContent$1;
exports.MatTabLabel = MatTabLabel$1;
exports.MatTabLabelWrapper = MatTabLabelWrapper$1;
exports.MatTab = MatTab$1;
exports.MatInkBar = MatInkBar;
exports.MatTabHeader = MatTabHeader;
exports.MatTabGroup = MatTabGroup;
exports.MatTabNav = MatTabNav;
exports.MatTabLink = MatTabLink;
exports.MatTabsModule = MatTabsModule;
exports.ɵa = MatTabBody;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-experimental-mdc-tabs.umd.js.map
