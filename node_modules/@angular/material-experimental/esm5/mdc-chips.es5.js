/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from 'tslib';
import { ChangeDetectorRef, Directive, ElementRef, Component, ChangeDetectionStrategy, ContentChild, EventEmitter, Inject, Input, NgZone, Optional, Output, ViewEncapsulation, QueryList, ViewChild, ContentChildren, forwardRef, Self, InjectionToken, NgModule } from '@angular/core';
import { mixinDisabled, mixinTabIndex, MAT_RIPPLE_GLOBAL_OPTIONS, mixinColor, mixinDisableRipple, RippleRenderer, ErrorStateMatcher, mixinErrorState, MatCommonModule } from '@angular/material/core';
import { Subject, merge } from 'rxjs';
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Platform } from '@angular/cdk/platform';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { MDCChipFoundation, MDCChipSetFoundation } from '@material/chips';
import { numbers } from '@material/ripple';
import { takeUntil, take, startWith } from 'rxjs/operators';
import { SPACE, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, BACKSPACE, DELETE, END, HOME, TAB, hasModifierKey, ENTER } from '@angular/cdk/keycodes';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to add CSS classes to chip leading icon.
 * \@docs-private
 */
var MatChipAvatar = /** @class */ (function () {
    function MatChipAvatar(_changeDetectorRef, _elementRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
    }
    /** Sets whether the given CSS class should be applied to the leading icon. */
    /**
     * Sets whether the given CSS class should be applied to the leading icon.
     * @param {?} cssClass
     * @param {?} active
     * @return {?}
     */
    MatChipAvatar.prototype.setClass = /**
     * Sets whether the given CSS class should be applied to the leading icon.
     * @param {?} cssClass
     * @param {?} active
     * @return {?}
     */
    function (cssClass, active) {
        this._elementRef.nativeElement.classList.toggle(cssClass, active);
        this._changeDetectorRef.markForCheck();
    };
    MatChipAvatar.decorators = [
        { type: Directive, args: [{
                    selector: 'mat-chip-avatar, [matChipAvatar]',
                    host: {
                        'class': 'mat-mdc-chip-avatar mdc-chip__icon mdc-chip__icon--leading',
                        'role': 'img'
                    }
                },] },
    ];
    /** @nocollapse */
    MatChipAvatar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return MatChipAvatar;
}());
/**
 * Directive to add CSS classes to and configure attributes for chip trailing icon.
 * \@docs-private
 */
var MatChipTrailingIcon = /** @class */ (function () {
    function MatChipTrailingIcon(_elementRef) {
        this._elementRef = _elementRef;
    }
    /**
     * @return {?}
     */
    MatChipTrailingIcon.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    /** Sets an attribute on the icon. */
    /**
     * Sets an attribute on the icon.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    MatChipTrailingIcon.prototype.setAttribute = /**
     * Sets an attribute on the icon.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        this._elementRef.nativeElement.setAttribute(name, value);
    };
    MatChipTrailingIcon.decorators = [
        { type: Directive, args: [{
                    selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
                    host: {
                        'class': 'mat-mdc-chip-trailing-icon mdc-chip__icon mdc-chip__icon--trailing',
                        'tabindex': '-1',
                        'aria-hidden': 'true',
                    }
                },] },
    ];
    /** @nocollapse */
    MatChipTrailingIcon.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return MatChipTrailingIcon;
}());
/**
 * Boilerplate for applying mixins to MatChipRemove.
 * \@docs-private
 */
var /**
 * Boilerplate for applying mixins to MatChipRemove.
 * \@docs-private
 */
MatChipRemoveBase = /** @class */ (function (_super) {
    __extends(MatChipRemoveBase, _super);
    function MatChipRemoveBase(_elementRef) {
        return _super.call(this, _elementRef) || this;
    }
    return MatChipRemoveBase;
}(MatChipTrailingIcon));
/** @type {?} */
var _MatChipRemoveMixinBase = mixinTabIndex(mixinDisabled(MatChipRemoveBase));
/**
 * Directive to remove the parent chip when the trailing icon is clicked or
 * when the ENTER key is pressed on it.
 *
 * Recommended for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 *     `<mat-chip>
 *       <mat-icon matChipRemove>cancel</mat-icon>
 *     </mat-chip>`
 */
