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

    constructor(protected $element: ng.IAugmentedJQuery) {
        //  Super constructor
        super($element);

    }

    parse(value: string): boolean
    {

        let parsedValue: boolean = !!value;
        return parsedValue;

    }

    format(value: boolean): string
    {
        return value.toString();
    }

    change()
    {
        this.ngModel.$setViewValue(!this.ngModel.$modelValue);
    }

    // Set the icon class for the checkbox - can be configured through the
    // options

    getIcon(): string
    {
        if(this.ngModel.$modelValue)
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
