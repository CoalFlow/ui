﻿﻿import {UiInputCommonController, IUiInputCommonOptions} from "../common/component";
import {UiInputCommonComponent} from "../common/component";

require("./style.scss");

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
        if(!this.setDisabled)
        {
            this.value = !this.value;
            this.ngModel.$setViewValue(this.value);
        }
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

    lastIcon: string;
    getIcon(): string
    {

        if(!this.setDisabled)
        {
            if (this.value)
            {
                if (this.options.iconChecked)
                {
                    this.lastIcon = this.options.iconChecked;
                }
                else
                {
                    this.lastIcon = DEFAULT_CHECKED;
                }
            }
            else
            {
                if (this.options.iconUnchecked)
                {
                    this.lastIcon = this.options.iconUnchecked;
                }
                else
                {
                    this.lastIcon = DEFAULT_UNCHECKED;
                }
            }
        }
        return this.lastIcon;
    }
}

export class UiInputCheckboxComponent extends UiInputCommonComponent
{

    controller = UiCheckboxController;
    template = require('./template.html');

}
