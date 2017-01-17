
import { IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';
import {UiInputNumberSpinnerController} from "../number-spinner/component";
import {UiInputNumberSpinnerComponent} from "../number-spinner/component";

require('./style.scss');

export interface IUiInputPercentageOptions extends IUiInputCommonOptions {
}

export class UiInputPercentageSpinnerController extends UiInputNumberSpinnerController {

    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes)
    {
        super($element, $attrs);
        this.min = 0;
        this.max = 100;
    }


    incrementValue(): void {
        this.changeValueBy(this.increment / 100);
    }

    decrementValue(): void {
        this.changeValueBy((this.increment / 100) * -1);
    }

    parse(value): number {
        let parsedValue: number = super.parse(value);
        if (parsedValue != null) {
            parsedValue /= 100;
        }
        return parsedValue
    }

    format(value): string {
        if (value != null) {
            return super.format(value * 100);
        } else {
            return null;
        }
    }


}

export class UiInputPercentageSpinnerComponent extends UiInputNumberSpinnerComponent
{
    constructor() {
        super();

        this.controller = UiInputPercentageSpinnerController;
        this.template = require('./template.html');

    }


}
