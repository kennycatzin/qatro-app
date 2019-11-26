/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatRadio = /** @class */ (function () {
    function MatRadio() {
    }
    MatRadio.decorators = [
        { type: Component, args: [{selector: 'mat-radio',
                    template: "",
                    styles: [""],
                    host: {
                        'class': 'mat-mdc-radio',
                    },
                    exportAs: 'matRadio',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return MatRadio;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatRadioModule = /** @class */ (function () {
    function MatRadioModule() {
    }
    MatRadioModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MatCommonModule, CommonModule],
                    exports: [MatRadio, MatCommonModule],
                    declarations: [MatRadio],
                },] },
    ];
    return MatRadioModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatRadio, MatRadioModule };
//# sourceMappingURL=mdc-radio.es5.js.map
