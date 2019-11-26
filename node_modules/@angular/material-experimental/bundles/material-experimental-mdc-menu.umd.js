/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/overlay'), require('@angular/core'), require('@angular/material/menu'), require('@angular/common'), require('@angular/material/core')) :
	typeof define === 'function' && define.amd ? define('@angular/material-experimental/mdc-menu', ['exports', '@angular/cdk/overlay', '@angular/core', '@angular/material/menu', '@angular/common', '@angular/material/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.materialExperimental = global.ng.materialExperimental || {}, global.ng.materialExperimental.mdcMenu = {}),global.ng.cdk.overlay,global.ng.core,global.ng.material.menu,global.ng.common,global.ng.material.core));
}(this, (function (exports,overlay,core,menu,common,core$1) { 'use strict';

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
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay$$1) {
    return (/**
     * @return {?}
     */
    function () { return overlay$$1.scrollStrategies.reposition(); });
}
/**
 * \@docs-private
 * @type {?}
 */
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: menu.MAT_MENU_SCROLL_STRATEGY,
    deps: [overlay.Overlay],
    useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY,
};
var MatMenu$1 = /** @class */ (function (_super) {
    __extends(MatMenu$$1, _super);
    function MatMenu$$1(_elementRef, _ngZone, _defaultOptions) {
        return _super.call(this, _elementRef, _ngZone, _defaultOptions) || this;
    }
    /**
     * @param {?} _depth
     * @return {?}
     */
    MatMenu$$1.prototype.setElevation = /**
     * @param {?} _depth
     * @return {?}
     */
    function (_depth) {
        // TODO(crisbeto): MDC's styles come with elevation already and we haven't mapped our mixins
        // to theirs. Disable the elevation stacking for now until everything has been mapped.
        // The following unit tests should be re-enabled:
        // - should not remove mat-elevation class from overlay when panelClass is changed
        // - should increase the sub-menu elevation based on its depth
        // - should update the elevation when the same menu is opened at a different depth
        // - should not increase the elevation if the user specified a custom one
    };
    MatMenu$$1.decorators = [
        { type: core.Component, args: [{selector: 'mat-menu',
                    template: "<ng-template><div class=\"mat-mdc-menu-panel mdc-menu-surface mdc-menu-surface--open\" [ngClass]=\"_classList\" (keydown)=\"_handleKeydown($event)\" (click)=\"closed.emit('click')\" [@transformMenu]=\"_panelAnimationState\" (@transformMenu.start)=\"_onAnimationStart($event)\" (@transformMenu.done)=\"_onAnimationDone($event)\" tabindex=\"-1\" role=\"menu\"><div class=\"mat-mdc-menu-content mdc-list\"><ng-content></ng-content></div></div></ng-template>",
                    styles: [".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}.mdc-menu-surface[dir=rtl],[dir=rtl] .mdc-menu-surface{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:0}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;position:static}@media (-ms-high-contrast:active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;height:48px;padding:0 16px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:0 0;text-decoration:none}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item[disabled]{pointer-events:none;cursor:default}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}@media (-ms-high-contrast:active){.mat-mdc-menu-item-highlighted,.mat-mdc-menu-item.cdk-keyboard-focused,.mat-mdc-menu-item.cdk-program-focused{outline:dotted 1px}}.mat-mdc-menu-item-submenu-trigger{padding-right:32px}.mat-mdc-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:'';display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-mdc-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    exportAs: 'matMenu',
                    animations: [
                        menu.matMenuAnimations.transformMenu,
                        menu.matMenuAnimations.fadeInItems
                    ],
                    providers: [
                        { provide: menu.MAT_MENU_PANEL, useExisting: MatMenu$$1 },
                        { provide: menu.MatMenu, useExisting: MatMenu$$1 },
                    ]
                },] },
    ];
    /** @nocollapse */
    MatMenu$$1.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: undefined, decorators: [{ type: core.Inject, args: [menu.MAT_MENU_DEFAULT_OPTIONS,] }] }
    ]; };
    return MatMenu$$1;
}(menu.MatMenu));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This directive is intended to be used inside an mat-menu tag.
 * It exists mostly to set the role attribute.
 */
var MatMenuItem$1 = /** @class */ (function (_super) {
    __extends(MatMenuItem$$1, _super);
    function MatMenuItem$$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatMenuItem$$1.decorators = [
        { type: core.Component, args: [{selector: '[mat-menu-item]',
                    exportAs: 'matMenuItem',
                    inputs: ['disabled', 'disableRipple'],
                    host: {
                        '[attr.role]': 'role',
                        'class': 'mat-mdc-menu-item',
                        '[class.mat-mdc-menu-item-highlighted]': '_highlighted',
                        '[class.mat-mdc-menu-item-submenu-trigger]': '_triggersSubmenu',
                        '[attr.tabindex]': '_getTabIndex()',
                        '[attr.aria-disabled]': 'disabled',
                        '[attr.disabled]': 'disabled || null',
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    template: "<ng-content></ng-content><div class=\"mat-mdc-menu-ripple\" matRipple [matRippleDisabled]=\"disableRipple || disabled\" [matRippleTrigger]=\"_getHostElement()\"></div>",
                    providers: [
                        { provide: menu.MatMenuItem, useExisting: MatMenuItem$$1 },
                    ]
                },] },
    ];
    return MatMenuItem$$1;
}(menu.MatMenuItem));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatMenuModule = /** @class */ (function () {
    function MatMenuModule() {
    }
    MatMenuModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        core$1.MatRippleModule,
                        core$1.MatCommonModule,
                        overlay.OverlayModule,
                        menu._MatMenuDirectivesModule
                    ],
                    exports: [MatMenu$1, MatMenuItem$1, menu._MatMenuDirectivesModule],
                    declarations: [MatMenu$1, MatMenuItem$1],
                    providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
                },] },
    ];
    return MatMenuModule;
}());

exports._MatMenuDirectivesModule = menu._MatMenuDirectivesModule;
exports.fadeInItems = menu.fadeInItems;
exports.MAT_MENU_DEFAULT_OPTIONS = menu.MAT_MENU_DEFAULT_OPTIONS;
exports.MAT_MENU_PANEL = menu.MAT_MENU_PANEL;
exports.MAT_MENU_SCROLL_STRATEGY = menu.MAT_MENU_SCROLL_STRATEGY;
exports.matMenuAnimations = menu.matMenuAnimations;
exports.MatMenuContent = menu.MatMenuContent;
exports.MatMenuTrigger = menu.MatMenuTrigger;
exports.transformMenu = menu.transformMenu;
exports.MatMenu = MatMenu$1;
exports.MatMenuItem = MatMenuItem$1;
exports.MatMenuModule = MatMenuModule;
exports.ɵa = MAT_MENU_SCROLL_STRATEGY_FACTORY;
exports.ɵb = MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-experimental-mdc-menu.umd.js.map
