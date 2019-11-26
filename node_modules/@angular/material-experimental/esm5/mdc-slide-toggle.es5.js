/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, ChangeDetectionStrategy, Component, ViewEncapsulation, forwardRef, ViewChild, Input, Output, EventEmitter, ChangeDetectorRef, Attribute, Inject, Optional, NgModule } from '@angular/core';
import { MDCSwitchFoundation } from '@material/switch';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { numbers } from '@material/ripple';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token to be used to override the default options for `mat-slide-toggle`.
 * @type {?}
 */
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken('mat-slide-toggle-default-options', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    function () { return ({ disableToggleValue: false, disableDragValue: false }); })
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Increasing integer for generating unique ids for slide-toggle components.
/** @type {?} */
var nextUniqueId = 0;
/**
 * \@docs-private
 * @type {?}
 */
var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return MatSlideToggle; })),
    multi: true
};
/**
 * Change event object emitted by a MatSlideToggle.
 */
var  /**
 * Change event object emitted by a MatSlideToggle.
 */
MatSlideToggleChange = /** @class */ (function () {
    function MatSlideToggleChange(source, checked) {
        this.source = source;
        this.checked = checked;
    }
    return MatSlideToggleChange;
}());
var MatSlideToggle = /** @class */ (function () {
    function MatSlideToggle(_changeDetectorRef, tabIndex, defaults, _animationMode) {
        var _this = this;
        this._changeDetectorRef = _changeDetectorRef;
        this.defaults = defaults;
        this._animationMode = _animationMode;
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this._uniqueId = "mat-slide-toggle-" + ++nextUniqueId;
        this._required = false;
        this._checked = false;
        this._adapter = {
            addClass: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) {
                _this._toggleClass(className, true);
            }),
            removeClass: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) {
                _this._toggleClass(className, false);
            }),
            setNativeControlChecked: (/**
             * @param {?} checked
             * @return {?}
             */
            function (checked) {
                _this._checked = checked;
            }),
            setNativeControlDisabled: (/**
             * @param {?} disabled
             * @return {?}
             */
            function (disabled) {
                _this._disabled = disabled;
            }),
        };
        /**
         * The set of classes that should be applied to the native input.
         */
        this._classes = { 'mdc-switch': true };
        /**
         * Configuration for the underlying ripple.
         */
        this._rippleAnimation = {
            enterDuration: numbers.DEACTIVATION_TIMEOUT_MS,
            exitDuration: numbers.FG_DEACTIVATION_MS,
        };
        /**
         * The color palette  for this slide toggle.
         */
        this.color = 'accent';
        /**
         * Name value will be applied to the input element if present.
         */
        this.name = null;
        /**
         * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.
         */
        this.id = this._uniqueId;
        /**
         * Whether the label should appear after or before the slide-toggle. Defaults to 'after'.
         */
        this.labelPosition = 'after';
        /**
         * Used to set the aria-label attribute on the underlying input element.
         */
        this.ariaLabel = null;
        /**
         * Used to set the aria-labelledby attribute on the underlying input element.
         */
        this.ariaLabelledby = null;
        this._disableRipple = false;
        this._disabled = false;
        /**
         * An event will be dispatched each time the slide-toggle changes its value.
         */
        this.change = new EventEmitter();
        /**
         * Event will be dispatched each time the slide-toggle input is toggled.
         */
        this.toggleChange = new EventEmitter();
        /**
         * An event will be dispatched each time the slide-toggle is dragged.
         * This event is always emitted when the user drags the slide toggle to make a change greater
         * than 50%. It does not mean the slide toggle's value is changed. The event is not emitted when
         * the user toggles the slide toggle to change its value.
         * @deprecated No longer being used.
         * \@breaking-change 9.0.0
         */
        this.dragChange = new EventEmitter();
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    Object.defineProperty(MatSlideToggle.prototype, "tabIndex", {
        /** Tabindex for the input element. */
        get: /**
         * Tabindex for the input element.
         * @return {?}
         */
        function () { return this._tabIndex; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tabIndex = coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlideToggle.prototype, "required", {
        /** Whether the slide-toggle is required. */
        get: /**
         * Whether the slide-toggle is required.
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._required = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlideToggle.prototype, "checked", {
        /** Whether the slide-toggle element is checked or not. */
        get: /**
         * Whether the slide-toggle element is checked or not.
         * @return {?}
         */
        function () { return this._checked; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._checked = coerceBooleanProperty(value);
            if (this._foundation) {
                this._foundation.setChecked(this._checked);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlideToggle.prototype, "disableRipple", {
        /** Whether to disable the ripple on this checkbox. */
        get: /**
         * Whether to disable the ripple on this checkbox.
         * @return {?}
         */
        function () {
            return this._disableRipple;
        },
        set: /**
         * @param {?} disableRipple
         * @return {?}
         */
        function (disableRipple) {
            this._disableRipple = coerceBooleanProperty(disableRipple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlideToggle.prototype, "disabled", {
        /** Whether the slide toggle is disabled. */
        get: /**
         * Whether the slide toggle is disabled.
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._disabled = coerceBooleanProperty(disabled);
            if (this._foundation) {
                this._foundation.setDisabled(this._disabled);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlideToggle.prototype, "inputId", {
        /** Returns the unique id for the visual hidden input. */
        get: /**
         * Returns the unique id for the visual hidden input.
         * @return {?}
         */
        function () { return (this.id || this._uniqueId) + "-input"; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSlideToggle.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var foundation = this._foundation = new MDCSwitchFoundation(this._adapter);
        foundation.setDisabled(this.disabled);
        foundation.setChecked(this.checked);
    };
    /**
     * @return {?}
     */
    MatSlideToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._foundation) {
            this._foundation.destroy();
        }
    };
    /** Method being called whenever the underlying input emits a change event. */
    /**
     * Method being called whenever the underlying input emits a change event.
     * @param {?} event
     * @return {?}
     */
    MatSlideToggle.prototype._onChangeEvent = /**
     * Method being called whenever the underlying input emits a change event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        this.toggleChange.emit();
        this._foundation.handleChange(event);
        // When the slide toggle's config disabled toggle change event by setting
        // `disableToggleValue: true`, the slide toggle's value does not change,
        // and the checked state of the underlying input needs to be changed back.
        if (this.defaults.disableToggleValue) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
        }
        // Sync the value from the underlying input element with the component instance.
        this.checked = this._inputElement.nativeElement.checked;
        // Emit our custom change event only if the underlying input emitted one. This ensures that
        // there is no change event, when the checked state changes programmatically.
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
    };
    /** Method being called whenever the slide-toggle has been clicked. */
    /**
     * Method being called whenever the slide-toggle has been clicked.
     * @param {?} event
     * @return {?}
     */
    MatSlideToggle.prototype._onInputClick = /**
     * Method being called whenever the slide-toggle has been clicked.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    /** Implemented as part of ControlValueAccessor. */
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    MatSlideToggle.prototype.writeValue = /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = !!value;
        this._changeDetectorRef.markForCheck();
    };
    /** Implemented as part of ControlValueAccessor. */
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    MatSlideToggle.prototype.registerOnChange = /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /** Implemented as part of ControlValueAccessor. */
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    MatSlideToggle.prototype.registerOnTouched = /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /** Implemented as a part of ControlValueAccessor. */
    /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    MatSlideToggle.prototype.setDisabledState = /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    };
    /** Focuses the slide-toggle. */
    /**
     * Focuses the slide-toggle.
     * @return {?}
     */
    MatSlideToggle.prototype.focus = /**
     * Focuses the slide-toggle.
     * @return {?}
     */
    function () {
        this._inputElement.nativeElement.focus();
    };
    /** Toggles the checked state of the slide-toggle. */
    /**
     * Toggles the checked state of the slide-toggle.
     * @return {?}
     */
    MatSlideToggle.prototype.toggle = /**
     * Toggles the checked state of the slide-toggle.
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
        this._onChange(this.checked);
    };
    /** Handles blur events on the native input. */
    /**
     * Handles blur events on the native input.
     * @return {?}
     */
    MatSlideToggle.prototype._onBlur = /**
     * Handles blur events on the native input.
     * @return {?}
     */
    function () {
        var _this = this;
        // When a focused element becomes disabled, the browser *immediately* fires a blur event.
        // Angular does not expect events to be raised during change detection, so any state change
        // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
        // See https://github.com/angular/angular/issues/17793. To work around this, we defer
        // telling the form control it has been touched until the next tick.
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this._focused = false;
            _this._onTouched();
            _this._changeDetectorRef.markForCheck();
        }));
    };
    /** Toggles a class on the switch element. */
    /**
     * Toggles a class on the switch element.
     * @private
     * @param {?} cssClass
     * @param {?} active
     * @return {?}
     */
    MatSlideToggle.prototype._toggleClass = /**
     * Toggles a class on the switch element.
     * @private
     * @param {?} cssClass
     * @param {?} active
     * @return {?}
     */
    function (cssClass, active) {
        this._classes[cssClass] = active;
        this._changeDetectorRef.markForCheck();
    };
    MatSlideToggle.decorators = [
        { type: Component, args: [{selector: 'mat-slide-toggle',
                    template: "<div class=\"mdc-form-field\" [class.mdc-form-field--align-end]=\"labelPosition == 'before'\"><div [ngClass]=\"_classes\" #switch><div class=\"mdc-switch__track\"></div><div class=\"mdc-switch__thumb-underlay\"><div class=\"mat-mdc-slide-toggle-ripple\" mat-ripple [matRippleTrigger]=\"switch\" [matRippleDisabled]=\"disableRipple || disabled\" [matRippleCentered]=\"true\" [matRippleRadius]=\"24\" [matRippleAnimation]=\"_rippleAnimation\"></div><div class=\"mdc-switch__thumb\"><input #input class=\"mdc-switch__native-control\" type=\"checkbox\" role=\"switch\" [id]=\"inputId\" [required]=\"required\" [tabIndex]=\"tabIndex\" [checked]=\"checked\" [disabled]=\"disabled\" [attr.name]=\"name\" [attr.aria-checked]=\"checked.toString()\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" (change)=\"_onChangeEvent($event)\" (click)=\"_onInputClick($event)\" (blur)=\"_onBlur()\" (focus)=\"_focused = true\"></div></div></div><label #label [for]=\"inputId\" (click)=\"$event.stopPropagation()\"><ng-content></ng-content></label></div>",
                    styles: [".mdc-switch{display:inline-block;position:relative;outline:0;user-select:none}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;width:68px;height:48px;margin:0;opacity:0;cursor:pointer;pointer-events:auto}.mdc-switch__native-control[dir=rtl],[dir=rtl] .mdc-switch__native-control{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1)}.mdc-switch__thumb-underlay{left:-18px;right:initial;display:flex;position:absolute;top:-17px;align-items:center;justify-content:center;width:48px;height:48px;transform:translateX(0);transition:transform 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1)}.mdc-switch__thumb-underlay[dir=rtl],[dir=rtl] .mdc-switch__thumb-underlay{left:initial;right:-18px}.mdc-switch__thumb{box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(20px)}.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl],[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control[dir=rtl],[dir=rtl] .mdc-switch--checked .mdc-switch__native-control{transform:translateX(20px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{order:0;margin-right:auto;padding-left:4px}.mdc-form-field[dir=rtl]>label,[dir=rtl] .mdc-form-field>label{margin-left:auto;padding-right:4px}.mdc-form-field--align-end>label{order:-1;margin-left:auto;padding-right:4px}.mdc-form-field--align-end[dir=rtl]>label,[dir=rtl] .mdc-form-field--align-end>label{margin-right:auto;padding-left:4px}.mat-mdc-slide-toggle{display:inline-block}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__thumb-underlay::before{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-slide-toggle .mdc-switch__thumb-underlay::before{border-radius:50%;content:'';opacity:0}.mat-mdc-slide-toggle .mdc-switch:hover .mdc-switch__thumb-underlay::before{opacity:.04;transition:mdc-switch-transition-enter(opacity,0,75ms)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__thumb-underlay::before{opacity:.12}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__thumb-underlay,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__thumb-underlay::before{transition:none}"],
                    host: {
                        'class': 'mat-mdc-slide-toggle',
                        '[id]': 'id',
                        '[attr.tabindex]': 'null',
                        '[attr.aria-label]': 'null',
                        '[attr.aria-labelledby]': 'null',
                        '[class.mat-primary]': 'color == "primary"',
                        '[class.mat-accent]': 'color == "accent"',
                        '[class.mat-warn]': 'color == "warn"',
                        '[class.mat-mdc-slide-toggle-focused]': '_focused',
                        '[class.mat-mdc-slide-toggle-checked]': 'checked',
                        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                        '(focus)': '_inputElement.nativeElement.focus()',
                    },
                    exportAs: 'matSlideToggle',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
                },] },
    ];
    /** @nocollapse */
    MatSlideToggle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    MatSlideToggle.propDecorators = {
        color: [{ type: Input }],
        name: [{ type: Input }],
        id: [{ type: Input }],
        tabIndex: [{ type: Input }],
        labelPosition: [{ type: Input }],
        ariaLabel: [{ type: Input, args: ['aria-label',] }],
        ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
        required: [{ type: Input }],
        checked: [{ type: Input }],
        disableRipple: [{ type: Input }],
        disabled: [{ type: Input }],
        change: [{ type: Output }],
        toggleChange: [{ type: Output }],
        dragChange: [{ type: Output }],
        _inputElement: [{ type: ViewChild, args: ['input', { static: false },] }]
    };
    return MatSlideToggle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatSlideToggleModule = /** @class */ (function () {
    function MatSlideToggleModule() {
    }
    MatSlideToggleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        _MatSlideToggleRequiredValidatorModule,
                        MatCommonModule,
                        MatRippleModule,
                        CommonModule
                    ],
                    exports: [
                        _MatSlideToggleRequiredValidatorModule,
                        MatSlideToggle,
                        MatCommonModule
                    ],
                    declarations: [MatSlideToggle],
                },] },
    ];
    return MatSlideToggleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggleChange, MatSlideToggle, MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MatSlideToggleModule };
//# sourceMappingURL=mdc-slide-toggle.es5.js.map
