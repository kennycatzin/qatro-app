/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, NgZone, ViewEncapsulation, NgModule } from '@angular/core';
import { MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_PANEL, MAT_MENU_SCROLL_STRATEGY, MatMenu, matMenuAnimations, MatMenuItem, _MatMenuDirectivesModule } from '@angular/material/menu';
export { _MatMenuDirectivesModule, fadeInItems, MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_PANEL, MAT_MENU_SCROLL_STRATEGY, matMenuAnimations, MatMenuContent, MatMenuTrigger, transformMenu } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.reposition());
}
/**
 * \@docs-private
 * @type {?}
 */
const MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_MENU_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY,
};
let MatMenu$1 = class MatMenu extends MatMenu {
    /**
     * @param {?} _elementRef
     * @param {?} _ngZone
     * @param {?} _defaultOptions
     */
    constructor(_elementRef, _ngZone, _defaultOptions) {
        super(_elementRef, _ngZone, _defaultOptions);
    }
    /**
     * @param {?} _depth
     * @return {?}
     */
    setElevation(_depth) {
        // TODO(crisbeto): MDC's styles come with elevation already and we haven't mapped our mixins
        // to theirs. Disable the elevation stacking for now until everything has been mapped.
        // The following unit tests should be re-enabled:
        // - should not remove mat-elevation class from overlay when panelClass is changed
        // - should increase the sub-menu elevation based on its depth
        // - should update the elevation when the same menu is opened at a different depth
        // - should not increase the elevation if the user specified a custom one
    }
};
MatMenu$1.decorators = [
    { type: Component, args: [{selector: 'mat-menu',
                template: "<ng-template><div class=\"mat-mdc-menu-panel mdc-menu-surface mdc-menu-surface--open\" [ngClass]=\"_classList\" (keydown)=\"_handleKeydown($event)\" (click)=\"closed.emit('click')\" [@transformMenu]=\"_panelAnimationState\" (@transformMenu.start)=\"_onAnimationStart($event)\" (@transformMenu.done)=\"_onAnimationDone($event)\" tabindex=\"-1\" role=\"menu\"><div class=\"mat-mdc-menu-content mdc-list\"><ng-content></ng-content></div></div></ng-template>",
                styles: [".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}.mdc-menu-surface[dir=rtl],[dir=rtl] .mdc-menu-surface{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:0}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;position:static}@media (-ms-high-contrast:active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;height:48px;padding:0 16px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:0 0;text-decoration:none}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item[disabled]{pointer-events:none;cursor:default}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}@media (-ms-high-contrast:active){.mat-mdc-menu-item-highlighted,.mat-mdc-menu-item.cdk-keyboard-focused,.mat-mdc-menu-item.cdk-program-focused{outline:dotted 1px}}.mat-mdc-menu-item-submenu-trigger{padding-right:32px}.mat-mdc-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:'';display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-mdc-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matMenu',
                animations: [
                    matMenuAnimations.transformMenu,
                    matMenuAnimations.fadeInItems
                ],
                providers: [
                    { provide: MAT_MENU_PANEL, useExisting: MatMenu$1 },
                    { provide: MatMenu, useExisting: MatMenu$1 },
                ]
            },] },
];
/** @nocollapse */
MatMenu$1.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This directive is intended to be used inside an mat-menu tag.
 * It exists mostly to set the role attribute.
 */
let MatMenuItem$1 = class MatMenuItem extends MatMenuItem {
};
MatMenuItem$1.decorators = [
    { type: Component, args: [{selector: '[mat-menu-item]',
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
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-content></ng-content><div class=\"mat-mdc-menu-ripple\" matRipple [matRippleDisabled]=\"disableRipple || disabled\" [matRippleTrigger]=\"_getHostElement()\"></div>",
                providers: [
                    { provide: MatMenuItem, useExisting: MatMenuItem$1 },
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatMenuModule {
}
MatMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatRippleModule,
                    MatCommonModule,
                    OverlayModule,
                    _MatMenuDirectivesModule
                ],
                exports: [MatMenu$1, MatMenuItem$1, _MatMenuDirectivesModule],
                declarations: [MatMenu$1, MatMenuItem$1],
                providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
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

export { MatMenu$1 as MatMenu, MatMenuItem$1 as MatMenuItem, MatMenuModule, MAT_MENU_SCROLL_STRATEGY_FACTORY as ɵa, MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER as ɵb };
//# sourceMappingURL=mdc-menu.js.map
