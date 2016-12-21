﻿import "angular";
import {UiInputCommonController, IUiInputCommonOptions} from "../common/component";
import {UiInputCommonComponent} from "../common/component";

require("./style.scss");
require("./ui-checkbox-embedded.css");

const DEFAULT_CHECKED: string = "icon-check";
const DEFAULT_UNCHECKED: string = "icon-check-empty";

export interface IUiInputCheckboxOptions extends IUiInputCommonOptions
{
    iconChecked?: string;
    iconUnchecked?: string;
}

export class UiCheckboxController extends UiInputCommonController<Boolean, IUiInputCheckboxOptions>
{

    constructor(protected $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes) {
        //  Super constructor
        super($element, $attrs);

    }

    parse(value: string): boolean
    {
        return (value ? true : false);
    }

    format(value: boolean): string
    {
        return (value ? value.toString() : false.toString());
    }

    change()
    {
        this.value = !this.value;
        this.ngModel.$setViewValue(this.value);
    }

    $onInit() {
    //    super.$onInit();

        this.ngModel.$parsers.push((value) => this.parse(value));
        this.ngModel.$formatters.push((value) => this.format(value));

        this.ngModel.$render = () => {
            this.value = this.ngModel.$modelValue;
        };

    }
    // Set the icon class for the checkbox - can be configured through the
    // options

    getIcon(): string
    {

        if(this.value)
        {
            if (this.options.iconChecked)
            {
                return this.options.iconChecked;
            }
            else
            {
                return DEFAULT_CHECKED;
            }
        }
        else
        {
            if (this.options.iconUnchecked)
            {
                return this.options.iconUnchecked;
            }
            else
            {
                return DEFAULT_UNCHECKED;
            }
        }
    }
}

export class UiInputCheckboxComponent extends UiInputCommonComponent
{

    controller = UiCheckboxController;
    template = require('./template.html');

}
