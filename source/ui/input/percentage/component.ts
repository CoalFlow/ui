
import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';
import { UiInputNumberController } from '../number/component';
import {UiInputNumberComponent} from "../number/component";

require('./style.scss');

export interface IUiInputPercentageOptions extends IUiInputCommonOptions {

}

export class UiInputPercentageController extends UiInputNumberController {

    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes) {
        super($element, $attrs);

        this.min = 0;
        this.max = 100;

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

export class UiInputPercentageComponent extends UiInputNumberComponent
{
    constructor()
    {
        super();

        this.controller = UiInputPercentageController;
        this.template = require('./template.html');

    }
}
