/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/coercion'), require('@angular/cdk/platform'), require('@angular/core'), require('@angular/forms'), require('@angular/platform-browser/animations'), require('@material/slider'), require('rxjs'), require('@angular/common'), require('@angular/material/core')) :
	typeof define === 'function' && define.amd ? define('@angular/material-experimental/mdc-slider', ['exports', '@angular/cdk/bidi', '@angular/cdk/coercion', '@angular/cdk/platform', '@angular/core', '@angular/forms', '@angular/platform-browser/animations', '@material/slider', 'rxjs', '@angular/common', '@angular/material/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.materialExperimental = global.ng.materialExperimental || {}, global.ng.materialExperimental.mdcSlider = {}),global.ng.cdk.bidi,global.ng.cdk.coercion,global.ng.cdk.platform,global.ng.core,global.ng.forms,global.ng.platformBrowser.animations,global.mdc.slider,global.rxjs,global.ng.common,global.ng.material.core));
}(this, (function (exports,bidi,coercion,platform,core,forms,animations,slider,rxjs,common,core$1) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
 * the default separation we chose.
 * @type {?}
 */
var MIN_AUTO_TICK_SEPARATION = 30;
/**
 * Size of a tick marker for a slider. The size of a tick is based on the Material
 * Design guidelines and the MDC slider implementation.
 * TODO(devversion): ideally MDC would expose the tick marker size as constant
 * @type {?}
 */
var TICK_MARKER_SIZE = 2;
/**
 * Options to pass to the slider interaction listeners.
 * @type {?}
 */
var listenerOptions = platform.normalizePassiveListenerOptions({ passive: true });
/**
 * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 * \@docs-private
 * @type {?}
 */
var MAT_SLIDER_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef((/**
     * @return {?}
     */
    function () { return MatSlider; })),
    multi: true
};
/**
 * A simple change event emitted by the MatSlider component.
 */
var   /**
 * A simple change event emitted by the MatSlider component.
 */
MatSliderChange = /** @class */ (function () {
    function MatSliderChange() {
    }
    return MatSliderChange;
}());
var MatSlider = /** @class */ (function () {
    function MatSlider(_elementRef, _changeDetectorRef, _ngZone, _platform, _dir, tabIndex, _animationMode) {
        var _this = this;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._dir = _dir;
        this._animationMode = _animationMode;
        /**
         * Event emitted when the slider value has changed.
         */
        this.change = new core.EventEmitter();
        /**
         * Event emitted when the slider thumb moves.
         */
        this.input = new core.EventEmitter();
        /**
         * Emits when the raw value of the slider changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */
        this.valueChange = new core.EventEmitter();
        /**
         * Tabindex for the slider.
         */
        this.tabIndex = 0;
        /**
         * The color palette for this slider.
         */
        this.color = 'accent';
        this._min = 0;
        this._max = 100;
        this._value = null;
        this._step = 1;
        this._tickInterval = 0;
        this._thumbLabel = false;
        this._disabled = false;
        /**
         * Adapter for the MDC slider foundation.
         */
        this._sliderAdapter = {
            hasClass: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) { return _this._elementRef.nativeElement.classList.contains(className); }),
            addClass: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) { return _this._elementRef.nativeElement.classList.add(className); }),
            removeClass: (/**
             * @param {?} className
             * @return {?}
             */
            function (className) { return _this._elementRef.nativeElement.classList.remove(className); }),
            getAttribute: (/**
             * @param {?} name
             * @return {?}
             */
            function (name) { return _this._elementRef.nativeElement.getAttribute(name); }),
            setAttribute: (/**
             * @param {?} name
             * @param {?} value
             * @return {?}
             */
            function (name, value) { return _this._elementRef.nativeElement.setAttribute(name, value); }),
            removeAttribute: (/**
             * @param {?} name
             * @return {?}
             */
            function (name) { return _this._elementRef.nativeElement.removeAttribute(name); }),
            computeBoundingRect: (/**
             * @return {?}
             */
            function () { return _this._elementRef.nativeElement.getBoundingClientRect(); }),
            getTabIndex: (/**
             * @return {?}
             */
            function () { return _this._elementRef.nativeElement.tabIndex; }),
            registerInteractionHandler: (/**
             * @param {?} evtType
             * @param {?} handler
             * @return {?}
             */
            function (evtType, handler) {
                // Interaction event handlers (which handle keyboard interaction) cannot be passive
                // as they will prevent the default behavior. Additionally we can't run these event
                // handlers outside of the Angular zone because we rely on the events to cause the
                // component tree to be re-checked.
                return _this._elementRef.nativeElement.addEventListener(evtType, handler);
            }),
            deregisterInteractionHandler: (/**
             * @param {?} evtType
             * @param {?} handler
             * @return {?}
             */
            function (evtType, handler) {
                return _this._elementRef.nativeElement.removeEventListener(evtType, handler);
            }),
            registerThumbContainerInteractionHandler: (/**
             * @param {?} evtType
             * @param {?} handler
             * @return {?}
             */
            function (evtType, handler) {
                // The thumb container interaction handlers are currently just used for transition
                // events which don't need to run in the Angular zone.
                _this._ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this._thumbContainer.nativeElement.addEventListener(evtType, handler, listenerOptions);
                }));
            }),
            deregisterThumbContainerInteractionHandler: (/**
             * @param {?} evtType
             * @param {?} handler
             * @return {?}
             */
            function (evtType, handler) {
                _this._thumbContainer.nativeElement.removeEventListener(evtType, handler, listenerOptions);
            }),
            registerBodyInteractionHandler: (/**
             * @param {?} evtType
             * @param {?} handler
             * @return {?}
             */
            function (evtType, handler) {
                // Body event handlers (which handle thumb sliding) cannot be passive as they will
                // prevent the default behavior. Additionally we can't run these event handlers
                // outside of the Angular zone because we rely on the events to cause the component
                // tree to be re-checked.
                return document.body.addEventListener(evtType, handler);
            }),
            deregisterBodyInteractionHandler: (/**
             * @param {?} evtType
             * @param {?} handler
             * @return {?}
             */
            function (evtType, handler) {
                return document.body.removeEventListener(evtType, handler);
            }),
            registerResizeHandler: (/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                // The resize handler is currently responsible for detecting slider dimension
                // changes and therefore doesn't cause a value change that needs to be propagated.
                _this._ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    window.addEventListener('resize', handler, listenerOptions);
                }));
            }),
            deregisterResizeHandler: (/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                return window.removeEventListener('resize', handler, listenerOptions);
            }),
            notifyInput: (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var newValue = _this._foundation.getValue();
                // MDC currently fires the input event multiple times.
                // TODO(devversion): remove this check once the input notifications are fixed.
                if (newValue !== _this.value) {
                    _this.value = newValue;
                    _this.input.emit(_this._createChangeEvent(newValue));
                }
            }),
            notifyChange: (/**
             * @return {?}
             */
            function () {
                // TODO(devversion): bug in MDC where only the "change" event is emitted if a keypress
                // updated the value. Material and native range sliders also emit an input event.
                // Usually we sync the "value" in the "input" event, but as a workaround we now sync
                // the value in the "change" event.
                _this.value = _this._foundation.getValue();
                _this._emitChangeEvent((/** @type {?} */ (_this.value)));
            }),
            setThumbContainerStyleProperty: (/**
             * @param {?} propertyName
             * @param {?} value
             * @return {?}
             */
            function (propertyName, value) {
                _this._thumbContainer.nativeElement.style.setProperty(propertyName, value);
            }),
            setTrackStyleProperty: (/**
             * @param {?} propertyName
             * @param {?} value
             * @return {?}
             */
            function (propertyName, value) {
                _this._track.nativeElement.style.setProperty(propertyName, value);
            }),
            setMarkerValue: (/**
             * @return {?}
             */
            function () {
                // Mark the component for check as the thumb label needs to be re-rendered.
                _this._changeDetectorRef.markForCheck();
            }),
            setTrackMarkers: (/**
             * @param {?} step
             * @param {?} max
             * @param {?} min
             * @return {?}
             */
            function (step, max, min) {
                _this._trackMarker.nativeElement.style.setProperty('background', _this._getTrackMarkersBackground(min, max, step));
            }),
            isRTL: (/**
             * @return {?}
             */
            function () { return _this._dir && _this._dir.value === 'rtl'; }),
        };
        /**
         * Instance of the MDC slider foundation for this slider.
         */
        this._foundation = new slider.MDCSliderFoundation(this._sliderAdapter);
        /**
         * Whether the MDC foundation has been initialized.
         */
        this._isInitialized = false;
        /**
         * Function that notifies the control value accessor about a value change.
         */
        this._controlValueAccessorChangeFn = (/**
         * @return {?}
         */
        function () { });
        /**
         * Subscription to the Directionality change EventEmitter.
         */
        this._dirChangeSubscription = rxjs.Subscription.EMPTY;
        /**
         * Function that marks the slider as touched. Registered via "registerOnTouch".
         */
        this._markAsTouched = (/**
         * @return {?}
         */
        function () { });
        this.tabIndex = parseInt(tabIndex) || 0;
        if (this._dir) {
            this._dirChangeSubscription = this._dir.change.subscribe((/**
             * @return {?}
             */
            function () {
                // In case the directionality changes, we need to refresh the rendered MDC slider.
                // Note that we need to wait until the page actually updated as otherwise the
                // client rectangle wouldn't reflect the new directionality.
                // TODO(devversion): ideally the MDC slider would just compute dimensions similarly
                // to the standard Material slider on "mouseenter".
                _this._ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return setTimeout((/**
                 * @return {?}
                 */
                function () { return _this._foundation.layout(); })); }));
            }));
        }
    }
    Object.defineProperty(MatSlider.prototype, "min", {
        /** The minimum value that the slider can have. */
        get: /**
         * The minimum value that the slider can have.
         * @return {?}
         */
        function () {
            return this._min;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._min = coercion.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "max", {
        /** The maximum value that the slider can have. */
        get: /**
         * The maximum value that the slider can have.
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._max = coercion.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "value", {
        /** Value of the slider. */
        get: /**
         * Value of the slider.
         * @return {?}
         */
        function () {
            // If the value needs to be read and it is still uninitialized, initialize
            // it to the current minimum value.
            if (this._value === null) {
                this.value = this.min;
            }
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = coercion.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "step", {
        /** The values at which the thumb will snap. */
        get: /**
         * The values at which the thumb will snap.
         * @return {?}
         */
        function () {
            return this._step;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._step = coercion.coerceNumberProperty(v, this._step);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "tickInterval", {
        /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         */
        get: /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         * @return {?}
         */
        function () {
            return this._tickInterval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === 'auto') {
                this._tickInterval = 'auto';
            }
            else if (typeof value === 'number' || typeof value === 'string') {
                this._tickInterval = coercion.coerceNumberProperty(value, this._tickInterval);
            }
            else {
                this._tickInterval = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "thumbLabel", {
        /** Whether or not to show the thumb label. */
        get: /**
         * Whether or not to show the thumb label.
         * @return {?}
         */
        function () {
            return this._thumbLabel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._thumbLabel = coercion.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "disabled", {
        /** Whether the slider is disabled. */
        get: /**
         * Whether the slider is disabled.
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
            this._disabled = coercion.coerceBooleanProperty(disabled);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSlider.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
        if (this._platform.isBrowser) {
            // The MDC slider foundation accesses DOM globals, so we cannot initialize the
            // foundation on the server. The foundation would be needed to move the thumb
            // to the proper position and to render the ticks.
            this._foundation.init();
            // The standard Angular Material slider is always using discrete values. We always
            // want to enable discrete values and support ticks, but want to still provide
            // non-discrete slider visual looks if thumb label is disabled.
            // TODO(devversion): check if we can get a public API for this.
            // Tracked with: https://github.com/material-components/material-components-web/issues/5020
            ((/** @type {?} */ (this._foundation))).isDiscrete_ = true;
            // These bindings cannot be synced in the foundation, as the foundation is not
            // initialized and they cause DOM globals to be accessed (to move the thumb)
            this._syncStep();
            this._syncValue();
            this._syncMax();
            this._syncMin();
        }
        this._syncDisabled();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatSlider.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._isInitialized) {
            return;
        }
        if (changes['step']) {
            this._syncStep();
        }
        if (changes['max']) {
            this._syncMax();
        }
        if (changes['min']) {
            this._syncMin();
        }
        if (changes['disabled']) {
            this._syncDisabled();
        }
        if (changes['value']) {
            this._syncValue();
        }
        if (changes['tickInterval']) {
            this._refreshTrackMarkers();
        }
    };
    /**
     * @return {?}
     */
    MatSlider.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._dirChangeSubscription.unsubscribe();
        // The foundation cannot be destroyed on the server, as the foundation
        // has not be initialized on the server.
        if (this._platform.isBrowser) {
            this._foundation.destroy();
        }
    };
    /** Focuses the slider. */
    /**
     * Focuses the slider.
     * @param {?=} options
     * @return {?}
     */
    MatSlider.prototype.focus = /**
     * Focuses the slider.
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this._elementRef.nativeElement.focus(options);
    };
    /** Blurs the slider. */
    /**
     * Blurs the slider.
     * @return {?}
     */
    MatSlider.prototype.blur = /**
     * Blurs the slider.
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.blur();
    };
    Object.defineProperty(MatSlider.prototype, "displayValue", {
        /** Gets the display text of the current value. */
        get: /**
         * Gets the display text of the current value.
         * @return {?}
         */
        function () {
            if (this.displayWith) {
                return this.displayWith((/** @type {?} */ (this.value))).toString();
            }
            return (/** @type {?} */ (this.value)).toString() || '0';
        },
        enumerable: true,
        configurable: true
    });
    /** Creates a slider change object from the specified value. */
    /**
     * Creates a slider change object from the specified value.
     * @private
     * @param {?} newValue
     * @return {?}
     */
    MatSlider.prototype._createChangeEvent = /**
     * Creates a slider change object from the specified value.
     * @private
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        /** @type {?} */
        var event = new MatSliderChange();
        event.source = this;
        event.value = newValue;
        return event;
    };
    /** Emits a change event and notifies the control value accessor. */
    /**
     * Emits a change event and notifies the control value accessor.
     * @private
     * @param {?} newValue
     * @return {?}
     */
    MatSlider.prototype._emitChangeEvent = /**
     * Emits a change event and notifies the control value accessor.
     * @private
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this._controlValueAccessorChangeFn(newValue);
        this.valueChange.emit(newValue);
        this.change.emit(this._createChangeEvent(newValue));
    };
    /** Computes the CSS background value for the track markers (aka ticks). */
    /**
     * Computes the CSS background value for the track markers (aka ticks).
     * @private
     * @param {?} min
     * @param {?} max
     * @param {?} step
     * @return {?}
     */
    MatSlider.prototype._getTrackMarkersBackground = /**
     * Computes the CSS background value for the track markers (aka ticks).
     * @private
     * @param {?} min
     * @param {?} max
     * @param {?} step
     * @return {?}
     */
    function (min, max, step) {
        if (!this.tickInterval) {
            return '';
        }
        /** @type {?} */
        var markerWidth = TICK_MARKER_SIZE + "px";
        /** @type {?} */
        var markerBackground = "linear-gradient(to right, currentColor " + markerWidth + ", transparent 0)";
        if (this.tickInterval === 'auto') {
            /** @type {?} */
            var trackSize = this._elementRef.nativeElement.getBoundingClientRect().width;
            /** @type {?} */
            var pixelsPerStep = trackSize * step / (max - min);
            /** @type {?} */
            var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
            /** @type {?} */
            var pixelsPerTick = stepsPerTick * step;
            return markerBackground + " 0 center / " + pixelsPerTick + "px 100% repeat-x";
        }
        // keep calculation in css for better rounding/subpixel behavior
        /** @type {?} */
        var markerAmount = "(((" + max + " - " + min + ") / " + step + ") / " + this.tickInterval + ")";
        /** @type {?} */
        var markerBkgdLayout = "0 center / calc((100% - " + markerWidth + ") / " + markerAmount + ") 100% repeat-x";
        return markerBackground + " " + markerBkgdLayout;
    };
    /** Method that ensures that track markers are refreshed. */
    /**
     * Method that ensures that track markers are refreshed.
     * @private
     * @return {?}
     */
    MatSlider.prototype._refreshTrackMarkers = /**
     * Method that ensures that track markers are refreshed.
     * @private
     * @return {?}
     */
    function () {
        // MDC only checks whether the slider has markers once on init by looking for the
        // `mdc-slider--display-markers` class in the DOM, whereas we support changing and hiding
        // the markers dynamically. This is a workaround until we can get a public API for it. See:
        // https://github.com/material-components/material-components-web/issues/5020
        ((/** @type {?} */ (this._foundation))).hasTrackMarker_ = this.tickInterval !== 0;
        this._foundation.setupTrackMarker();
    };
    /** Syncs the "step" input value with the MDC foundation. */
    /**
     * Syncs the "step" input value with the MDC foundation.
     * @private
     * @return {?}
     */
    MatSlider.prototype._syncStep = /**
     * Syncs the "step" input value with the MDC foundation.
     * @private
     * @return {?}
     */
    function () {
        this._foundation.setStep(this.step);
    };
    /** Syncs the "max" input value with the MDC foundation. */
    /**
     * Syncs the "max" input value with the MDC foundation.
     * @private
     * @return {?}
     */
    MatSlider.prototype._syncMax = /**
     * Syncs the "max" input value with the MDC foundation.
     * @private
     * @return {?}
     */
    function () {
        this._foundation.setMax(this.max);
    };
    /** Syncs the "min" input value with the MDC foundation. */
    /**
     * Syncs the "min" input value with the MDC foundation.
     * @private
     * @return {?}
     */
    MatSlider.prototype._syncMin = /**
     * Syncs the "min" input value with the MDC foundation.
     * @private
     * @return {?}
     */
    function () {
        this._foundation.setMin(this.min);
    };
    /** Syncs the "value" input binding with the MDC foundation. */
    /**
     * Syncs the "value" input binding with the MDC foundation.
     * @private
     * @return {?}
     */
    MatSlider.prototype._syncValue = /**
     * Syncs the "value" input binding with the MDC foundation.
     * @private
     * @return {?}
     */
    function () {
        this._foundation.setValue((/** @type {?} */ (this.value)));
    };
    /** Syncs the "disabled" input value with the MDC foundation. */
    /**
     * Syncs the "disabled" input value with the MDC foundation.
     * @private
     * @return {?}
     */
    MatSlider.prototype._syncDisabled = /**
     * Syncs the "disabled" input value with the MDC foundation.
     * @private
     * @return {?}
     */
    function () {
        this._foundation.setDisabled(this.disabled);
    };
    /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatSlider.prototype.registerOnChange = /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Registers a callback to be triggered when the component is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the component is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatSlider.prototype.registerOnTouched = /**
     * Registers a callback to be triggered when the component is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this._markAsTouched = fn;
    };
    /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param isDisabled
     */
    /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    MatSlider.prototype.setDisabledState = /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._syncDisabled();
    };
    /**
     * Sets the model value.
     * Implemented as part of ControlValueAccessor.
     * @param value
     */
    /**
     * Sets the model value.
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    MatSlider.prototype.writeValue = /**
     * Sets the model value.
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this._syncValue();
    };
    MatSlider.decorators = [
        { type: core.Component, args: [{selector: 'mat-slider',
                    template: "<div class=\"mdc-slider__track-container\"><div class=\"mdc-slider__track\" #track></div><div class=\"mdc-slider__track-marker-container\" #trackMarker></div></div><div class=\"mdc-slider__thumb-container\" #thumbContainer><div *ngIf=\"thumbLabel\" class=\"mdc-slider__pin\"><span class=\"mdc-slider__pin-value-marker\">{{displayValue}}</span></div><svg class=\"mdc-slider__thumb\" focusable=\"false\" width=\"21\" height=\"21\"><circle cx=\"10.5\" cy=\"10.5\" r=\"7.875\"></circle></svg><div class=\"mdc-slider__focus-ring\"></div></div>",
                    styles: [".mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:transparent}.mdc-slider--disabled{cursor:auto}.mdc-slider:focus{outline:0}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:\"\"}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:\"\"}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(.571);stroke-width:3.5}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0,0);border-radius:50% 50% 50% 0;z-index:1}.mdc-slider__pin-value-marker{transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1,1,1)}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55,1.55,1.55);opacity:.25}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px,-20px)}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:0;vertical-align:middle;margin-left:8px;margin-right:8px;width:auto;min-width:112px}@media (-ms-high-contrast:active){.mat-mdc-slider .mdc-slider__track-container{height:0;outline:solid 2px;margin-top:1px}.mat-mdc-slider .mdc-slider__pin-value-marker{outline:solid 1px}}@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(.85)}100%{transform:scale(.571)}}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider__track{will-change:transform}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider__thumb-container{will-change:transform}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider__thumb{transition:transform .1s ease-out,fill .1s ease-out,stroke .1s ease-out}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider__focus-ring{transition:transform .266s ease-out,opacity .266s ease-out,background-color .266s ease-out}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider__pin{transition:transform .1s ease-out}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize .266s linear}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider--in-transit .mdc-slider__thumb-container,.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider--in-transit .mdc-slider__track,.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mat-slider-has-ticks:not(.mat-slider-disabled) .mdc-slider__track-marker-container{visibility:visible}"],
                    host: {
                        'class': 'mat-mdc-slider mdc-slider',
                        'role': 'slider',
                        'aria-orientation': 'horizontal',
                        // The tabindex if the slider turns disabled is managed by the MDC foundation which
                        // dynamically updates and restores the "tabindex" attribute.
                        '[attr.tabindex]': 'tabIndex || 0',
                        '[class.mdc-slider--discrete]': 'thumbLabel',
                        '[class.mat-slider-has-ticks]': 'tickInterval !== 0',
                        '[class.mdc-slider--display-markers]': 'tickInterval !== 0',
                        '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
                        '[class.mat-slider-disabled]': 'disabled',
                        '[class.mat-primary]': 'color == "primary"',
                        '[class.mat-accent]': 'color == "accent"',
                        '[class.mat-warn]': 'color == "warn"',
                        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                        '(blur)': '_markAsTouched()',
                    },
                    exportAs: 'matSlider',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [MAT_SLIDER_VALUE_ACCESSOR],
                },] },
    ];
    /** @nocollapse */
    MatSlider.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: core.NgZone },
        { type: platform.Platform },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
        { type: String, decorators: [{ type: core.Attribute, args: ['tabindex',] }] },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
    ]; };
    MatSlider.propDecorators = {
        change: [{ type: core.Output }],
        input: [{ type: core.Output }],
        valueChange: [{ type: core.Output }],
        tabIndex: [{ type: core.Input }],
        color: [{ type: core.Input }],
        displayWith: [{ type: core.Input }],
        min: [{ type: core.Input }],
        max: [{ type: core.Input }],
        value: [{ type: core.Input }],
        step: [{ type: core.Input }],
        tickInterval: [{ type: core.Input }],
        thumbLabel: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        _thumbContainer: [{ type: core.ViewChild, args: ['thumbContainer', { static: false },] }],
        _track: [{ type: core.ViewChild, args: ['track', { static: false },] }],
        _pinValueMarker: [{ type: core.ViewChild, args: ['pinValueMarker', { static: false },] }],
        _trackMarker: [{ type: core.ViewChild, args: ['trackMarker', { static: false },] }]
    };
    return MatSlider;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatSliderModule = /** @class */ (function () {
    function MatSliderModule() {
    }
    MatSliderModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [core$1.MatCommonModule, common.CommonModule],
                    exports: [MatSlider, core$1.MatCommonModule],
                    declarations: [MatSlider],
                },] },
    ];
    return MatSliderModule;
}());

exports.MAT_SLIDER_VALUE_ACCESSOR = MAT_SLIDER_VALUE_ACCESSOR;
exports.MatSliderChange = MatSliderChange;
exports.MatSlider = MatSlider;
exports.MatSliderModule = MatSliderModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-experimental-mdc-slider.umd.js.map