var MatChipRemove = /** @class */ (function (_super) {
    __extends(MatChipRemove, _super);
    function MatChipRemove(_elementRef) {
        var _this = _super.call(this, _elementRef) || this;
        /**
         * Emits when the user interacts with the icon.
         * \@docs-private
         */
        _this.interaction = new Subject();
        return _this;
    }
    MatChipRemove.decorators = [
        { type: Directive, args: [{
                    selector: '[matChipRemove]',
                    inputs: ['disabled', 'tabIndex'],
                    host: {
                        'class': 'mat-mdc-chip-remove mat-mdc-chip-trailing-icon mdc-chip__icon mdc-chip__icon--trailing',
                        '[tabIndex]': 'tabIndex',
                        'role': 'button',
                        '(click)': 'interaction.next($event)',
                        '(keydown)': 'interaction.next($event)',
                    }
                },] },
    ];
    /** @nocollapse */
    MatChipRemove.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return MatChipRemove;
}(_MatChipRemoveMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var uid = 0;
/**
 * Directive to add MDC CSS to non-basic chips.
 * \@docs-private
 */
var MatChipCssInternalOnly = /** @class */ (function () {
    function MatChipCssInternalOnly() {
    }
    MatChipCssInternalOnly.decorators = [
        { type: Directive, args: [{
                    selector: "mat-chip, mat-chip-option, mat-chip-row, [mat-chip], [mat-chip-option],\n    [mat-chip-row]",
                    host: { 'class': 'mat-mdc-chip mdc-chip' }
                },] },
    ];
    return MatChipCssInternalOnly;
}());
/**
 * Boilerplate for applying mixins to MatChip.
 * \@docs-private
 */
var /**
 * Boilerplate for applying mixins to MatChip.
 * \@docs-private
 */
MatChipBase = /** @class */ (function () {
    function MatChipBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatChipBase;
}());
/** @type {?} */
var _MatChipMixinBase = mixinTabIndex(mixinColor(mixinDisableRipple(MatChipBase), 'primary'), -1);
/**
 * Material design styled Chip base component. Used inside the MatChipSet component.
 *
 * Extended by MatChipOption and MatChipRow for different interaction patterns.
 */
var MatChip = /** @class */ (function (_super) {
    __extends(MatChip, _super);
    function MatChip(_changeDetectorRef, _elementRef, _platform, _ngZone, _globalRippleOptions, _dir, 
    // @breaking-change 8.0.0 `animationMode` parameter to become required.
    animationMode) {
        var _this = _super.call(this, _elementRef) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        _this._platform = _platform;
        _this._ngZone = _ngZone;
        _this._globalRippleOptions = _globalRippleOptions;
        _this._dir = _dir;
        /**
         * Emits when the chip is focused.
         */
        _this._onFocus = new Subject();
        /**
         * Emits when the chip is blurred.
         */
        _this._onBlur = new Subject();
        _this.HANDLED_KEYS = [];
        /**
         * Whether the chip has focus.
         */
        _this._hasFocusInternal = false;
        /**
         * Default unique id for the chip.
         */
        _this._uniqueId = "mat-mdc-chip-" + uid++;
        /**
         * A unique id for the chip. If none is supplied, it will be auto-generated.
         */
        _this.id = _this._uniqueId;
        _this._disabled = false;
        _this._removable = true;
        _this._highlighted = false;
        /**
         * Emitted when the user interacts with the remove icon.
         */
        _this.removeIconInteraction = new EventEmitter();
        /**
         * Emitted when the user interacts with the chip.
         */
        _this.interaction = new EventEmitter();
        /**
         * Emitted when the chip is destroyed.
         */
        _this.destroyed = new EventEmitter();
        /**
         * Emitted when a chip is to be removed.
         */
        _this.removed = new EventEmitter();
        /**
         * The unstyled chip selector for this component.
         */
        _this.basicChipAttrName = 'mat-basic-chip';
        /**
         * Subject that emits when the component has been destroyed.
         */
        _this._destroyed = new Subject();
        /**
         * Implementation of the MDC chip adapter interface.
         * These methods are called by the chip foundation.
         */
        _this._chipAdapter = {
            addClass: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) { return _this._setMdcClass(className, true); }),
            removeClass: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) { return _this._setMdcClass(className, false); }),
            hasClass: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) { return _this._elementRef.nativeElement.classList.contains(className); }),
            addClassToLeadingIcon: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) { return _this.leadingIcon.setClass(className, true); }),
            removeClassFromLeadingIcon: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) { return _this.leadingIcon.setClass(className, false); }),
            eventTargetHasClass: (/**
             * @param {?} target
             * @param {?} className
             * @return {?}
             */
            function (target, className) {
                return target ? ((/** @type {?} */ (target))).classList.contains(className) : false;
            }),
            notifyInteraction: (/**
             * @return {?}
             */
            function () { return _this.interaction.emit(_this.id); }),
            notifySelection: (/**
             * @return {?}
             */
            function () {
                // No-op. We call dispatchSelectionEvent ourselves in MatChipOption, because we want to
                // specify whether selection occurred via user input.
            }),
            notifyNavigation: (/**
             * @return {?}
             */
            function () {
                // TODO: This is a new feature added by MDC; consider exposing this event to users in the
                // future.
            }),
            notifyTrailingIconInteraction: (/**
             * @return {?}
             */
            function () { return _this.removeIconInteraction.emit(_this.id); }),
            notifyRemoval: (/**
             * @return {?}
             */
            function () { return _this.removed.emit({ chip: _this }); }),
            getComputedStyleValue: (/**
             * @param {?} propertyName
             * @return {?}
             */
            function (propertyName) {
                return window.getComputedStyle(_this._elementRef.nativeElement).getPropertyValue(propertyName);
            }),
            setStyleProperty: (/**
             * @param {?} propertyName
             * @param {?} value
             * @return {?}
             */
            function (propertyName, value) {
                _this._elementRef.nativeElement.style.setProperty(propertyName, value);
            }),
            hasLeadingIcon: (/**
             * @return {?}
             */
            function () { return !!_this.leadingIcon; }),
            hasTrailingAction: (/**
             * @return {?}
             */
            function () { return !!_this.trailingIcon; }),
            isRTL: (/**
             * @return {?}
             */
            function () { return !!_this._dir && _this._dir.value === 'rtl'; }),
            focusPrimaryAction: (/**
             * @return {?}
             */
            function () {
                // Angular Material MDC chips fully manage focus. TODO: Managing focus and handling keyboard
                // events was added by MDC after our implementation; consider consolidating.
            }),
            focusTrailingAction: (/**
             * @return {?}
             */
            function () { }),
            setTrailingActionAttr: (/**
             * @param {?} attr
             * @param {?} value
             * @return {?}
             */
            function (attr, value) {
                return _this.trailingIcon && _this.trailingIcon.setAttribute(attr, value);
            }),
            setPrimaryActionAttr: (/**
             * @param {?} name
             * @param {?} value
             * @return {?}
             */
            function (name, value) {
                // MDC is currently using this method to set aria-checked on choice and filter chips,
                // which in the MDC templates have role="checkbox" and role="radio" respectively.
                // We have role="option" on those chips instead, so we do not want aria-checked.
                // Since we also manage the tabindex ourselves, we don't allow MDC to set it.
                if (name === 'aria-checked' || name === 'tabindex') {
                    return;
                }
                _this._elementRef.nativeElement.setAttribute(name, value);
            }),
            // The 2 functions below are used by the MDC ripple, which we aren't using,
            // so they will never be called
            getRootBoundingClientRect: (/**
             * @return {?}
             */
            function () { return _this._elementRef.nativeElement.getBoundingClientRect(); }),
            getCheckmarkBoundingClientRect: (/**
             * @return {?}
             */
            function () { return null; }),
        };
        _this._chipFoundation = new MDCChipFoundation(_this._chipAdapter);
        _this._animationsDisabled = animationMode === 'NoopAnimations';
        return _this;
    }
    Object.defineProperty(MatChip.prototype, "_hasFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasFocusInternal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = coerceBooleanProperty(value);
            if (this.removeIcon) {
                this.removeIcon.disabled = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "value", {
        /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */
        get: /**
         * The value of the chip. Defaults to the content inside `<mat-chip>` tags.
         * @return {?}
         */
        function () {
            return this._value !== undefined
                ? this._value
                : this._elementRef.nativeElement.textContent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._value = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "removable", {
        /**
         * Determines whether or not the chip displays the remove styling and emits (removed) events.
         */
        get: /**
         * Determines whether or not the chip displays the remove styling and emits (removed) events.
         * @return {?}
         */
        function () { return this._removable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._removable = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "highlighted", {
        /**
         * Colors the chip for emphasis as if it were selected.
         */
        get: /**
         * Colors the chip for emphasis as if it were selected.
         * @return {?}
         */
        function () { return this._highlighted; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._highlighted = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "rippleDisabled", {
        /**
         * Implemented as part of RippleTarget. Whether ripples are disabled on interaction.
         * @docs-private
         */
        get: /**
         * Implemented as part of RippleTarget. Whether ripples are disabled on interaction.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.disabled || this.disableRipple || !!this.rippleConfig.disabled ||
                this._isBasicChip();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatChip.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._initRemoveIcon();
    };
    /**
     * @return {?}
     */
    MatChip.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._initRipple();
        this._chipFoundation.init();
    };
    /**
     * @return {?}
     */
    MatChip.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed.emit({ chip: this });
        this._destroyed.next();
        this._destroyed.complete();
        this._rippleRenderer._removeTriggerEvents();
        this._chipFoundation.destroy();
    };
    /** Sets up the remove icon chip foundation, and subscribes to remove icon events. */
    /**
     * Sets up the remove icon chip foundation, and subscribes to remove icon events.
     * @return {?}
     */
    MatChip.prototype._initRemoveIcon = /**
     * Sets up the remove icon chip foundation, and subscribes to remove icon events.
     * @return {?}
     */
    function () {
        if (this.removeIcon) {
            this._chipFoundation.setShouldRemoveOnTrailingIconClick(true);
            this._listenToRemoveIconInteraction();
            this.removeIcon.disabled = this.disabled;
        }
    };
    /** Handles interaction with the remove icon. */
    /**
     * Handles interaction with the remove icon.
     * @return {?}
     */
    MatChip.prototype._listenToRemoveIconInteraction = /**
     * Handles interaction with the remove icon.
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeIcon.interaction
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // The MDC chip foundation calls stopPropagation() for any trailing icon interaction
            // event, even ones it doesn't handle, so we want to avoid passing it keyboard events
            // for which we have a custom handler.
            if (_this.disabled || (event instanceof KeyboardEvent &&
                _this.HANDLED_KEYS.indexOf(event.keyCode) !== -1)) {
                return;
            }
            _this._chipFoundation.handleTrailingIconInteraction(event);
        }));
    };
    /**
     * Allows for programmatic removal of the chip.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     */
    /**
     * Allows for programmatic removal of the chip.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     * @return {?}
     */
    MatChip.prototype.remove = /**
     * Allows for programmatic removal of the chip.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     * @return {?}
     */
    function () {
        if (this.removable) {
            this._chipFoundation.beginExit();
        }
    };
    /** Whether this chip is a basic (unstyled) chip. */
    /**
     * Whether this chip is a basic (unstyled) chip.
     * @return {?}
     */
    MatChip.prototype._isBasicChip = /**
     * Whether this chip is a basic (unstyled) chip.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = (/** @type {?} */ (this._elementRef.nativeElement));
        return element.hasAttribute(this.basicChipAttrName) ||
            element.tagName.toLowerCase() === this.basicChipAttrName;
    };
    /** Sets whether the given CSS class should be applied to the MDC chip. */
    /**
     * Sets whether the given CSS class should be applied to the MDC chip.
     * @private
     * @param {?} cssClass
     * @param {?} active
     * @return {?}
     */
    MatChip.prototype._setMdcClass = /**
     * Sets whether the given CSS class should be applied to the MDC chip.
     * @private
     * @param {?} cssClass
     * @param {?} active
     * @return {?}
     */
    function (cssClass, active) {
        /** @type {?} */
        var classes = this._elementRef.nativeElement.classList;
        active ? classes.add(cssClass) : classes.remove(cssClass);
        this._changeDetectorRef.markForCheck();
    };
    /** Initializes the ripple renderer. */
    /**
     * Initializes the ripple renderer.
     * @private
     * @return {?}
     */
    MatChip.prototype._initRipple = /**
     * Initializes the ripple renderer.
     * @private
     * @return {?}
     */
    function () {
        this.rippleConfig = this._globalRippleOptions || {};
        // Configure ripple animation to match MDC Ripple.
        this.rippleConfig.animation = {
            enterDuration: numbers.DEACTIVATION_TIMEOUT_MS,
            exitDuration: numbers.FG_DEACTIVATION_MS,
        };
        this._rippleRenderer =
            new RippleRenderer(this, this._ngZone, this._elementRef, this._platform);
        this._rippleRenderer.setupTriggerEvents(this._elementRef);
    };
    /** Forwards interaction events to the MDC chip foundation. */
    /**
     * Forwards interaction events to the MDC chip foundation.
     * @param {?} event
     * @return {?}
     */
    MatChip.prototype._handleInteraction = /**
     * Forwards interaction events to the MDC chip foundation.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled) {
            this._chipFoundation.handleInteraction(event);
        }
    };
    MatChip.decorators = [
        { type: Component, args: [{selector: 'mat-basic-chip, mat-chip',
                    inputs: ['color', 'disableRipple'],
                    exportAs: 'matChip',
                    template: "<ng-content select=\"mat-chip-avatar, [matChipAvatar]\"></ng-content><div class=\"mdc-chip__text mdc-chip__action--primary\"><ng-content></ng-content></div><ng-content select=\"mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]\"></ng-content>",
                    styles: [".mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}.mdc-chip__icon--trailing[dir=rtl],[dir=rtl] .mdc-chip__icon--trailing{margin-left:-4px;margin-right:4px}.mdc-chip{border-radius:16px;height:32px;display:inline-flex;position:relative;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:0;cursor:pointer;-webkit-appearance:none}.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:-4px;margin-right:4px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl],.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:4px;margin-right:-4px}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;right:0;left:0;height:48px;transform:translateY(-50%)}.mdc-chip--exit{opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:0;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset 150ms 50ms cubic-bezier(.4,0,.6,1);stroke-width:2px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-chip__text:focus{outline:0}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width 150ms cubic-bezier(.4,0,.2,1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0s}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}@keyframes mdc-chip-entry{from{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1)}._mat-animation-noopable{transition:none;animation:none}.mat-mdc-chip{cursor:default;overflow:hidden;transform:translateZ(0)}@media (-ms-high-contrast:active){.mat-mdc-chip{outline:solid 1px}.mat-mdc-chip:focus{outline:dotted 2px}}.mat-mdc-chip:not(.mat-mdc-chip-disabled) div:focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):hover .mdc-chip__text::after{content:'';position:absolute;width:100%;height:100%;background:#000;opacity:.2;top:0;left:0;pointer-events:none}.mat-mdc-chip-disabled.mat-mdc-chip{opacity:.4}.mat-mdc-chip-disabled.mat-mdc-chip .mat-chip-row-focusable-text-content,.mat-mdc-chip-disabled.mat-mdc-chip .mat-mdc-chip-trailing-icon{pointer-events:none}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}input.mat-mdc-chip-input{flex:1 0 150px}"],
                    host: {
                        '[class.mat-mdc-chip-disabled]': 'disabled',
                        '[class.mat-mdc-chip-highlighted]': 'highlighted',
                        '[class.mat-mdc-chip-with-avatar]': 'leadingIcon',
                        '[class.mat-mdc-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                        '[class.mat-mdc-basic-chip]': '_isBasicChip()',
                        '[class.mat-mdc-standard-chip]': '!_isBasicChip()',
                        '[class._mat-animation-noopable]': '_animationsDisabled',
                        '[id]': 'id',
                        '[attr.disabled]': 'disabled || null',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '(transitionend)': '_chipFoundation.handleTransitionEnd($event)'
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MatChip.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Platform },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    MatChip.propDecorators = {
        id: [{ type: Input }],
        disabled: [{ type: Input }],
        value: [{ type: Input }],
        removable: [{ type: Input }],
        highlighted: [{ type: Input }],
        removeIconInteraction: [{ type: Output }],
        interaction: [{ type: Output }],
        destroyed: [{ type: Output }],
        removed: [{ type: Output }],
        leadingIcon: [{ type: ContentChild, args: [MatChipAvatar, { static: false },] }],
        trailingIcon: [{ type: ContentChild, args: [MatChipTrailingIcon, { static: false },] }],
        removeIcon: [{ type: ContentChild, args: [MatChipRemove, { static: false },] }]
    };
    return MatChip;
}(_MatChipMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event object emitted by MatChipOption when selected or deselected.
 */
var  /**
 * Event object emitted by MatChipOption when selected or deselected.
 */
MatChipSelectionChange = /** @class */ (function () {
    function MatChipSelectionChange(source, selected, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
    }
    return MatChipSelectionChange;
}());
/**
 * An extension of the MatChip component that supports chip selection.
 * Used with MatChipListbox.
 */
var MatChipOption = /** @class */ (function (_super) {
    __extends(MatChipOption, _super);
    function MatChipOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Whether the chip list is selectable.
         */
        _this.chipListSelectable = true;
        /**
         * Whether the chip list is in multi-selection mode.
         */
        _this._chipListMultiple = false;
        _this._selectable = true;
        /**
         * The unstyled chip selector for this component.
         */
        _this.basicChipAttrName = 'mat-basic-chip-option';
        /**
         * Emitted when the chip is selected or deselected.
         */
        _this.selectionChange = new EventEmitter();
        return _this;
    }
    Object.defineProperty(MatChipOption.prototype, "selectable", {
        /**
         * Whether or not the chip is selectable.
         *
         * When a chip is not selectable, changes to its selected state are always
         * ignored. By default an option chip is selectable, and it becomes
         * non-selectable if its parent chip list is not selectable.
         */
        get: /**
         * Whether or not the chip is selectable.
         *
         * When a chip is not selectable, changes to its selected state are always
         * ignored. By default an option chip is selectable, and it becomes
         * non-selectable if its parent chip list is not selectable.
         * @return {?}
         */
        function () {
            return this._selectable && this.chipListSelectable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectable = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipOption.prototype, "selected", {
        /** Whether the chip is selected. */
        get: /**
         * Whether the chip is selected.
         * @return {?}
         */
        function () {
            return this._chipFoundation.isSelected();
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this.selectable) {
                return;
            }
            /** @type {?} */
            var coercedValue = coerceBooleanProperty(value);
            if (coercedValue != this._chipFoundation.isSelected()) {
                this._chipFoundation.setSelected(coerceBooleanProperty(value));
                this._dispatchSelectionChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipOption.prototype, "ariaSelected", {
        /** The ARIA selected applied to the chip. */
        get: /**
         * The ARIA selected applied to the chip.
         * @return {?}
         */
        function () {
            // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
            // it adds noise to NVDA users where "not selected" will be read out for each chip.
            return this.selectable && (this._chipListMultiple || this.selected) ?
                this.selected.toString() : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Selects the chip. */
    /**
     * Selects the chip.
     * @return {?}
     */
    MatChipOption.prototype.select = /**
     * Selects the chip.
     * @return {?}
     */
    function () {
        if (!this.selectable) {
            return;
        }
        else if (!this.selected) {
            this._chipFoundation.setSelected(true);
            this._dispatchSelectionChange();
        }
    };
    /** Deselects the chip. */
    /**
     * Deselects the chip.
     * @return {?}
     */
    MatChipOption.prototype.deselect = /**
     * Deselects the chip.
     * @return {?}
     */
    function () {
        if (!this.selectable) {
            return;
        }
        else if (this.selected) {
            this._chipFoundation.setSelected(false);
            this._dispatchSelectionChange();
        }
    };
    /** Selects this chip and emits userInputSelection event */
    /**
     * Selects this chip and emits userInputSelection event
     * @return {?}
     */
    MatChipOption.prototype.selectViaInteraction = /**
     * Selects this chip and emits userInputSelection event
     * @return {?}
     */
    function () {
        if (!this.selectable) {
            return;
        }
        else if (!this.selected) {
            this._chipFoundation.setSelected(true);
            this._dispatchSelectionChange(true);
        }
    };
    /** Toggles the current selected state of this chip. */
    /**
     * Toggles the current selected state of this chip.
     * @param {?=} isUserInput
     * @return {?}
     */
    MatChipOption.prototype.toggleSelected = /**
     * Toggles the current selected state of this chip.
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        if (!this.selectable) {
            return this.selected;
        }
        this._chipFoundation.setSelected(!this.selected);
        this._dispatchSelectionChange(isUserInput);
        return this.selected;
    };
    /** Emits a selection change event. */
    /**
     * Emits a selection change event.
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    MatChipOption.prototype._dispatchSelectionChange = /**
     * Emits a selection change event.
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit({
            source: this,
            isUserInput: isUserInput,
            selected: this.selected
        });
    };
    /** Allows for programmatic focusing of the chip. */
    /**
     * Allows for programmatic focusing of the chip.
     * @return {?}
     */
    MatChipOption.prototype.focus = /**
     * Allows for programmatic focusing of the chip.
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();
            this._onFocus.next({ chip: this });
        }
        this._hasFocusInternal = true;
    };
    /** Resets the state of the chip when it loses focus. */
    /**
     * Resets the state of the chip when it loses focus.
     * @return {?}
     */
    MatChipOption.prototype._blur = /**
     * Resets the state of the chip when it loses focus.
     * @return {?}
     */
    function () {
        var _this = this;
        // When animations are enabled, Angular may end up removing the chip from the DOM a little
        // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
        // that moves focus not the next item. To work around the issue, we defer marking the chip
        // as not focused until the next time the zone stabilizes.
        this._ngZone.onStable
            .asObservable()
            .pipe(take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._ngZone.run((/**
             * @return {?}
             */
            function () {
                _this._hasFocusInternal = false;
                _this._onBlur.next({ chip: _this });
            }));
        }));
    };
    /** Handles click events on the chip. */
    /**
     * Handles click events on the chip.
     * @param {?} event
     * @return {?}
     */
    MatChipOption.prototype._click = /**
     * Handles click events on the chip.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            event.preventDefault();
        }
        else {
            this._handleInteraction(event);
            event.stopPropagation();
        }
    };
    /** Handles custom key presses. */
    /**
     * Handles custom key presses.
     * @param {?} event
     * @return {?}
     */
    MatChipOption.prototype._keydown = /**
     * Handles custom key presses.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case SPACE:
                this.toggleSelected(true);
                // Always prevent space from scrolling the page since the list has focus
                event.preventDefault();
                break;
            default:
                this._handleInteraction(event);
        }
    };
    MatChipOption.decorators = [
        { type: Component, args: [{selector: 'mat-basic-chip-option, mat-chip-option',
                    template: "<ng-content select=\"mat-chip-avatar, [matChipAvatar]\"></ng-content><svg *ngIf=\"_chipListMultiple\" class=\"mdc-chip__checkmark-svg\" viewBox=\"-2 -3 30 30\"><path class=\"mdc-chip__checkmark-path\" fill=\"none\" stroke=\"black\" d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/></svg><div class=\"mdc-chip__text\"><ng-content></ng-content></div><ng-content select=\"mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]\"></ng-content>",
                    styles: [".mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}.mdc-chip__icon--trailing[dir=rtl],[dir=rtl] .mdc-chip__icon--trailing{margin-left:-4px;margin-right:4px}.mdc-chip{border-radius:16px;height:32px;display:inline-flex;position:relative;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:0;cursor:pointer;-webkit-appearance:none}.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:-4px;margin-right:4px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl],.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:4px;margin-right:-4px}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;right:0;left:0;height:48px;transform:translateY(-50%)}.mdc-chip--exit{opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:0;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset 150ms 50ms cubic-bezier(.4,0,.6,1);stroke-width:2px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-chip__text:focus{outline:0}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width 150ms cubic-bezier(.4,0,.2,1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0s}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}@keyframes mdc-chip-entry{from{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1)}._mat-animation-noopable{transition:none;animation:none}.mat-mdc-chip{cursor:default;overflow:hidden;transform:translateZ(0)}@media (-ms-high-contrast:active){.mat-mdc-chip{outline:solid 1px}.mat-mdc-chip:focus{outline:dotted 2px}}.mat-mdc-chip:not(.mat-mdc-chip-disabled) div:focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):hover .mdc-chip__text::after{content:'';position:absolute;width:100%;height:100%;background:#000;opacity:.2;top:0;left:0;pointer-events:none}.mat-mdc-chip-disabled.mat-mdc-chip{opacity:.4}.mat-mdc-chip-disabled.mat-mdc-chip .mat-chip-row-focusable-text-content,.mat-mdc-chip-disabled.mat-mdc-chip .mat-mdc-chip-trailing-icon{pointer-events:none}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}input.mat-mdc-chip-input{flex:1 0 150px}"],
                    inputs: ['color', 'disableRipple', 'tabIndex'],
                    host: {
                        'role': 'option',
                        '[class.mat-mdc-chip-disabled]': 'disabled',
                        '[class.mat-mdc-chip-highlighted]': 'highlighted',
                        '[class.mat-mdc-chip-with-avatar]': 'leadingIcon',
                        '[class.mat-mdc-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                        '[class.mat-mdc-chip-selected]': 'selected',
                        '[id]': 'id',
                        '[tabIndex]': 'tabIndex',
                        '[attr.disabled]': 'disabled || null',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-selected]': 'ariaSelected',
                        '(click)': '_click($event)',
                        '(keydown)': '_keydown($event)',
                        '(focus)': 'focus()',
                        '(blur)': '_blur()',
                        '(transitionend)': '_chipFoundation.handleTransitionEnd($event)'
                    },
                    providers: [{ provide: MatChip, useExisting: MatChipOption }],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    MatChipOption.propDecorators = {
        selectable: [{ type: Input }],
        selected: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    return MatChipOption;
}(MatChip));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The keys handled by the GridKeyManager keydown method.
 * @type {?}
 */
var NAVIGATION_KEYS = [DOWN_ARROW, UP_ARROW, RIGHT_ARROW, LEFT_ARROW];
/**
 * This class manages keyboard events for grids. If you pass it a query list
 * of GridKeyManagerRow, it will set the active cell correctly when arrow events occur.
 *
 * GridKeyManager expects that rows may change dynamically, but the cells for a given row are
 * static. It also expects that all rows have the same number of cells.
 * @template T
 */
var /**
 * This class manages keyboard events for grids. If you pass it a query list
 * of GridKeyManagerRow, it will set the active cell correctly when arrow events occur.
 *
 * GridKeyManager expects that rows may change dynamically, but the cells for a given row are
 * static. It also expects that all rows have the same number of cells.
 * @template T
 */
GridKeyManager = /** @class */ (function () {
    function GridKeyManager(_rows) {
        var _this = this;
        this._rows = _rows;
        this._activeRowIndex = -1;
        this._activeColumnIndex = -1;
        this._activeRow = null;
        this._activeCell = null;
        this._dir = 'ltr';
        /**
         * Stream that emits whenever the active cell of the grid manager changes.
         */
        this.change = new Subject();
        // We allow for the rows to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the rows they want to manage (e.g. when the
        // rows aren't being collected via `ViewChildren` or `ContentChildren`).
        if (_rows instanceof QueryList) {
            _rows.changes.subscribe((/**
             * @param {?} newRows
             * @return {?}
             */
            function (newRows) {
                if (_this._activeRow) {
                    /** @type {?} */
                    var newIndex = newRows.toArray().indexOf(_this._activeRow);
                    if (newIndex > -1 && newIndex !== _this._activeRowIndex) {
                        _this._activeRowIndex = newIndex;
                    }
                }
            }));
        }
    }
    /**
     * Configures the directionality of the key manager's horizontal movement.
     * @param direction Direction which is considered forward movement across a row.
     *
     * If withDirectionality is not set, the default is 'ltr'.
     */
    /**
     * Configures the directionality of the key manager's horizontal movement.
     * @template THIS
     * @this {THIS}
     * @param {?} direction Direction which is considered forward movement across a row.
     *
     * If withDirectionality is not set, the default is 'ltr'.
     * @return {THIS}
     */
    GridKeyManager.prototype.withDirectionality = /**
     * Configures the directionality of the key manager's horizontal movement.
     * @template THIS
     * @this {THIS}
     * @param {?} direction Direction which is considered forward movement across a row.
     *
     * If withDirectionality is not set, the default is 'ltr'.
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._dir = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    GridKeyManager.prototype.setActiveCell = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        /** @type {?} */
        var previousRowIndex = this._activeRowIndex;
        /** @type {?} */
        var previousColumnIndex = this._activeColumnIndex;
        this.updateActiveCell(cell);
        if (this._activeRowIndex !== previousRowIndex ||
            this._activeColumnIndex !== previousColumnIndex) {
            this.change.next({ row: this._activeRowIndex, column: this._activeColumnIndex });
        }
    };
    /**
     * Sets the active cell depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    /**
     * Sets the active cell depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    GridKeyManager.prototype.onKeydown = /**
     * Sets the active cell depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        switch (keyCode) {
            case DOWN_ARROW:
                this.setNextRowActive();
                break;
            case UP_ARROW:
                this.setPreviousRowActive();
                break;
            case RIGHT_ARROW:
                this._dir === 'rtl' ? this.setPreviousColumnActive() : this.setNextColumnActive();
                break;
            case LEFT_ARROW:
                this._dir === 'rtl' ? this.setNextColumnActive() : this.setPreviousColumnActive();
                break;
            default:
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        event.preventDefault();
    };
    Object.defineProperty(GridKeyManager.prototype, "activeRowIndex", {
        /** Index of the currently active row. */
        get: /**
         * Index of the currently active row.
         * @return {?}
         */
        function () {
            return this._activeRowIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridKeyManager.prototype, "activeColumnIndex", {
        /** Index of the currently active column. */
        get: /**
         * Index of the currently active column.
         * @return {?}
         */
        function () {
            return this._activeColumnIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridKeyManager.prototype, "activeCell", {
        /** The active cell. */
        get: /**
         * The active cell.
         * @return {?}
         */
        function () {
            return this._activeCell;
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the active cell to the first cell in the grid. */
    /**
     * Sets the active cell to the first cell in the grid.
     * @return {?}
     */
    GridKeyManager.prototype.setFirstCellActive = /**
     * Sets the active cell to the first cell in the grid.
     * @return {?}
     */
    function () {
        this._setActiveCellByIndex(0, 0);
    };
    /** Sets the active cell to the last cell in the grid. */
    /**
     * Sets the active cell to the last cell in the grid.
     * @return {?}
     */
    GridKeyManager.prototype.setLastCellActive = /**
     * Sets the active cell to the last cell in the grid.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lastRowIndex = this._rows.length - 1;
        /** @type {?} */
        var lastRow = this._getRowsArray()[lastRowIndex];
        this._setActiveCellByIndex(lastRowIndex, lastRow.cells.length - 1);
    };
    /** Sets the active row to the next row in the grid. Active column is unchanged. */
    /**
     * Sets the active row to the next row in the grid. Active column is unchanged.
     * @return {?}
     */
    GridKeyManager.prototype.setNextRowActive = /**
     * Sets the active row to the next row in the grid. Active column is unchanged.
     * @return {?}
     */
    function () {
        this._activeRowIndex < 0 ? this.setFirstCellActive() : this._setActiveCellByDelta(1, 0);
    };
    /** Sets the active row to the previous row in the grid. Active column is unchanged. */
    /**
     * Sets the active row to the previous row in the grid. Active column is unchanged.
     * @return {?}
     */
    GridKeyManager.prototype.setPreviousRowActive = /**
     * Sets the active row to the previous row in the grid. Active column is unchanged.
     * @return {?}
     */
    function () {
        this._setActiveCellByDelta(-1, 0);
    };
    /**
     * Sets the active column to the next column in the grid.
     * Active row is unchanged, unless we reach the end of a row.
     */
    /**
     * Sets the active column to the next column in the grid.
     * Active row is unchanged, unless we reach the end of a row.
     * @return {?}
     */
    GridKeyManager.prototype.setNextColumnActive = /**
     * Sets the active column to the next column in the grid.
     * Active row is unchanged, unless we reach the end of a row.
     * @return {?}
     */
    function () {
        this._activeRowIndex < 0 ? this.setFirstCellActive() : this._setActiveCellByDelta(0, 1);
    };
    /**
     * Sets the active column to the previous column in the grid.
     * Active row is unchanged, unless we reach the end of a row.
     */
    /**
     * Sets the active column to the previous column in the grid.
     * Active row is unchanged, unless we reach the end of a row.
     * @return {?}
     */
    GridKeyManager.prototype.setPreviousColumnActive = /**
     * Sets the active column to the previous column in the grid.
     * Active row is unchanged, unless we reach the end of a row.
     * @return {?}
     */
    function () {
        this._setActiveCellByDelta(0, -1);
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    GridKeyManager.prototype.updateActiveCell = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        var _this = this;
        /** @type {?} */
        var rowArray = this._getRowsArray();
        if (typeof cell === 'object' && typeof cell.row === 'number' &&
            typeof cell.column === 'number') {
            this._activeRowIndex = cell.row;
            this._activeColumnIndex = cell.column;
            this._activeRow = rowArray[cell.row] || null;
            this._activeCell = this._activeRow ? this._activeRow.cells[cell.column] || null : null;
        }
        else {
            rowArray.forEach((/**
             * @param {?} row
             * @param {?} rowIndex
             * @return {?}
             */
            function (row, rowIndex) {
                /** @type {?} */
                var columnIndex = row.cells.indexOf(cell);
                if (columnIndex !== -1) {
                    _this._activeRowIndex = rowIndex;
                    _this._activeColumnIndex = columnIndex;
                    _this._activeRow = row;
                    _this._activeCell = row.cells[columnIndex];
                }
            }));
        }
    };
    /**
     * This method sets the active cell, given the row and columns deltas
     * between the currently active cell and the new active cell.
     */
    /**
     * This method sets the active cell, given the row and columns deltas
     * between the currently active cell and the new active cell.
     * @private
     * @param {?} rowDelta
     * @param {?} columnDelta
     * @return {?}
     */
    GridKeyManager.prototype._setActiveCellByDelta = /**
     * This method sets the active cell, given the row and columns deltas
     * between the currently active cell and the new active cell.
     * @private
     * @param {?} rowDelta
     * @param {?} columnDelta
     * @return {?}
     */
    function (rowDelta, columnDelta) {
        // If delta puts us past the last cell in a row, move to the first cell of the next row.
        if (this._activeRow && this._activeColumnIndex + columnDelta >= this._activeRow.cells.length) {
            this._setActiveCellByIndex(this._activeRowIndex + 1, 0);
            // If delta puts us prior to the first cell in a row, move to the last cell of the previous row.
        }
        else if (this._activeColumnIndex + columnDelta < 0) {
            /** @type {?} */
            var previousRowIndex = this._activeRowIndex - 1;
            /** @type {?} */
            var previousRow = this._getRowsArray()[previousRowIndex];
            if (previousRow) {
                this._setActiveCellByIndex(previousRowIndex, previousRow.cells.length - 1);
            }
        }
        else {
            this._setActiveCellByIndex(this._activeRowIndex + rowDelta, this._activeColumnIndex + columnDelta);
        }
    };
    /**
     * Sets the active cell to the cell at the indices specified, if they are valid.
     */
    /**
     * Sets the active cell to the cell at the indices specified, if they are valid.
     * @private
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    GridKeyManager.prototype._setActiveCellByIndex = /**
     * Sets the active cell to the cell at the indices specified, if they are valid.
     * @private
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    function (rowIndex, columnIndex) {
        /** @type {?} */
        var rows = this._getRowsArray();
        /** @type {?} */
        var targetRow = rows[rowIndex];
        if (!targetRow || !targetRow.cells[columnIndex]) {
            return;
        }
        this.setActiveCell({ row: rowIndex, column: columnIndex });
    };
    /** Returns the rows as an array. */
    /**
     * Returns the rows as an array.
     * @private
     * @return {?}
     */
    GridKeyManager.prototype._getRowsArray = /**
     * Returns the rows as an array.
     * @private
     * @return {?}
     */
    function () {
        return this._rows instanceof QueryList ? this._rows.toArray() : this._rows;
    };
    return GridKeyManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An extension of the MatChip component used with MatChipGrid and
 * the matChipInputFor directive.
 */
var MatChipRow = /** @class */ (function (_super) {
    __extends(MatChipRow, _super);
    function MatChipRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.basicChipAttrName = 'mat-basic-chip-row';
        /**
         * Key codes for which this component has a custom handler.
         */
        _this.HANDLED_KEYS = NAVIGATION_KEYS.concat([BACKSPACE, DELETE]);
        return _this;
    }
    /**
     * @return {?}
     */
    MatChipRow.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngAfterContentInit.call(this);
        if (this.removeIcon) {
            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            setTimeout((/**
             * @return {?}
             */
            function () {
                // removeIcon has tabIndex 0 for regular chips, but should only be focusable by
                // the GridFocusKeyManager for row chips.
                _this.removeIcon.tabIndex = -1;
            }));
        }
    };
    /**
     * @return {?}
     */
    MatChipRow.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.cells = this.removeIcon ?
            [this.chipContent.nativeElement, this.removeIcon._elementRef.nativeElement] :
            [this.chipContent.nativeElement];
    };
    /**
     * Allows for programmatic focusing of the chip.
     * Sends focus to the first grid cell. The row chip element itself
     * is never focused.
     */
    /**
     * Allows for programmatic focusing of the chip.
     * Sends focus to the first grid cell. The row chip element itself
     * is never focused.
     * @return {?}
     */
    MatChipRow.prototype.focus = /**
     * Allows for programmatic focusing of the chip.
     * Sends focus to the first grid cell. The row chip element itself
     * is never focused.
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        if (!this._hasFocusInternal) {
            this._onFocus.next({ chip: this });
        }
        this.chipContent.nativeElement.focus();
    };
    /**
     * Emits a blur event when one of the gridcells loses focus, unless focus moved
     * to the other gridcell.
     */
    /**
     * Emits a blur event when one of the gridcells loses focus, unless focus moved
     * to the other gridcell.
     * @return {?}
     */
    MatChipRow.prototype._focusout = /**
     * Emits a blur event when one of the gridcells loses focus, unless focus moved
     * to the other gridcell.
     * @return {?}
     */
    function () {
        var _this = this;
        this._hasFocusInternal = false;
        // Wait to see if focus moves to the other gridcell
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this._hasFocus) {
                return;
            }
            _this._onBlur.next({ chip: _this });
        }));
    };
    /** Records that the chip has focus when one of the gridcells is focused. */
    /**
     * Records that the chip has focus when one of the gridcells is focused.
     * @return {?}
     */
    MatChipRow.prototype._focusin = /**
     * Records that the chip has focus when one of the gridcells is focused.
     * @return {?}
     */
    function () {
        this._hasFocusInternal = true;
    };
    /** Sends focus to the first gridcell when the user clicks anywhere inside the chip. */
    /**
     * Sends focus to the first gridcell when the user clicks anywhere inside the chip.
     * @param {?} event
     * @return {?}
     */
    MatChipRow.prototype._mousedown = /**
     * Sends focus to the first gridcell when the user clicks anywhere inside the chip.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled) {
            this.focus();
        }
        event.preventDefault();
    };
    /** Handles custom key presses. */
    /**
     * Handles custom key presses.
     * @param {?} event
     * @return {?}
     */
    MatChipRow.prototype._keydown = /**
     * Handles custom key presses.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case DELETE:
            case BACKSPACE:
                // Remove the focused chip
                this.remove();
                // Always prevent so page navigation does not occur
                event.preventDefault();
                break;
            default:
                this._handleInteraction(event);
        }
    };
    MatChipRow.decorators = [
        { type: Component, args: [{selector: 'mat-chip-row, mat-basic-chip-row',
                    template: "<div role=\"gridcell\"><div #chipContent tabindex=\"-1\" class=\"mat-chip-row-focusable-text-content\"><ng-content select=\"mat-chip-avatar, [matChipAvatar]\"></ng-content><span class=\"mdc-chip__text\"><ng-content></ng-content></span><ng-content select=\"mat-chip-trailing-icon,[matChipTrailingIcon]\"></ng-content></div></div><div role=\"gridcell\" *ngIf=\"removeIcon\"><ng-content select=\"[matChipRemove]\"></ng-content></div>",
                    styles: [".mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}.mdc-chip__icon--trailing[dir=rtl],[dir=rtl] .mdc-chip__icon--trailing{margin-left:-4px;margin-right:4px}.mdc-chip{border-radius:16px;height:32px;display:inline-flex;position:relative;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:0;cursor:pointer;-webkit-appearance:none}.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:-4px;margin-right:4px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl],.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:4px;margin-right:-4px}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;right:0;left:0;height:48px;transform:translateY(-50%)}.mdc-chip--exit{opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:0;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset 150ms 50ms cubic-bezier(.4,0,.6,1);stroke-width:2px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-chip__text:focus{outline:0}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width 150ms cubic-bezier(.4,0,.2,1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0s}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}@keyframes mdc-chip-entry{from{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1)}._mat-animation-noopable{transition:none;animation:none}.mat-mdc-chip{cursor:default;overflow:hidden;transform:translateZ(0)}@media (-ms-high-contrast:active){.mat-mdc-chip{outline:solid 1px}.mat-mdc-chip:focus{outline:dotted 2px}}.mat-mdc-chip:not(.mat-mdc-chip-disabled) div:focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):hover .mdc-chip__text::after{content:'';position:absolute;width:100%;height:100%;background:#000;opacity:.2;top:0;left:0;pointer-events:none}.mat-mdc-chip-disabled.mat-mdc-chip{opacity:.4}.mat-mdc-chip-disabled.mat-mdc-chip .mat-chip-row-focusable-text-content,.mat-mdc-chip-disabled.mat-mdc-chip .mat-mdc-chip-trailing-icon{pointer-events:none}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}input.mat-mdc-chip-input{flex:1 0 150px}"],
                    inputs: ['color', 'disableRipple', 'tabIndex'],
                    host: {
                        'role': 'row',
                        '[class.mat-mdc-chip-disabled]': 'disabled',
                        '[class.mat-mdc-chip-highlighted]': 'highlighted',
                        '[class.mat-mdc-chip-with-avatar]': 'leadingIcon',
                        '[class.mat-mdc-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                        '[id]': 'id',
                        '[attr.disabled]': 'disabled || null',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[tabIndex]': 'tabIndex',
                        '(mousedown)': '_mousedown($event)',
                        '(keydown)': '_keydown($event)',
                        '(transitionend)': '_chipFoundation.handleTransitionEnd($event)',
                        '(focusin)': '_focusin()',
                        '(focusout)': '_focusout()'
                    },
                    providers: [{ provide: MatChip, useExisting: MatChipRow }],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    MatChipRow.propDecorators = {
        chipContent: [{ type: ViewChild, args: ['chipContent', { static: false },] }]
    };
    return MatChipRow;
}(MatChip));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var uid$1 = 0;
/**
 * Boilerplate for applying mixins to MatChipSet.
 * \@docs-private
 */
var /**
 * Boilerplate for applying mixins to MatChipSet.
 * \@docs-private
 */
MatChipSetBase = /** @class */ (function () {
    function MatChipSetBase(_elementRef) {
    }
    return MatChipSetBase;
}());
/** @type {?} */
var _MatChipSetMixinBase = mixinTabIndex(MatChipSetBase);
/**
 * Basic container component for the MatChip component.
 *
 * Extended by MatChipListbox and MatChipGrid for different interaction patterns.
 */
var MatChipSet = /** @class */ (function (_super) {
    __extends(MatChipSet, _super);
    function MatChipSet(_elementRef, _changeDetectorRef, _dir) {
        var _this = _super.call(this, _elementRef) || this;
        _this._elementRef = _elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._dir = _dir;
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */
        _this._lastDestroyedChipIndex = null;
        /**
         * Subject that emits when the component has been destroyed.
         */
        _this._destroyed = new Subject();
        /**
         * Implementation of the MDC chip-set adapter interface.
         * These methods are called by the chip set foundation.
         */
        _this._chipSetAdapter = {
            hasClass: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) { return _this._hasMdcClass(className); }),
            // No-op. We keep track of chips via ContentChildren, which will be updated when a chip is
            // removed.
            removeChipAtIndex: (/**
             * @return {?}
             */
            function () { }),
            // No-op for base chip set. MatChipListbox overrides the adapter to provide this method.
            selectChipAtIndex: (/**
             * @return {?}
             */
            function () { }),
            getIndexOfChipById: (/**
             * @param {?} id
             * @return {?}
             */
            function (id) { return _this._chips.toArray().findIndex((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.id === id; })); }),
            focusChipPrimaryActionAtIndex: (/**
             * @return {?}
             */
            function () { }),
            focusChipTrailingActionAtIndex: (/**
             * @return {?}
             */
            function () { }),
            removeFocusFromChipAtIndex: (/**
             * @return {?}
             */
            function () { }),
            isRTL: (/**
             * @return {?}
             */
            function () { return !!_this._dir && _this._dir.value === 'rtl'; }),
            getChipListCount: (/**
             * @return {?}
             */
            function () { return _this._chips.length; }),
        };
        /**
         * Uid of the chip set
         */
        _this._uid = "mat-mdc-chip-set-" + uid$1++;
        /**
         * Map from class to whether the class is enabled.
         * Enabled classes are set on the MDC chip-set div.
         */
        _this._mdcClasses = {};
        _this._disabled = false;
        _this._chipSetFoundation = new MDCChipSetFoundation(_this._chipSetAdapter);
        return _this;
    }
    Object.defineProperty(MatChipSet.prototype, "disabled", {
        /** Whether the chip set is disabled. */
        get: /**
         * Whether the chip set is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = coerceBooleanProperty(value);
            this._syncChipsState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipSet.prototype, "empty", {
        /** Whether the chip list contains chips or not. */
        get: /**
         * Whether the chip list contains chips or not.
         * @return {?}
         */
        function () { return this._chips.length === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipSet.prototype, "role", {
        /** The ARIA role applied to the chip set. */
        get: /**
         * The ARIA role applied to the chip set.
         * @return {?}
         */
        function () { return this.empty ? null : 'presentation'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipSet.prototype, "focused", {
        /** Whether any of the chips inside of this chip-set has focus. */
        get: /**
         * Whether any of the chips inside of this chip-set has focus.
         * @return {?}
         */
        function () { return this._hasFocusedChip(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipSet.prototype, "chipRemoveChanges", {
        /** Combined stream of all of the child chips' remove events. */
        get: /**
         * Combined stream of all of the child chips' remove events.
         * @return {?}
         */
        function () {
            return merge.apply(void 0, this._chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.removed; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipSet.prototype, "chipDestroyedChanges", {
        /** Combined stream of all of the child chips' remove events. */
        get: /**
         * Combined stream of all of the child chips' remove events.
         * @return {?}
         */
        function () {
            return merge.apply(void 0, this._chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.destroyed; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipSet.prototype, "chipInteractionChanges", {
        /** Combined stream of all of the child chips' interaction events. */
        get: /**
         * Combined stream of all of the child chips' interaction events.
         * @return {?}
         */
        function () {
            return merge.apply(void 0, this._chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.interaction; })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatChipSet.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._chipSetFoundation.init();
    };
    /**
     * @return {?}
     */
    MatChipSet.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this._syncChipsState();
                }));
            }
            _this._resetChips();
        }));
    };
    /**
     * @return {?}
     */
    MatChipSet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._dropSubscriptions();
        this._destroyed.next();
        this._destroyed.complete();
        this._chipSetFoundation.destroy();
    };
    /** Checks whether any of the chips is focused. */
    /**
     * Checks whether any of the chips is focused.
     * @protected
     * @return {?}
     */
    MatChipSet.prototype._hasFocusedChip = /**
     * Checks whether any of the chips is focused.
     * @protected
     * @return {?}
     */
    function () {
        return this._chips.some((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) { return chip._hasFocus; }));
    };
    /** Syncs the chip-set's state with the individual chips. */
    /**
     * Syncs the chip-set's state with the individual chips.
     * @protected
     * @return {?}
     */
    MatChipSet.prototype._syncChipsState = /**
     * Syncs the chip-set's state with the individual chips.
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._chips) {
            this._chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) {
                chip.disabled = _this._disabled;
                chip._changeDetectorRef.markForCheck();
            }));
        }
    };
    /** Sets whether the given CSS class should be applied to the MDC chip. */
    /**
     * Sets whether the given CSS class should be applied to the MDC chip.
     * @protected
     * @param {?} cssClass
     * @param {?} active
     * @return {?}
     */
    MatChipSet.prototype._setMdcClass = /**
     * Sets whether the given CSS class should be applied to the MDC chip.
     * @protected
     * @param {?} cssClass
     * @param {?} active
     * @return {?}
     */
    function (cssClass, active) {
        /** @type {?} */
        var classes = this._elementRef.nativeElement.classList;
        active ? classes.add(cssClass) : classes.remove(cssClass);
        this._changeDetectorRef.markForCheck();
    };
    /** Adapter method that returns true if the chip set has the given MDC class. */
    /**
     * Adapter method that returns true if the chip set has the given MDC class.
     * @protected
     * @param {?} className
     * @return {?}
     */
    MatChipSet.prototype._hasMdcClass = /**
     * Adapter method that returns true if the chip set has the given MDC class.
     * @protected
     * @param {?} className
     * @return {?}
     */
    function (className) {
        return this._elementRef.nativeElement.classList.contains(className);
    };
    /** Updates subscriptions to chip events. */
    /**
     * Updates subscriptions to chip events.
     * @private
     * @return {?}
     */
    MatChipSet.prototype._resetChips = /**
     * Updates subscriptions to chip events.
     * @private
     * @return {?}
     */
    function () {
        this._dropSubscriptions();
        this._subscribeToChipEvents();
    };
    /** Subscribes to events on the child chips. */
    /**
     * Subscribes to events on the child chips.
     * @protected
     * @return {?}
     */
    MatChipSet.prototype._subscribeToChipEvents = /**
     * Subscribes to events on the child chips.
     * @protected
     * @return {?}
     */
    function () {
        this._listenToChipsRemove();
        this._listenToChipsDestroyed();
        this._listenToChipsInteraction();
    };
    /** Subscribes to chip removal events. */
    /**
     * Subscribes to chip removal events.
     * @private
     * @return {?}
     */
    MatChipSet.prototype._listenToChipsRemove = /**
     * Subscribes to chip removal events.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipRemoveSubscription = this.chipRemoveChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._chipSetFoundation.handleChipRemoval(event.chip.id);
        }));
    };
    /** Subscribes to chip destroyed events. */
    /**
     * Subscribes to chip destroyed events.
     * @private
     * @return {?}
     */
    MatChipSet.prototype._listenToChipsDestroyed = /**
     * Subscribes to chip destroyed events.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipDestroyedSubscription = this.chipDestroyedChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var chip = event.chip;
            /** @type {?} */
            var chipIndex = _this._chips.toArray().indexOf(event.chip);
            // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.
            if (_this._isValidIndex(chipIndex) && chip._hasFocus) {
                _this._lastDestroyedChipIndex = chipIndex;
            }
        }));
    };
    /** Subscribes to chip interaction events. */
    /**
     * Subscribes to chip interaction events.
     * @private
     * @return {?}
     */
    MatChipSet.prototype._listenToChipsInteraction = /**
     * Subscribes to chip interaction events.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipInteractionSubscription = this.chipInteractionChanges.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            _this._chipSetFoundation.handleChipInteraction(id);
        }));
    };
    /** Unsubscribes from all chip events. */
    /**
     * Unsubscribes from all chip events.
     * @protected
     * @return {?}
     */
    MatChipSet.prototype._dropSubscriptions = /**
     * Unsubscribes from all chip events.
     * @protected
     * @return {?}
     */
    function () {
        if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();
            this._chipRemoveSubscription = null;
        }
        if (this._chipInteractionSubscription) {
            this._chipInteractionSubscription.unsubscribe();
            this._chipInteractionSubscription = null;
        }
        if (this._chipDestroyedSubscription) {
            this._chipDestroyedSubscription.unsubscribe();
            this._chipDestroyedSubscription = null;
        }
    };
    /** Dummy method for subclasses to override. Base chip set cannot be focused. */
    /**
     * Dummy method for subclasses to override. Base chip set cannot be focused.
     * @return {?}
     */
    MatChipSet.prototype.focus = /**
     * Dummy method for subclasses to override. Base chip set cannot be focused.
     * @return {?}
     */
    function () { };
    /**
     * Utility to ensure all indexes are valid.
     *
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of chips.
     */
    /**
     * Utility to ensure all indexes are valid.
     *
     * @protected
     * @param {?} index The index to be checked.
     * @return {?} True if the index is valid for our list of chips.
     */
    MatChipSet.prototype._isValidIndex = /**
     * Utility to ensure all indexes are valid.
     *
     * @protected
     * @param {?} index The index to be checked.
     * @return {?} True if the index is valid for our list of chips.
     */
    function (index) {
        return index >= 0 && index < this._chips.length;
    };
    /** Checks whether an event comes from inside a chip element. */
    /**
     * Checks whether an event comes from inside a chip element.
     * @protected
     * @param {?} event
     * @return {?}
     */
    MatChipSet.prototype._originatesFromChip = /**
     * Checks whether an event comes from inside a chip element.
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var currentElement = (/** @type {?} */ (event.target));
        while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('mdc-chip')) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    };
    MatChipSet.decorators = [
        { type: Component, args: [{selector: 'mat-chip-set',
                    template: '<ng-content></ng-content>',
                    styles: [".mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}.mdc-chip__icon--trailing[dir=rtl],[dir=rtl] .mdc-chip__icon--trailing{margin-left:-4px;margin-right:4px}.mdc-chip{border-radius:16px;height:32px;display:inline-flex;position:relative;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:0;cursor:pointer;-webkit-appearance:none}.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:-4px;margin-right:4px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl],.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:4px;margin-right:-4px}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;right:0;left:0;height:48px;transform:translateY(-50%)}.mdc-chip--exit{opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:0;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset 150ms 50ms cubic-bezier(.4,0,.6,1);stroke-width:2px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-chip__text:focus{outline:0}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width 150ms cubic-bezier(.4,0,.2,1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0s}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}@keyframes mdc-chip-entry{from{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1)}._mat-animation-noopable{transition:none;animation:none}.mat-mdc-chip{cursor:default;overflow:hidden;transform:translateZ(0)}@media (-ms-high-contrast:active){.mat-mdc-chip{outline:solid 1px}.mat-mdc-chip:focus{outline:dotted 2px}}.mat-mdc-chip:not(.mat-mdc-chip-disabled) div:focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):hover .mdc-chip__text::after{content:'';position:absolute;width:100%;height:100%;background:#000;opacity:.2;top:0;left:0;pointer-events:none}.mat-mdc-chip-disabled.mat-mdc-chip{opacity:.4}.mat-mdc-chip-disabled.mat-mdc-chip .mat-chip-row-focusable-text-content,.mat-mdc-chip-disabled.mat-mdc-chip .mat-mdc-chip-trailing-icon{pointer-events:none}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}input.mat-mdc-chip-input{flex:1 0 150px}"],
                    host: {
                        'class': 'mat-mdc-chip-set mdc-chip-set',
                        '[attr.role]': 'role',
                        // TODO: replace this binding with use of AriaDescriber
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                        '[id]': '_uid',
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MatChipSet.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
    MatChipSet.propDecorators = {
        disabled: [{ type: Input }],
        _chips: [{ type: ContentChildren, args: [MatChip,] }]
    };
    return MatChipSet;
}(_MatChipSetMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Change event object that is emitted when the chip listbox value has changed.
 */
var  /**
 * Change event object that is emitted when the chip listbox value has changed.
 */
MatChipListboxChange = /** @class */ (function () {
    function MatChipListboxChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatChipListboxChange;
}());
/**
 * Provider Expression that allows mat-chip-listbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * \@docs-private
 * @type {?}
 */
var MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return MatChipListbox; })),
    multi: true
};
/**
 * An extension of the MatChipSet component that supports chip selection.
 * Used with MatChipOption chips.
 */
var MatChipListbox = /** @class */ (function (_super) {
    __extends(MatChipListbox, _super);
    function MatChipListbox(_elementRef, _changeDetectorRef, _dir) {
        var _this = _super.call(this, _elementRef, _changeDetectorRef, _dir) || this;
        _this._elementRef = _elementRef;
        /**
         * Function when touched. Set as part of ControlValueAccessor implementation.
         * \@docs-private
         */
        _this._onTouched = (/**
         * @return {?}
         */
        function () { });
        /**
         * Function when changed. Set as part of ControlValueAccessor implementation.
         * \@docs-private
         */
        _this._onChange = (/**
         * @return {?}
         */
        function () { });
        _this._multiple = false;
        /**
         * Orientation of the chip list.
         */
        _this.ariaOrientation = 'horizontal';
        _this._selectable = true;
        _this._compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) { return o1 === o2; });
        _this._required = false;
        /**
         * Event emitted when the selected chip listbox value has been changed by the user.
         */
        _this.change = new EventEmitter();
        _this._chipSetAdapter.selectChipAtIndex = (/**
         * @param {?} index
         * @param {?} selected
         * @return {?}
         */
        function (index, selected) {
            _this._setSelected(index, selected);
        });
        // Reinitialize the foundation with our overridden adapter
        _this._chipSetFoundation = new MDCChipSetFoundation(_this._chipSetAdapter);
        _this._updateMdcSelectionClasses();
        return _this;
    }
    Object.defineProperty(MatChipListbox.prototype, "role", {
        /** The ARIA role applied to the chip listbox. */
        get: /**
         * The ARIA role applied to the chip listbox.
         * @return {?}
         */
        function () { return this.empty ? null : 'listbox'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipListbox.prototype, "multiple", {
        /** Whether the user should be allowed to select multiple chips. */
        get: /**
         * Whether the user should be allowed to select multiple chips.
         * @return {?}
         */
        function () { return this._multiple; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._multiple = coerceBooleanProperty(value);
            this._updateMdcSelectionClasses();
            this._syncListboxProperties();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipListbox.prototype, "selected", {
        /** The array of selected chips inside the chip listbox. */
        get: /**
         * The array of selected chips inside the chip listbox.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selectedChips = this._chips.toArray().filter((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.selected; }));
            return this.multiple ? selectedChips : selectedChips[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipListbox.prototype, "selectable", {
        /**
         * Whether or not this chip listbox is selectable.
         *
         * When a chip listbox is not selectable, the selected states for all
         * the chips inside the chip listbox are always ignored.
         */
        get: /**
         * Whether or not this chip listbox is selectable.
         *
         * When a chip listbox is not selectable, the selected states for all
         * the chips inside the chip listbox are always ignored.
         * @return {?}
         */
        function () { return this._selectable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectable = coerceBooleanProperty(value);
            this._updateMdcSelectionClasses();
            this._syncListboxProperties();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipListbox.prototype, "compareWith", {
        /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         */
        get: /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */
        function () { return this._compareWith; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._compareWith = fn;
            this._initializeSelection();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipListbox.prototype, "required", {
        /** Whether this chip listbox is required. */
        get: /**
         * Whether this chip listbox is required.
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipListbox.prototype, "chipSelectionChanges", {
        /** Combined stream of all of the child chips' selection change events. */
        get: /**
         * Combined stream of all of the child chips' selection change events.
         * @return {?}
         */
        function () {
            return merge.apply(void 0, this._chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.selectionChange; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipListbox.prototype, "chipFocusChanges", {
        /** Combined stream of all of the child chips' focus events. */
        get: /**
         * Combined stream of all of the child chips' focus events.
         * @return {?}
         */
        function () {
            return merge.apply(void 0, this._chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip._onFocus; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipListbox.prototype, "chipBlurChanges", {
        /** Combined stream of all of the child chips' blur events. */
        get: /**
         * Combined stream of all of the child chips' blur events.
         * @return {?}
         */
        function () {
            return merge.apply(void 0, this._chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip._onBlur; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipListbox.prototype, "value", {
        /** The value of the listbox, which is the combined value of the selected chips. */
        get: /**
         * The value of the listbox, which is the combined value of the selected chips.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.writeValue(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatChipListbox.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngAfterContentInit.call(this);
        this._initKeyManager();
        this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () {
            // Update listbox selectable/multiple properties on chips
            _this._syncListboxProperties();
            // Reset chips selected/deselected status
            _this._initializeSelection();
            // Check to see if we have a destroyed chip and need to refocus
            _this._updateFocusForDestroyedChips();
        }));
    };
    /**
     * Focuses the first selected chip in this chip listbox, or the first non-disabled chip when there
     * are no selected chips.
     */
    /**
     * Focuses the first selected chip in this chip listbox, or the first non-disabled chip when there
     * are no selected chips.
     * @return {?}
     */
    MatChipListbox.prototype.focus = /**
     * Focuses the first selected chip in this chip listbox, or the first non-disabled chip when there
     * are no selected chips.
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        var firstSelectedChip = this._getFirstSelectedChip();
        if (firstSelectedChip) {
            /** @type {?} */
            var firstSelectedChipIndex = this._chips.toArray().indexOf(firstSelectedChip);
            this._keyManager.setActiveItem(firstSelectedChipIndex);
        }
        else if (this._chips.length > 0) {
            this._keyManager.setFirstItemActive();
        }
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    MatChipListbox.prototype.writeValue = /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this._chips) {
            this._setSelectionByValue(value, false);
        }
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    MatChipListbox.prototype.registerOnChange = /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    MatChipListbox.prototype.registerOnTouched = /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} isDisabled
     * @return {?}
     */
    MatChipListbox.prototype.setDisabledState = /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Selects all chips with value. */
    /**
     * Selects all chips with value.
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?}
     */
    MatChipListbox.prototype._setSelectionByValue = /**
     * Selects all chips with value.
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?}
     */
    function (value, isUserInput) {
        var _this = this;
        if (isUserInput === void 0) { isUserInput = true; }
        this._clearSelection();
        if (Array.isArray(value)) {
            value.forEach((/**
             * @param {?} currentValue
             * @return {?}
             */
            function (currentValue) { return _this._selectValue(currentValue, isUserInput); }));
        }
        else {
            /** @type {?} */
            var correspondingChip = this._selectValue(value, isUserInput);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.
            if (correspondingChip) {
                if (isUserInput) {
                    this._keyManager.setActiveItem(correspondingChip);
                }
            }
        }
    };
    /** Selects or deselects a chip by id. */
    /**
     * Selects or deselects a chip by id.
     * @param {?} index
     * @param {?} selected
     * @return {?}
     */
    MatChipListbox.prototype._setSelected = /**
     * Selects or deselects a chip by id.
     * @param {?} index
     * @param {?} selected
     * @return {?}
     */
    function (index, selected) {
        /** @type {?} */
        var chip = this._chips.toArray()[index];
        if (chip && chip.selected != selected) {
            chip.toggleSelected(true);
        }
    };
    /** When blurred, marks the field as touched when focus moved outside the chip listbox. */
    /**
     * When blurred, marks the field as touched when focus moved outside the chip listbox.
     * @return {?}
     */
    MatChipListbox.prototype._blur = /**
     * When blurred, marks the field as touched when focus moved outside the chip listbox.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        if (!this.focused) {
            this._keyManager.setActiveItem(-1);
        }
        // Wait to see if focus moves to an indivdual chip.
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (!_this.focused) {
                _this._propagateChanges();
                _this._markAsTouched();
            }
        }));
    };
    /**
     * Removes the `tabindex` from the chip listbox and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the listbox from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    /**
     * Removes the `tabindex` from the chip listbox and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the listbox from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     * @return {?}
     */
    MatChipListbox.prototype._allowFocusEscape = /**
     * Removes the `tabindex` from the chip listbox and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the listbox from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var previousTabIndex = this.tabIndex;
        if (this.tabIndex !== -1) {
            this.tabIndex = -1;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.tabIndex = previousTabIndex;
                _this._changeDetectorRef.markForCheck();
            }));
        }
    };
    /**
     * Handles custom keyboard shortcuts, and passes other keyboard events to the keyboard manager.
     */
    /**
     * Handles custom keyboard shortcuts, and passes other keyboard events to the keyboard manager.
     * @param {?} event
     * @return {?}
     */
    MatChipListbox.prototype._keydown = /**
     * Handles custom keyboard shortcuts, and passes other keyboard events to the keyboard manager.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._originatesFromChip(event)) {
            if (event.keyCode === HOME) {
                this._keyManager.setFirstItemActive();
                event.preventDefault();
            }
            else if (event.keyCode === END) {
                this._keyManager.setLastItemActive();
                event.preventDefault();
            }
            else {
                this._keyManager.onKeydown(event);
            }
        }
    };
    /** Marks the field as touched */
    /**
     * Marks the field as touched
     * @private
     * @return {?}
     */
    MatChipListbox.prototype._markAsTouched = /**
     * Marks the field as touched
     * @private
     * @return {?}
     */
    function () {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
    };
    /** Emits change event to set the model value. */
    /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    MatChipListbox.prototype._propagateChanges = /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    function (fallbackValue) {
        /** @type {?} */
        var valueToEmit = null;
        if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.value; }));
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.change.emit(new MatChipListboxChange(this, valueToEmit));
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Initializes the chip listbox selection state to reflect any chips that were preselected.
     */
    /**
     * Initializes the chip listbox selection state to reflect any chips that were preselected.
     * @private
     * @return {?}
     */
    MatChipListbox.prototype._initializeSelection = /**
     * Initializes the chip listbox selection state to reflect any chips that were preselected.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            _this._chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) {
                if (chip.selected) {
                    _this._chipSetFoundation.select(chip.id);
                }
            }));
        }));
    };
    /**
     * Deselects every chip in the listbox.
     * @param skip Chip that should not be deselected.
     */
    /**
     * Deselects every chip in the listbox.
     * @private
     * @param {?=} skip Chip that should not be deselected.
     * @return {?}
     */
    MatChipListbox.prototype._clearSelection = /**
     * Deselects every chip in the listbox.
     * @private
     * @param {?=} skip Chip that should not be deselected.
     * @return {?}
     */
    function (skip) {
        this._chips.forEach((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) {
            if (chip !== skip) {
                chip.deselect();
            }
        }));
    };
    /**
     * Finds and selects the chip based on its value.
     * @returns Chip that has the corresponding value.
     */
    /**
     * Finds and selects the chip based on its value.
     * @private
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?} Chip that has the corresponding value.
     */
    MatChipListbox.prototype._selectValue = /**
     * Finds and selects the chip based on its value.
     * @private
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?} Chip that has the corresponding value.
     */
    function (value, isUserInput) {
        var _this = this;
        if (isUserInput === void 0) { isUserInput = true; }
        /** @type {?} */
        var correspondingChip = this._chips.find((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) {
            return chip.value != null && _this._compareWith(chip.value, value);
        }));
        if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
        }
        return correspondingChip;
    };
    /** Syncs the chip-listbox selection state with the individual chips. */
    /**
     * Syncs the chip-listbox selection state with the individual chips.
     * @private
     * @return {?}
     */
    MatChipListbox.prototype._syncListboxProperties = /**
     * Syncs the chip-listbox selection state with the individual chips.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._chips) {
            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this._chips.forEach((/**
                 * @param {?} chip
                 * @return {?}
                 */
                function (chip) {
                    chip._chipListMultiple = _this.multiple;
                    chip.chipListSelectable = _this._selectable;
                    chip._changeDetectorRef.markForCheck();
                }));
            }));
        }
    };
    /** Sets the mdc classes for single vs multi selection. */
    /**
     * Sets the mdc classes for single vs multi selection.
     * @private
     * @return {?}
     */
    MatChipListbox.prototype._updateMdcSelectionClasses = /**
     * Sets the mdc classes for single vs multi selection.
     * @private
     * @return {?}
     */
    function () {
        this._setMdcClass('mdc-chip-set--filter', this.selectable && this.multiple);
        this._setMdcClass('mdc-chip-set--choice', this.selectable && !this.multiple);
    };
    /** Initializes the key manager to manage focus. */
    /**
     * Initializes the key manager to manage focus.
     * @private
     * @return {?}
     */
    MatChipListbox.prototype._initKeyManager = /**
     * Initializes the key manager to manage focus.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._keyManager = new FocusKeyManager(this._chips)
            .withWrap()
            .withVerticalOrientation()
            .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
        if (this._dir) {
            this._dir.change
                .pipe(takeUntil(this._destroyed))
                .subscribe((/**
             * @param {?} dir
             * @return {?}
             */
            function (dir) { return _this._keyManager.withHorizontalOrientation(dir); }));
        }
        this._keyManager.tabOut.pipe(takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._allowFocusEscape();
        }));
    };
    /** Returns the first selected chip in this listbox, or undefined if no chips are selected. */
    /**
     * Returns the first selected chip in this listbox, or undefined if no chips are selected.
     * @private
     * @return {?}
     */
    MatChipListbox.prototype._getFirstSelectedChip = /**
     * Returns the first selected chip in this listbox, or undefined if no chips are selected.
     * @private
     * @return {?}
     */
    function () {
        if (Array.isArray(this.selected)) {
            return this.selected.length ? this.selected[0] : undefined;
        }
        else {
            return this.selected;
        }
    };
    /** Unsubscribes from all chip events. */
    /**
     * Unsubscribes from all chip events.
     * @protected
     * @return {?}
     */
    MatChipListbox.prototype._dropSubscriptions = /**
     * Unsubscribes from all chip events.
     * @protected
     * @return {?}
     */
    function () {
        _super.prototype._dropSubscriptions.call(this);
        if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();
            this._chipSelectionSubscription = null;
        }
        if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();
            this._chipBlurSubscription = null;
        }
        if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();
            this._chipFocusSubscription = null;
        }
    };
    /** Subscribes to events on the child chips. */
    /**
     * Subscribes to events on the child chips.
     * @protected
     * @return {?}
     */
    MatChipListbox.prototype._subscribeToChipEvents = /**
     * Subscribes to events on the child chips.
     * @protected
     * @return {?}
     */
    function () {
        _super.prototype._subscribeToChipEvents.call(this);
        this._listenToChipsSelection();
        this._listenToChipsFocus();
        this._listenToChipsBlur();
    };
    /** Subscribes to chip focus events. */
    /**
     * Subscribes to chip focus events.
     * @private
     * @return {?}
     */
    MatChipListbox.prototype._listenToChipsFocus = /**
     * Subscribes to chip focus events.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipFocusSubscription = this.chipFocusChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var chipIndex = _this._chips.toArray().indexOf((/** @type {?} */ (event.chip)));
            if (_this._isValidIndex(chipIndex)) {
                _this._keyManager.updateActiveItemIndex(chipIndex);
            }
        }));
    };
    /** Subscribes to chip blur events. */
    /**
     * Subscribes to chip blur events.
     * @private
     * @return {?}
     */
    MatChipListbox.prototype._listenToChipsBlur = /**
     * Subscribes to chip blur events.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipBlurSubscription = this.chipBlurChanges.subscribe((/**
         * @return {?}
         */
        function () {
            _this._blur();
        }));
    };
    /** Subscribes to selection changes in the option chips. */
    /**
     * Subscribes to selection changes in the option chips.
     * @private
     * @return {?}
     */
    MatChipListbox.prototype._listenToChipsSelection = /**
     * Subscribes to selection changes in the option chips.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipSelectionSubscription = this.chipSelectionChanges.subscribe((/**
         * @param {?} chipSelectionChange
         * @return {?}
         */
        function (chipSelectionChange) {
            _this._chipSetFoundation.handleChipSelection(chipSelectionChange.source.id, chipSelectionChange.selected, false);
            if (chipSelectionChange.isUserInput) {
                _this._propagateChanges();
            }
        }));
    };
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     */
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     * @private
     * @return {?}
     */
    MatChipListbox.prototype._updateFocusForDestroyedChips = /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     * @private
     * @return {?}
     */
    function () {
        // Move focus to the closest chip. If no other chips remain, focus the chip-listbox itself.
        if (this._lastDestroyedChipIndex != null) {
            if (this._chips.length) {
                /** @type {?} */
                var newChipIndex = Math.min(this._lastDestroyedChipIndex, this._chips.length - 1);
                this._keyManager.setActiveItem(newChipIndex);
            }
            else {
                this.focus();
            }
        }
        this._lastDestroyedChipIndex = null;
    };
    MatChipListbox.decorators = [
        { type: Component, args: [{selector: 'mat-chip-listbox',
                    template: '<ng-content></ng-content>',
                    styles: [".mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}.mdc-chip__icon--trailing[dir=rtl],[dir=rtl] .mdc-chip__icon--trailing{margin-left:-4px;margin-right:4px}.mdc-chip{border-radius:16px;height:32px;display:inline-flex;position:relative;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:0;cursor:pointer;-webkit-appearance:none}.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:-4px;margin-right:4px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl],.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:4px;margin-right:-4px}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;right:0;left:0;height:48px;transform:translateY(-50%)}.mdc-chip--exit{opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:0;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset 150ms 50ms cubic-bezier(.4,0,.6,1);stroke-width:2px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-chip__text:focus{outline:0}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width 150ms cubic-bezier(.4,0,.2,1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0s}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}@keyframes mdc-chip-entry{from{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1)}._mat-animation-noopable{transition:none;animation:none}.mat-mdc-chip{cursor:default;overflow:hidden;transform:translateZ(0)}@media (-ms-high-contrast:active){.mat-mdc-chip{outline:solid 1px}.mat-mdc-chip:focus{outline:dotted 2px}}.mat-mdc-chip:not(.mat-mdc-chip-disabled) div:focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):hover .mdc-chip__text::after{content:'';position:absolute;width:100%;height:100%;background:#000;opacity:.2;top:0;left:0;pointer-events:none}.mat-mdc-chip-disabled.mat-mdc-chip{opacity:.4}.mat-mdc-chip-disabled.mat-mdc-chip .mat-chip-row-focusable-text-content,.mat-mdc-chip-disabled.mat-mdc-chip .mat-mdc-chip-trailing-icon{pointer-events:none}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}input.mat-mdc-chip-input{flex:1 0 150px}"],
                    inputs: ['tabIndex'],
                    host: {
                        'class': 'mat-mdc-chip-set mat-mdc-chip-listbox mdc-chip-set',
                        '[attr.role]': 'role',
                        '[tabIndex]': 'empty ? -1 : tabIndex',
                        // TODO: replace this binding with use of AriaDescriber
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                        '[attr.aria-required]': 'required.toString()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-multiselectable]': 'multiple',
                        '[attr.aria-orientation]': 'ariaOrientation',
                        '[class.mat-mdc-chip-list-disabled]': 'disabled',
                        '[class.mat-mdc-chip-list-required]': 'required',
                        '(focus)': 'focus()',
                        '(blur)': '_blur()',
                        '(keydown)': '_keydown($event)',
                        '[id]': '_uid',
                    },
                    providers: [MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MatChipListbox.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
    MatChipListbox.propDecorators = {
        multiple: [{ type: Input }],
        ariaOrientation: [{ type: Input, args: ['aria-orientation',] }],
        selectable: [{ type: Input }],
        compareWith: [{ type: Input }],
        required: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }],
        _chips: [{ type: ContentChildren, args: [MatChipOption, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    },] }]
    };
    return MatChipListbox;
}(MatChipSet));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A version of GridKeyManager where the cells are HTMLElements, and focus()
 * is called on a cell when it becomes active.
 */
