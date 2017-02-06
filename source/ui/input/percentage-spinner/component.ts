
import { IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';
import {UiInputNumberSpinnerController} from "../number-spinner/component";
import {UiInputNumberSpinnerComponent} from "../number-spinner/component";

require('./style.scss');

export interface IUiInputPercentageOptions extends IUiInputCommonOptions {
}

export class UiInputPercentageSpinnerController extends UiInputNumberSpinnerController {

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

    incrementValue(): void {
        this.changeValueBy(this.increment * this.invervseFactor);
    }

    decrementValue(): void {
        this.changeValueBy((this.increment * this.invervseFactor) * -1);
    }

    parse(value): number {
        let parsedValue: number = super.parse(value);
        if (parsedValue != null) {
            parsedValue = this.testBounds(parsedValue * this.invervseFactor);
            parsedValue = +parsedValue.toFixed(10);
        }
        return parsedValue;
    }

    format(value): string {
        if (value != null) {
            return super.format(this.testBounds(value * this.factor));
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

        this.bindings["units"] = "@?uiUnits";
        this.bindings["factor"] = "@?uiFactor";
    }


}
