/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, Directive, Input, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Material Design card component. Cards contain content and actions about a single subject.
 * See https://material.io/design/components/cards.html
 *
 * MatCard provides no behaviors, instead serving as a purely visual treatment.
 */
var MatCard = /** @class */ (function () {
    function MatCard() {
    }
    MatCard.decorators = [
        { type: Component, args: [{selector: 'mat-card',
                    template: "<ng-content></ng-content>",
                    styles: [".mdc-card{border-radius:4px;display:flex;flex-direction:column;box-sizing:border-box}.mdc-card--outlined{border-width:1px;border-style:solid}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:0;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl],[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:0}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}.mdc-card__action--button[dir=rtl],[dir=rtl] .mdc-card__action--button{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}.mdc-card__action--button:last-child[dir=rtl],[dir=rtl] .mdc-card__action--button:last-child{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl],[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}@media (-ms-high-contrast:active){.mat-mdc-card{outline:solid 1px}}.mat-mdc-card-subtitle,.mat-mdc-card-title{display:block;padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-header .mat-mdc-card-subtitle{margin-top:-8px;margin-bottom:16px}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;padding:16px 16px 0}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-header .mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-title,.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}"],
                    host: { 'class': 'mat-mdc-card mdc-card' },
                    exportAs: 'matCard',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return MatCard;
}());
// TODO(jelbourn): add `MatActionCard`, which is a card that acts like a button (and has a ripple).
// Supported in MDC with `.mdc-card__primary-action`. Will require additional a11y docs for users.
/**
 * Title of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for one variety of card title; any custom title element may be used in its place.
 *
 * MatCardTitle provides no behaviors, instead serving as a purely visual treatment.
 */
var MatCardTitle = /** @class */ (function () {
    function MatCardTitle() {
    }
    MatCardTitle.decorators = [
        { type: Directive, args: [{
                    selector: "mat-card-title, [mat-card-title], [matCardTitle]",
                    host: { 'class': 'mat-mdc-card-title' }
                },] },
    ];
    return MatCardTitle;
}());
/**
 * Container intended to be used within the `<mat-card>` component. Can contain exactly one
 * `<mat-card-title>`, one `<mat-card-subtitle>` and one content image of any size
 * (e.g. `<img matCardLgImage>`).
 */
var MatCardTitleGroup = /** @class */ (function () {
    function MatCardTitleGroup() {
    }
    MatCardTitleGroup.decorators = [
        { type: Component, args: [{selector: 'mat-card-title-group',
                    template: "<div><ng-content select=\"mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle], [matCardTitle], [matCardSubtitle]\"></ng-content></div><ng-content select=\"[mat-card-image], [matCardImage], [mat-card-sm-image], [matCardImageSmall], [mat-card-md-image], [matCardImageMedium], [mat-card-lg-image], [matCardImageLarge], [mat-card-xl-image], [matCardImageXLarge]\"></ng-content><ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: { 'class': 'mat-mdc-card-title-group' }
                },] },
    ];
    return MatCardTitleGroup;
}());
/**
 * Content of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for use with other convenience elements, such as `<mat-card-title>`; any custom
 * content block element may be used in its place.
 *
 * MatCardContent provides no behaviors, instead serving as a purely visual treatment.
 */
var MatCardContent = /** @class */ (function () {
    function MatCardContent() {
    }
    MatCardContent.decorators = [
        { type: Directive, args: [{
                    selector: 'mat-card-content',
                    host: { 'class': 'mat-mdc-card-content' }
                },] },
    ];
    return MatCardContent;
}());
/**
 * Sub-title of a card, intended for use within `<mat-card>` beneath a `<mat-card-title>`. This
 * component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`.
 *
 * MatCardSubtitle provides no behaviors, instead serving as a purely visual treatment.
 */
var MatCardSubtitle = /** @class */ (function () {
    function MatCardSubtitle() {
    }
    MatCardSubtitle.decorators = [
        { type: Directive, args: [{
                    selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
                    host: { 'class': 'mat-mdc-card-subtitle' }
                },] },
    ];
    return MatCardSubtitle;
}());
/**
 * Bottom area of a card that contains action buttons, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom action block element may be used in its place.
 *
 * MatCardActions provides no behaviors, instead serving as a purely visual treatment.
 */
var MatCardActions = /** @class */ (function () {
    function MatCardActions() {
        // TODO(jelbourn): deprecate `align` in favor of `actionPositon` or `actionAlignment`
        // as to not conflict with the native `align` attribute.
        // TODO(jelbourn): deprecate `align` in favor of `actionPositon` or `actionAlignment`
        // as to not conflict with the native `align` attribute.
        /**
         * Position of the actions inside the card.
         */
        this.align = 'start';
        // TODO(jelbourn): support `.mdc-card__actions--full-bleed`.
        // TODO(jelbourn): support  `.mdc-card__action-buttons` and `.mdc-card__action-icons`.
        // TODO(jelbourn): figure out how to use `.mdc-card__action`, `.mdc-card__action--button`, and
        // `mdc-card__action--icon`. They're used primarily for positioning, which we might be able to
        // do implicitly.
    }
    MatCardActions.decorators = [
        { type: Directive, args: [{
                    selector: 'mat-card-actions',
                    exportAs: 'matCardActions',
                    host: {
                        'class': 'mat-mdc-card-actions mdc-card__actions',
                        '[class.mat-mdc-card-actions-align-end]': 'align === "end"',
                    }
                },] },
    ];
    MatCardActions.propDecorators = {
        align: [{ type: Input }]
    };
    return MatCardActions;
}());
/**
 * Header region of a card, intended for use within `<mat-card>`. This header captures
 * a card title, subtitle, and avatar.  This component is an optional convenience for use with
 * other convenience elements, such as `<mat-card-footer>`; any custom header block element may be
 * used in its place.
 *
 * MatCardHeader provides no behaviors, instead serving as a purely visual treatment.
 */
var MatCardHeader = /** @class */ (function () {
    function MatCardHeader() {
    }
    MatCardHeader.decorators = [
        { type: Component, args: [{selector: 'mat-card-header',
                    template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content><div class=\"mat-mdc-card-header-text\"><ng-content select=\"mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle], [matCardTitle], [matCardSubtitle]\"></ng-content></div><ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: { 'class': 'mat-mdc-card-header' }
                },] },
    ];
    return MatCardHeader;
}());
/**
 * Footer area a card, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom footer block element may be used in its place.
 *
 * MatCardFooter provides no behaviors, instead serving as a purely visual treatment.
 */
var MatCardFooter = /** @class */ (function () {
    function MatCardFooter() {
    }
    MatCardFooter.decorators = [
        { type: Directive, args: [{
                    selector: 'mat-card-footer',
                    host: { 'class': 'mat-mdc-card-footer' }
                },] },
    ];
    return MatCardFooter;
}());
// TODO(jelbourn): deprecate the "image" selectors to replace with "media".
// TODO(jelbourn): support `.mdc-card__media-content`.
/**
 * Primary image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom media element may be used in its place.
 *
 * MatCardImage provides no behaviors, instead serving as a purely visual treatment.
 */
var MatCardImage = /** @class */ (function () {
    function MatCardImage() {
    }
    MatCardImage.decorators = [
        { type: Directive, args: [{
                    selector: '[mat-card-image], [matCardImage]',
                    host: { 'class': 'mat-mdc-card-image mdc-card__media' }
                },] },
    ];
    return MatCardImage;
}());
/**
 * Same as `MatCardImage`, but small.
 */
var MatCardSmImage = /** @class */ (function () {
    function MatCardSmImage() {
    }
    MatCardSmImage.decorators = [
        { type: Directive, args: [{
                    selector: '[mat-card-sm-image], [matCardImageSmall]',
                    host: { 'class': 'mat-mdc-card-sm-image mdc-card__media' }
                },] },
    ];
    return MatCardSmImage;
}());
/**
 * Same as `MatCardImage`, but medium.
 */
var MatCardMdImage = /** @class */ (function () {
    function MatCardMdImage() {
    }
    MatCardMdImage.decorators = [
        { type: Directive, args: [{
                    selector: '[mat-card-md-image], [matCardImageMedium]',
                    host: { 'class': 'mat-mdc-card-md-image mdc-card__media' }
                },] },
    ];
    return MatCardMdImage;
}());
/**
 * Same as `MatCardImage`, but large.
 */
var MatCardLgImage = /** @class */ (function () {
    function MatCardLgImage() {
    }
    MatCardLgImage.decorators = [
        { type: Directive, args: [{
                    selector: '[mat-card-lg-image], [matCardImageLarge]',
                    host: { 'class': 'mat-mdc-card-lg-image mdc-card__media' }
                },] },
    ];
    return MatCardLgImage;
}());
/**
 * Same as `MatCardImage`, but extra-large.
 */
var MatCardXlImage = /** @class */ (function () {
    function MatCardXlImage() {
    }
    MatCardXlImage.decorators = [
        { type: Directive, args: [{
                    selector: '[mat-card-xl-image], [matCardImageXLarge]',
                    host: { 'class': 'mat-mdc-card-xl-image mdc-card__media' }
                },] },
    ];
    return MatCardXlImage;
}());
/**
 * Avatar image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`; any custom media element may be used in its place.
 *
 * MatCardAvatar provides no behaviors, instead serving as a purely visual treatment.
 */
var MatCardAvatar = /** @class */ (function () {
    function MatCardAvatar() {
    }
    MatCardAvatar.decorators = [
        { type: Directive, args: [{
                    selector: '[mat-card-avatar], [matCardAvatar]',
                    host: { 'class': 'mat-mdc-card-avatar' }
                },] },
    ];
    return MatCardAvatar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CARD_DIRECTIVES = [
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardImage,
    MatCardLgImage,
    MatCardMdImage,
    MatCardSmImage,
    MatCardSubtitle,
    MatCardTitle,
    MatCardTitleGroup,
    MatCardXlImage
];
var MatCardModule = /** @class */ (function () {
    function MatCardModule() {
    }
    MatCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MatCommonModule, CommonModule],
                    exports: [CARD_DIRECTIVES, MatCommonModule],
                    declarations: CARD_DIRECTIVES,
                },] },
    ];
    return MatCardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatCard, MatCardTitle, MatCardTitleGroup, MatCardContent, MatCardSubtitle, MatCardActions, MatCardHeader, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, MatCardModule };
//# sourceMappingURL=mdc-card.es5.js.map