var /**
 * A version of GridKeyManager where the cells are HTMLElements, and focus()
 * is called on a cell when it becomes active.
 */
GridFocusKeyManager = /** @class */ (function (_super) {
    __extends(GridFocusKeyManager, _super);
    function GridFocusKeyManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    GridFocusKeyManager.prototype.setActiveCell = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        _super.prototype.setActiveCell.call(this, cell);
        if (this.activeCell) {
            this.activeCell.focus();
        }
    };
    return GridFocusKeyManager;
}(GridKeyManager));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Change event object that is emitted when the chip grid value has changed.
 */
var  /**
 * Change event object that is emitted when the chip grid value has changed.
 */
MatChipGridChange = /** @class */ (function () {
    function MatChipGridChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatChipGridChange;
}());
/**
 * Boilerplate for applying mixins to MatChipGrid.
 * \@docs-private
 */
var /**
 * Boilerplate for applying mixins to MatChipGrid.
 * \@docs-private
 */
MatChipGridBase = /** @class */ (function (_super) {
    __extends(MatChipGridBase, _super);
    function MatChipGridBase(_elementRef, _changeDetectorRef, _dir, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        var _this = _super.call(this, _elementRef, _changeDetectorRef, _dir) || this;
        _this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        _this._parentForm = _parentForm;
        _this._parentFormGroup = _parentFormGroup;
        _this.ngControl = ngControl;
        return _this;
    }
    return MatChipGridBase;
}(MatChipSet));
/** @type {?} */
var _MatChipGridMixinBase = mixinErrorState(MatChipGridBase);
/**
 * An extension of the MatChipSet component used with MatChipRow chips and
 * the matChipInputFor directive.
 */
