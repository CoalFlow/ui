import * as lodash from 'lodash';
import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';

require('./style.scss');

export interface IUiInputNumberOptions extends IUiInputCommonOptions {
}

export class UiInputNumberController extends UiInputCommonController<Number, IUiInputNumberOptions> {

    _min: number;
    _max: number;
    _increment: number;
    _precision: number;

    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes) {
        super($element, $attrs);

        this._increment = 1;
        this._precision = 0;

        this._min = -Number.MAX_VALUE;
        this._max = Number.MAX_VALUE;

    }

    get increment(): number
    {
        return this._increment;
    }

    set increment(value: number)
    {
        this._increment = +value;
    }

    get precision(): number
    {
        return this._precision;
    }

    set precision(value: number)
    {
        this._precision = +value;
    }

    get min(): number
    {
        return this._min;
    }

    set min(value: number)
    {
        this._min = +value;
    }

    get max(): number
    {
        return this._max;
    }

    set max(value: number)
    {
        this._max = +value;
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
        if (lodash.isNaN(parsedValue)) {
            parsedValue = null;
        }
        parsedValue = this.testBounds(parsedValue);

        return parsedValue;
    }

    format(value: number): string {
        if (value == null) {
            return null;
        }
        else
        {
            return UiInputNumberController.round10(value, -8).toFixed(this.precision);
        }
    }

    testBounds(value: number): number
    {
        this.$element.removeClass("min-bound");
        this.$element.removeClass("max-bound");
        if (value === null)
        {
            return null;
        }
        if(value < this.min)
        {
            this.$element.addClass("min-bound");
            return this.min;
        }
        if(value > this.max)
        {
            this.$element.addClass("max-bound");
            return this.max;
        }
        return value;
    }

    $onInit() {
        super.$onInit();
        
        let $input = $(this.$element.find('input'));

        $input.on("change keyup", (event: JQueryEventObject) => {
            this.ngModel.$setViewValue($input.val());
        });

        this.ngModel.$render = () => {
            this.ngModel.$viewValue = this.testBounds(this.ngModel.$viewValue);
            $input.val(this.ngModel.$viewValue);
        };
    }

}

export class UiInputNumberComponent extends UiInputCommonComponent {

    controller = UiInputNumberController;
    template = require('./template.html');

    constructor() {
        super();

        this.bindings["min"] = "<?uiMin";
        this.bindings["max"] = "<?uiMax";
        this.bindings["increment"] = "@?uiIncrement";
        this.bindings["precision"] = "@?uiPrecision";

    }

}
