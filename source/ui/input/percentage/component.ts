
import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';
import { UiInputNumberController } from '../number/component';

require('./style.scss');

export interface IUiInputPercentageOptions extends IUiInputCommonOptions {

}

export class UiInputPercentageController extends UiInputNumberController {

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

export class UiInputPercentageComponent extends UiInputCommonComponent implements ng.IComponentOptions {

    controller = UiInputPercentageController;
    template = require('./template.html');

}