var MatChipGrid = /** @class */ (function (_super) {
    __extends(MatChipGrid, _super);
    function MatChipGrid(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
        var _this = _super.call(this, _elementRef, _changeDetectorRef, _dir, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
        _this.ngControl = ngControl;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        _this.controlType = 'mat-chip-grid';
        /**
         * Function when touched. Set as part of ControlValueAccessor implementation.
         * \@docs-private
         */
        _this._onTouched = (/**
         * @return {?}
         */
        function () { });
        /**
         * Function when changed. Set as part of ControlValueAccessor implementation.
         * \@docs-private
         */
        _this._onChange = (/**
         * @return {?}
         */
        function () { });
        _this._required = false;
        /**
         * Emits when the chip grid value has been changed by the user.
         */
        _this.change = new EventEmitter();
        /**
         * Emits whenever the raw value of the chip-grid changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */
        _this.valueChange = new EventEmitter();
        if (_this.ngControl) {
            _this.ngControl.valueAccessor = _this;
        }
        return _this;
    }
    Object.defineProperty(MatChipGrid.prototype, "disabled", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this.ngControl ? !!this.ngControl.disabled : this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = coerceBooleanProperty(value);
            this._syncChipsState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipGrid.prototype, "id", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._chipInput.id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipGrid.prototype, "empty", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._chipInput.empty && this._chips.length === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipGrid.prototype, "role", {
        /** The ARIA role applied to the chip grid. */
        get: /**
         * The ARIA role applied to the chip grid.
         * @return {?}
         */
        function () { return this.empty ? null : 'grid'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipGrid.prototype, "placeholder", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._chipInput ? this._chipInput.placeholder : this._placeholder;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipGrid.prototype, "focused", {
        /** Whether any chips or the matChipInput inside of this chip-grid has focus. */
        get: /**
         * Whether any chips or the matChipInput inside of this chip-grid has focus.
         * @return {?}
         */
        function () { return this._chipInput.focused || this._hasFocusedChip(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipGrid.prototype, "required", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = coerceBooleanProperty(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipGrid.prototype, "shouldLabelFloat", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return !this.empty || this.focused; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipGrid.prototype, "value", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipGrid.prototype, "chipBlurChanges", {
        /** Combined stream of all of the child chips' blur events. */
        get: /**
         * Combined stream of all of the child chips' blur events.
         * @return {?}
         */
        function () {
            return merge.apply(void 0, this._chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip._onBlur; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipGrid.prototype, "chipFocusChanges", {
        /** Combined stream of all of the child chips' focus events. */
        get: /**
         * Combined stream of all of the child chips' focus events.
         * @return {?}
         */
        function () {
            return merge.apply(void 0, this._chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip._onFocus; })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatChipGrid.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngAfterContentInit.call(this);
        this._initKeyManager();
        this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () {
            // Check to see if we have a destroyed chip and need to refocus
            _this._updateFocusForDestroyedChips();
            _this.stateChanges.next();
        }));
    };
    /**
     * @return {?}
     */
    MatChipGrid.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (!this._chipInput) {
            throw Error('mat-chip-grid must be used in combination with matChipInputFor.');
        }
    };
    /**
     * @return {?}
     */
    MatChipGrid.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
    };
    /**
     * @return {?}
     */
    MatChipGrid.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this.stateChanges.complete();
    };
    /** Associates an HTML input element with this chip grid. */
    /**
     * Associates an HTML input element with this chip grid.
     * @param {?} inputElement
     * @return {?}
     */
    MatChipGrid.prototype.registerInput = /**
     * Associates an HTML input element with this chip grid.
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        this._chipInput = inputElement;
        this._setMdcClass('mdc-chip-set--input', true);
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} event
     * @return {?}
     */
    MatChipGrid.prototype.onContainerClick = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._originatesFromChip(event) && !this.disabled) {
            this.focus();
        }
    };
    /**
     * Focuses the first chip in this chip grid, or the associated input when there
     * are no eligible chips.
     */
    /**
     * Focuses the first chip in this chip grid, or the associated input when there
     * are no eligible chips.
     * @return {?}
     */
    MatChipGrid.prototype.focus = /**
     * Focuses the first chip in this chip grid, or the associated input when there
     * are no eligible chips.
     * @return {?}
     */
    function () {
        if (this.disabled || this._chipInput.focused) {
            return;
        }
        if (this._chips.length > 0) {
            this._keyManager.setFirstCellActive();
        }
        else {
            this._focusInput();
        }
        this.stateChanges.next();
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    MatChipGrid.prototype.setDescribedByIds = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    function (ids) { this._ariaDescribedby = ids.join(' '); };
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    MatChipGrid.prototype.writeValue = /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // The user is responsible for creating the child chips, so we just store the value.
        this._value = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    MatChipGrid.prototype.registerOnChange = /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    MatChipGrid.prototype.registerOnTouched = /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} isDisabled
     * @return {?}
     */
    MatChipGrid.prototype.setDisabledState = /**
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
    };
    /** When blurred, mark the field as touched when focus moved outside the chip grid. */
    /**
     * When blurred, mark the field as touched when focus moved outside the chip grid.
     * @return {?}
     */
    MatChipGrid.prototype._blur = /**
     * When blurred, mark the field as touched when focus moved outside the chip grid.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        // Check whether the focus moved to chip input.
        // If the focus is not moved to chip input, mark the field as touched. If the focus moved
        // to chip input, do nothing.
        // Timeout is needed to wait for the focus() event trigger on chip input.
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (!_this.focused) {
                _this._keyManager.setActiveCell({ row: -1, column: -1 });
                _this._propagateChanges();
                _this._markAsTouched();
            }
        }));
    };
    /**
     * Removes the `tabindex` from the chip grid and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the grid from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    /**
     * Removes the `tabindex` from the chip grid and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the grid from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     * @return {?}
     */
    MatChipGrid.prototype._allowFocusEscape = /**
     * Removes the `tabindex` from the chip grid and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the grid from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._chipInput.focused) {
            return;
        }
        /** @type {?} */
        var previousTabIndex = this.tabIndex;
        if (this.tabIndex !== -1) {
            this.tabIndex = -1;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.tabIndex = previousTabIndex;
                _this._changeDetectorRef.markForCheck();
            }));
        }
    };
    /** Handles custom keyboard events. */
    /**
     * Handles custom keyboard events.
     * @param {?} event
     * @return {?}
     */
    MatChipGrid.prototype._keydown = /**
     * Handles custom keyboard events.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        // If they are on an empty input and hit backspace, focus the last chip
        if (event.keyCode === BACKSPACE && this._isEmptyInput(target)) {
            if (this._chips.length) {
                this._keyManager.setLastCellActive();
            }
            event.preventDefault();
        }
        else if (event.keyCode === TAB && target.id !== (/** @type {?} */ (this._chipInput)).id) {
            this._allowFocusEscape();
        }
        else if (this._originatesFromChip(event)) {
            this._keyManager.onKeydown(event);
        }
        this.stateChanges.next();
    };
    /** Unsubscribes from all chip events. */
    /**
     * Unsubscribes from all chip events.
     * @protected
     * @return {?}
     */
    MatChipGrid.prototype._dropSubscriptions = /**
     * Unsubscribes from all chip events.
     * @protected
     * @return {?}
     */
    function () {
        _super.prototype._dropSubscriptions.call(this);
        if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();
            this._chipBlurSubscription = null;
        }
        if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();
            this._chipFocusSubscription = null;
        }
    };
    /** Subscribes to events on the child chips. */
    /**
     * Subscribes to events on the child chips.
     * @protected
     * @return {?}
     */
    MatChipGrid.prototype._subscribeToChipEvents = /**
     * Subscribes to events on the child chips.
     * @protected
     * @return {?}
     */
    function () {
        _super.prototype._subscribeToChipEvents.call(this);
        this._listenToChipsFocus();
        this._listenToChipsBlur();
    };
    /** Initializes the key manager to manage focus. */
    /**
     * Initializes the key manager to manage focus.
     * @private
     * @return {?}
     */
    MatChipGrid.prototype._initKeyManager = /**
     * Initializes the key manager to manage focus.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._keyManager = new GridFocusKeyManager(this._chips)
            .withDirectionality(this._dir ? this._dir.value : 'ltr');
        if (this._dir) {
            this._dir.change
                .pipe(takeUntil(this._destroyed))
                .subscribe((/**
             * @param {?} dir
             * @return {?}
             */
            function (dir) { return _this._keyManager.withDirectionality(dir); }));
        }
    };
    /** Subscribes to chip focus events. */
    /**
     * Subscribes to chip focus events.
     * @private
     * @return {?}
     */
    MatChipGrid.prototype._listenToChipsFocus = /**
     * Subscribes to chip focus events.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipFocusSubscription = this.chipFocusChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var chipIndex = _this._chips.toArray().indexOf((/** @type {?} */ (event.chip)));
            if (_this._isValidIndex(chipIndex)) {
                _this._keyManager.updateActiveCell({ row: chipIndex, column: 0 });
            }
        }));
    };
    /** Subscribes to chip blur events. */
    /**
     * Subscribes to chip blur events.
     * @private
     * @return {?}
     */
    MatChipGrid.prototype._listenToChipsBlur = /**
     * Subscribes to chip blur events.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipBlurSubscription = this.chipBlurChanges.subscribe((/**
         * @return {?}
         */
        function () {
            _this._blur();
            _this.stateChanges.next();
        }));
    };
    /** Emits change event to set the model value. */
    /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    MatChipGrid.prototype._propagateChanges = /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    function (fallbackValue) {
        /** @type {?} */
        var valueToEmit = this._chips.length ? this._chips.toArray().map((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) { return chip.value; })) : fallbackValue;
        this._value = valueToEmit;
        this.change.emit(new MatChipGridChange(this, valueToEmit));
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
    };
    /** Mark the field as touched */
    /**
     * Mark the field as touched
     * @private
     * @return {?}
     */
    MatChipGrid.prototype._markAsTouched = /**
     * Mark the field as touched
     * @private
     * @return {?}
     */
    function () {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    };
    /**
     * If the amount of chips changed, we need to focus the next closest chip.
     */
    /**
     * If the amount of chips changed, we need to focus the next closest chip.
     * @private
     * @return {?}
     */
    MatChipGrid.prototype._updateFocusForDestroyedChips = /**
     * If the amount of chips changed, we need to focus the next closest chip.
     * @private
     * @return {?}
     */
    function () {
        // Move focus to the closest chip. If no other chips remain, focus the chip-grid itself.
        if (this._lastDestroyedChipIndex != null) {
            if (this._chips.length) {
                /** @type {?} */
                var newChipIndex = Math.min(this._lastDestroyedChipIndex, this._chips.length - 1);
                this._keyManager.setActiveCell({
                    row: newChipIndex,
                    column: this._keyManager.activeColumnIndex
                });
            }
            else {
                this.focus();
            }
        }
        this._lastDestroyedChipIndex = null;
    };
    /** Focus input element. */
    /**
     * Focus input element.
     * @private
     * @return {?}
     */
    MatChipGrid.prototype._focusInput = /**
     * Focus input element.
     * @private
     * @return {?}
     */
    function () {
        this._chipInput.focus();
    };
    /** Returns true if element is an input with no value. */
    /**
     * Returns true if element is an input with no value.
     * @private
     * @param {?} element
     * @return {?}
     */
    MatChipGrid.prototype._isEmptyInput = /**
     * Returns true if element is an input with no value.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element && element.id === (/** @type {?} */ (this._chipInput)).id) {
            return this._chipInput.empty;
        }
        return false;
    };
    MatChipGrid.decorators = [
        { type: Component, args: [{selector: 'mat-chip-grid',
                    template: '<ng-content></ng-content>',
                    styles: [".mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}.mdc-chip__icon--trailing[dir=rtl],[dir=rtl] .mdc-chip__icon--trailing{margin-left:-4px;margin-right:4px}.mdc-chip{border-radius:16px;height:32px;display:inline-flex;position:relative;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:0;cursor:pointer;-webkit-appearance:none}.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:-4px;margin-right:4px}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl],.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-left:4px;margin-right:-4px}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;right:0;left:0;height:48px;transform:translateY(-50%)}.mdc-chip--exit{opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:0;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset 150ms 50ms cubic-bezier(.4,0,.6,1);stroke-width:2px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-chip__text:focus{outline:0}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width 150ms cubic-bezier(.4,0,.2,1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0s}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}@keyframes mdc-chip-entry{from{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1)}._mat-animation-noopable{transition:none;animation:none}.mat-mdc-chip{cursor:default;overflow:hidden;transform:translateZ(0)}@media (-ms-high-contrast:active){.mat-mdc-chip{outline:solid 1px}.mat-mdc-chip:focus{outline:dotted 2px}}.mat-mdc-chip:not(.mat-mdc-chip-disabled) div:focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):focus .mdc-chip__text::after,.mat-mdc-chip:not(.mat-mdc-chip-disabled):hover .mdc-chip__text::after{content:'';position:absolute;width:100%;height:100%;background:#000;opacity:.2;top:0;left:0;pointer-events:none}.mat-mdc-chip-disabled.mat-mdc-chip{opacity:.4}.mat-mdc-chip-disabled.mat-mdc-chip .mat-chip-row-focusable-text-content,.mat-mdc-chip-disabled.mat-mdc-chip .mat-mdc-chip-trailing-icon{pointer-events:none}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}input.mat-mdc-chip-input{flex:1 0 150px}"],
                    inputs: ['tabIndex'],
                    host: {
                        'class': 'mat-mdc-chip-set mat-mdc-chip-grid mdc-chip-set',
                        '[attr.role]': 'role',
                        '[tabIndex]': '_chips && _chips.length === 0 ? -1 : tabIndex',
                        // TODO: replace this binding with use of AriaDescriber
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                        '[attr.aria-required]': 'required.toString()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-invalid]': 'errorState',
                        '[class.mat-mdc-chip-list-disabled]': 'disabled',
                        '[class.mat-mdc-chip-list-invalid]': 'errorState',
                        '[class.mat-mdc-chip-list-required]': 'required',
                        '(focus)': 'focus()',
                        '(blur)': '_blur()',
                        '(keydown)': '_keydown($event)',
                        '[id]': '_uid',
                    },
                    providers: [{ provide: MatFormFieldControl, useExisting: MatChipGrid }],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MatChipGrid.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] },
        { type: ErrorStateMatcher },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
    ]; };
    MatChipGrid.propDecorators = {
        disabled: [{ type: Input }],
        placeholder: [{ type: Input }, { type: Input }],
        required: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }],
        valueChange: [{ type: Output }],
        _chips: [{ type: ContentChildren, args: [MatChipRow, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    },] }]
    };
    return MatChipGrid;
}(_MatChipGridMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token to be used to override the default options for the chips module.
 * @type {?}
 */
var MAT_CHIPS_DEFAULT_OPTIONS = new InjectionToken('mat-chips-default-options');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Increasing integer for generating unique ids.
/** @type {?} */
var nextUniqueId = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of a `<mat-chip-grid>`.
 */
var MatChipInput = /** @class */ (function () {
    function MatChipInput(_elementRef, _defaultOptions) {
        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /**
         * Whether the control is focused.
         */
        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */
        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /**
         * Emitted when a chip is to be added.
         */
        this.chipEnd = new EventEmitter();
        /**
         * The input's placeholder text.
         */
        this.placeholder = '';
        /**
         * Unique id for the input.
         */
        this.id = "mat-chip-list-input-" + nextUniqueId++;
        this._disabled = false;
        this._inputElement = (/** @type {?} */ (this._elementRef.nativeElement));
    }
    Object.defineProperty(MatChipInput.prototype, "chipGrid", {
        /** Register input for chip list */
        set: /**
         * Register input for chip list
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._chipGrid = value;
                this._chipGrid.registerInput(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipInput.prototype, "addOnBlur", {
        /**
         * Whether or not the chipEnd event will be emitted when the input is blurred.
         */
        get: /**
         * Whether or not the chipEnd event will be emitted when the input is blurred.
         * @return {?}
         */
        function () { return this._addOnBlur; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._addOnBlur = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipInput.prototype, "disabled", {
        /** Whether the input is disabled. */
        get: /**
         * Whether the input is disabled.
         * @return {?}
         */
        function () { return this._disabled || (this._chipGrid && this._chipGrid.disabled); },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipInput.prototype, "empty", {
        /** Whether the input is empty. */
        get: /**
         * Whether the input is empty.
         * @return {?}
         */
        function () { return !this._inputElement.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatChipInput.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._chipGrid.stateChanges.next();
    };
    /** Utility method to make host definition/tests more clear. */
    /**
     * Utility method to make host definition/tests more clear.
     * @param {?=} event
     * @return {?}
     */
    MatChipInput.prototype._keydown = /**
     * Utility method to make host definition/tests more clear.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        // Allow the user's focus to escape when they're tabbing forward. Note that we don't
        // want to do this when going backwards, because focus should go back to the first chip.
        if (event && event.keyCode === TAB && !hasModifierKey(event, 'shiftKey')) {
            this._chipGrid._allowFocusEscape();
        }
        this._emitChipEnd(event);
    };
    /** Checks to see if the blur should emit the (chipEnd) event. */
    /**
     * Checks to see if the blur should emit the (chipEnd) event.
     * @return {?}
     */
    MatChipInput.prototype._blur = /**
     * Checks to see if the blur should emit the (chipEnd) event.
     * @return {?}
     */
    function () {
        if (this.addOnBlur) {
            this._emitChipEnd();
        }
        this.focused = false;
        // Blur the chip list if it is not focused
        if (!this._chipGrid.focused) {
            this._chipGrid._blur();
        }
        this._chipGrid.stateChanges.next();
    };
    /**
     * @return {?}
     */
    MatChipInput.prototype._focus = /**
     * @return {?}
     */
    function () {
        this.focused = true;
        this._chipGrid.stateChanges.next();
    };
    /** Checks to see if the (chipEnd) event needs to be emitted. */
    /**
     * Checks to see if the (chipEnd) event needs to be emitted.
     * @param {?=} event
     * @return {?}
     */
    MatChipInput.prototype._emitChipEnd = /**
     * Checks to see if the (chipEnd) event needs to be emitted.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (!this._inputElement.value && !!event) {
            this._chipGrid._keydown(event);
        }
        if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({ input: this._inputElement, value: this._inputElement.value });
            if (event) {
                event.preventDefault();
            }
        }
    };
    /**
     * @return {?}
     */
    MatChipInput.prototype._onInput = /**
     * @return {?}
     */
    function () {
        // Let chip list know whenever the value changes.
        this._chipGrid.stateChanges.next();
    };
    /** Focuses the input. */
    /**
     * Focuses the input.
     * @return {?}
     */
    MatChipInput.prototype.focus = /**
     * Focuses the input.
     * @return {?}
     */
    function () {
        this._inputElement.focus();
    };
    /** Checks whether a keycode is one of the configured separators. */
    /**
     * Checks whether a keycode is one of the configured separators.
     * @private
     * @param {?} event
     * @return {?}
     */
    MatChipInput.prototype._isSeparatorKey = /**
     * Checks whether a keycode is one of the configured separators.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (hasModifierKey(event)) {
            return false;
        }
        /** @type {?} */
        var separators = this.separatorKeyCodes;
        /** @type {?} */
        var keyCode = event.keyCode;
        return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
    };
    MatChipInput.decorators = [
        { type: Directive, args: [{
                    selector: 'input[matChipInputFor]',
                    exportAs: 'matChipInput, matChipInputFor',
                    host: {
                        'class': 'mat-mdc-chip-input mat-input-element',
                        '(keydown)': '_keydown($event)',
                        '(blur)': '_blur()',
                        '(focus)': '_focus()',
                        '(input)': '_onInput()',
                        '[id]': 'id',
                        '[attr.disabled]': 'disabled || null',
                        '[attr.placeholder]': 'placeholder || null',
                        '[attr.aria-invalid]': '_chipGrid && _chipGrid.ngControl ? _chipGrid.ngControl.invalid : null',
                    }
                },] },
    ];
    /** @nocollapse */
    MatChipInput.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] }
    ]; };
    MatChipInput.propDecorators = {
        chipGrid: [{ type: Input, args: ['matChipInputFor',] }],
        addOnBlur: [{ type: Input, args: ['matChipInputAddOnBlur',] }],
        separatorKeyCodes: [{ type: Input, args: ['matChipInputSeparatorKeyCodes',] }],
        chipEnd: [{ type: Output, args: ['matChipInputTokenEnd',] }],
        placeholder: [{ type: Input }],
        id: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return MatChipInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CHIP_DECLARATIONS = [
    MatChip,
    MatChipAvatar,
    MatChipCssInternalOnly,
    MatChipGrid,
    MatChipInput,
    MatChipListbox,
    MatChipOption,
    MatChipRemove,
    MatChipRow,
    MatChipSet,
    MatChipTrailingIcon,
];
var ɵ0 = ({
    separatorKeyCodes: [ENTER]
});
var MatChipsModule = /** @class */ (function () {
    function MatChipsModule() {
    }
    MatChipsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MatCommonModule, CommonModule],
                    exports: CHIP_DECLARATIONS,
                    declarations: CHIP_DECLARATIONS,
                    providers: [
                        ErrorStateMatcher,
                        {
                            provide: MAT_CHIPS_DEFAULT_OPTIONS,
                            useValue: (/** @type {?} */ (ɵ0))
                        }
                    ]
                },] },
    ];
    return MatChipsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatChipCssInternalOnly, MatChip, MatChipSelectionChange, MatChipOption, MatChipRow, MatChipSet, MatChipListboxChange, MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR, MatChipListbox, MatChipGridChange, MatChipGrid, MatChipsModule, MatChipInput, MAT_CHIPS_DEFAULT_OPTIONS, MatChipAvatar, MatChipTrailingIcon, MatChipRemove };
//# sourceMappingURL=mdc-chips.es5.js.map
