
import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';
import { UiInputNumberController } from '../number/component';
import {UiInputNumberComponent} from "../number/component";

require('./style.scss');

export interface IUiInputPercentageOptions extends IUiInputCommonOptions {

}

export class UiInputPercentageController extends UiInputNumberController {

    _factor: number;
    invFactor: number;
    units: string;

    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes, $parse : ng.IParseService, $scope: ng.IScope) {
        super($element, $attrs, $parse, $scope);

        this.min = 0;
        this.max = 100;
        this._factor = 100;
        this.invFactor = 1 / this._factor;
        this.units = "%";
    }

    get factor(): number
    {
        return this._factor;
    }

    set factor(value: number)
    {
        this._factor = +value;
        if(this._factor)
        {
            this.invFactor = 1 / this._factor;
        }
    }

    get invervseFactor(): number
    {
        return this.invFactor;
    }

    parse(value): number {
        let parsedValue: number = super.parse(value);
        if (parsedValue != null) {
            parsedValue *= this.invervseFactor;
        }
        return parsedValue
    }

    format(value): string {
        if (value != null) {
            return super.format(value * this.factor);
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

        this.bindings["units"] = "@?uiUnits";
        this.bindings["factor"] = "@?uiFactor";
    }
}
