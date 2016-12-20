import * as lodashisNaN from 'lodash/isNaN';
import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';

require('./style.scss');

export interface IUiInputNumberOptions extends IUiInputCommonOptions {

    precision: number; //   The number of decimal places to display
    increment: number;  //  The number by which to change the value when the user increments / decrements the controller
    min: number;
    max: number;
}

export class UiInputNumberController extends UiInputCommonController<Number, IUiInputNumberOptions> {

    constructor($element: ng.IAugmentedJQuery) {
        super($element);

        this.defaultOptions.increment = 1;
        this.defaultOptions.precision = 0;

    }

    parse(value: string): number {

        let parsedValue: number = parseFloat(value);
        if (lodashisNaN(parsedValue)) {
            parsedValue = null;
        }
        return parsedValue;

    }

    format(value: number): string {
        if (value == null) {
            return null;
        } else {
            return value.toFixed(this.options.precision);
        }
    }



}

export class UiInputNumberComponent extends UiInputCommonComponent {

    controller = UiInputNumberController;
    template = require('./template.html');

}

// export default (module: ng.IModule) => {

//     module.component('uiInputNumber', new Component());

// };
