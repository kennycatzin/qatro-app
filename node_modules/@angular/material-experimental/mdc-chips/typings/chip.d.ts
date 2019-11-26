/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { CanColor, CanColorCtor, CanDisableRipple, CanDisableRippleCtor, HasTabIndex, HasTabIndexCtor, RippleConfig, RippleGlobalOptions, RippleTarget } from '@angular/material/core';
import { MDCChipAdapter, MDCChipFoundation } from '@material/chips';
import { Subject } from 'rxjs';
import { MatChipAvatar, MatChipTrailingIcon, MatChipRemove } from './chip-icons';
/** Represents an event fired on an individual `mat-chip`. */
export interface MatChipEvent {
    /** The chip the event was fired on. */
    chip: MatChip;
}
/**
 * Directive to add MDC CSS to non-basic chips.
 * @docs-private
 */
export declare class MatChipCssInternalOnly {
}
/**
 * Boilerplate for applying mixins to MatChip.
 * @docs-private
 */
declare class MatChipBase {
    _elementRef: ElementRef;
    disabled: boolean;
    constructor(_elementRef: ElementRef);
}
declare const _MatChipMixinBase: CanColorCtor & CanDisableRippleCtor & HasTabIndexCtor & typeof MatChipBase;
/**
 * Material design styled Chip base component. Used inside the MatChipSet component.
 *
 * Extended by MatChipOption and MatChipRow for different interaction patterns.
 */
export declare class MatChip extends _MatChipMixinBase implements AfterContentInit, AfterViewInit, CanColor, CanDisableRipple, HasTabIndex, RippleTarget, OnDestroy {
    _changeDetectorRef: ChangeDetectorRef;
    readonly _elementRef: ElementRef;
    private _platform;
    protected _ngZone: NgZone;
    private _globalRippleOptions;
    private _dir;
    /** Emits when the chip is focused. */
    readonly _onFocus: Subject<MatChipEvent>;
    /** Emits when the chip is blurred. */
    readonly _onBlur: Subject<MatChipEvent>;
    readonly HANDLED_KEYS: number[];
    /** Whether the chip has focus. */
    protected _hasFocusInternal: boolean;
    /** Whether animations for the chip are enabled. */
    _animationsDisabled: boolean;
    readonly _hasFocus: boolean;
    /** Default unique id for the chip. */
    private _uniqueId;
    /** A unique id for the chip. If none is supplied, it will be auto-generated. */
    id: string;
    disabled: boolean;
    protected _disabled: boolean;
    /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */
    value: any;
    protected _value: any;
    /**
     * Determines whether or not the chip displays the remove styling and emits (removed) events.
     */
    removable: boolean;
    protected _removable: boolean;
    /**
     * Colors the chip for emphasis as if it were selected.
     */
    highlighted: boolean;
    protected _highlighted: boolean;
    /** Emitted when the user interacts with the remove icon. */
    removeIconInteraction: EventEmitter<string>;
    /** Emitted when the user interacts with the chip. */
    interaction: EventEmitter<string>;
    /** Emitted when the chip is destroyed. */
    readonly destroyed: EventEmitter<MatChipEvent>;
    /** Emitted when a chip is to be removed. */
    readonly removed: EventEmitter<MatChipEvent>;
    /** The MDC foundation containing business logic for MDC chip. */
    _chipFoundation: MDCChipFoundation;
    /** The unstyled chip selector for this component. */
    protected basicChipAttrName: string;
    /** Subject that emits when the component has been destroyed. */
    protected _destroyed: Subject<void>;
    /** The ripple renderer for this chip. */
    private _rippleRenderer;
    /**
     * Ripple configuration for ripples that are launched on pointer down.
     * Implemented as part of RippleTarget.
     * @docs-private
     */
    rippleConfig: RippleConfig & RippleGlobalOptions;
    /**
     * Implemented as part of RippleTarget. Whether ripples are disabled on interaction.
     * @docs-private
     */
    readonly rippleDisabled: boolean;
    /** The chip's leading icon. */
    leadingIcon: MatChipAvatar;
    /** The chip's trailing icon. */
    trailingIcon: MatChipTrailingIcon;
    /** The chip's trailing remove icon. */
    removeIcon: MatChipRemove;
    /**
     * Implementation of the MDC chip adapter interface.
     * These methods are called by the chip foundation.
     */
    protected _chipAdapter: MDCChipAdapter;
    constructor(_changeDetectorRef: ChangeDetectorRef, _elementRef: ElementRef, _platform: Platform, _ngZone: NgZone, _globalRippleOptions: RippleGlobalOptions | null, _dir: Directionality, animationMode?: string);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Sets up the remove icon chip foundation, and subscribes to remove icon events. */
    _initRemoveIcon(): void;
    /** Handles interaction with the remove icon. */
    _listenToRemoveIconInteraction(): void;
    /**
     * Allows for programmatic removal of the chip.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     */
    remove(): void;
    /** Whether this chip is a basic (unstyled) chip. */
    _isBasicChip(): boolean;
    /** Sets whether the given CSS class should be applied to the MDC chip. */
    private _setMdcClass;
    /** Initializes the ripple renderer. */
    private _initRipple;
    /** Forwards interaction events to the MDC chip foundation. */
    _handleInteraction(event: MouseEvent | KeyboardEvent): void;
}
export {};
