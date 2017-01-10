import * as moment from "moment";
import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';


require('./style.scss');

// Default format is date/month/year hours:minutes in 24 hour time - in local time

const DEFAULT_FORMAT: string = "DD/MM/YYYY HH:mm";

// In preparation for adding spinners to the control...

const DEFAULT_INCREMENT: number[] = [ 1, 1, 1, 1, 1 ];

const VALIDITY_MSG: string = "Date outside range";

export interface IUiInputDateTimeOptions extends IUiInputCommonOptions
{

    format: string; //   Moment style format string - revert to default if not provided
    increment: number[];  //  Increments for each format element (day, month, year, hour, minute, etc) in same order as format, default is 1
    min: Date;
    max: Date;
}

export class UiInputDateTimeController extends UiInputCommonController<Date, IUiInputDateTimeOptions>
{

    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes)
    {
        super($element, $attrs);

        this.defaultOptions.format = DEFAULT_FORMAT;
        this.defaultOptions.increment = DEFAULT_INCREMENT;

    }

    parse(value: string): Date
    {
        let parsedValue: Date = moment(value, this.options.format).toDate();
        this.ngModel.$setValidity(VALIDITY_MSG, this.isValid(parsedValue));
        return parsedValue;

    }

    format(value: Date): string
    {
        if (value == null)
        {
            return null;
        }
        else
        {
            this.ngModel.$setValidity(VALIDITY_MSG, this.isValid(value));
            return moment(value).format(this.options.format);
        }
    }

    isValid(modelValue: Date): boolean
    {
        let bReturn: boolean = true;
        if(this.options.min)
        {
            bReturn = bReturn && (this.options.min < modelValue);
        }
        if(this.options.max)
        {
            bReturn = bReturn && (modelValue < this.options.max);
        }
        return bReturn;
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

export class UiInputDateTimeComponent extends UiInputCommonComponent
{

    controller = UiInputDateTimeController;
    template = require('./template.html');

}

