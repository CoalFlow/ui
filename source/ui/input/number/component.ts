import * as lodashisNaN from 'lodash/isNaN';
import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';

require('./style.scss');

export interface IUiInputNumberOptions extends IUiInputCommonOptions {

    precision: number;  //  The number of decimal places to display
    increment: number;  //  The number by which to change the value when the user increments / decrements the controller
    min: number;
    max: number;
}

export class UiInputNumberController extends UiInputCommonController<Number, IUiInputNumberOptions> {

    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes) {
        super($element, $attrs);

        this.defaultOptions.increment = 1;
        this.defaultOptions.precision = 0;

    }

    // Code copied from MDN to round values to nearest precision...

    static decimalAdjust(type: string, value: number, exp: number): number
    {
        // If the exp is undefined or zero...
        if (typeof exp === 'undefined' || +exp === 0)
        {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // If the value is not a number or the exp is not an integer...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
        {
            return NaN;
        }
        // Shift
        let valueExp = value.toString().split('e');
        valueExp = Math[type](+(valueExp[0] + 'e' + (valueExp[1] ? (+valueExp[1] - exp) : -exp)));
        // Shift back
        valueExp = valueExp.toString().split('e');
        return +(valueExp[0] + 'e' + (valueExp[1] ? (+valueExp[1] + exp) : exp));
    }

    // Decimal round
    static round10(value: number, exp: number): number
    {
        return UiInputNumberController.decimalAdjust('round', value, exp);
    }
    // Decimal floor
    static floor10(value: number, exp: number): number
    {
        return UiInputNumberController.decimalAdjust('floor', value, exp);
    }

    // Decimal ceil
    static ceil10(value: number, exp: number): number
    {
        return UiInputNumberController.decimalAdjust('ceil', value, exp);
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
            return UiInputNumberController.round10(value, -8).toFixed(this.options.precision);
        }
    }

    $onInit() {
        super.$onInit();
        
        var $input = $(this.$element.find('input'));

        $input.on("change keyup", (event: JQueryEventObject) => {
            this.ngModel.$setViewValue($input.val());
        })

        this.ngModel.$render = () => {
            $input.val(this.ngModel.$viewValue);
        };        
    }

}

export class UiInputNumberComponent extends UiInputCommonComponent {

    controller = UiInputNumberController;
    template = require('./template.html');

    constructor() {
        super();

        this.bindings["min"] = "@?uiMin";
        this.bindings["max"] = "@?uiMax";
        this.bindings["increment"] = "@?uiIncrement";
        this.bindings["precision"] = "@?uiPrecision";

    }

}

// export default (module: ng.IModule) => {

//     module.component('uiInputNumber', new Component());

// };
