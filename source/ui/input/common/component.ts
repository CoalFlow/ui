import * as lodashMerge from 'lodash/merge';

//declare var $: JQueryStatic;

require("./style.scss");
require("./ui-common-embedded.css");

export interface IUiInputCommonOptions {

    placeholder?: string;    //  The string to display on the input when there is no value

}

export abstract class UiInputCommonController<TValue, TOptions extends IUiInputCommonOptions> implements ng.IController {

    static $inject = ['$element', '$attrs', '$parse', '$scope'];

    ngModel: ng.INgModelController;

    protected defaultOptions: TOptions;

    protected _options: TOptions;
    protected get options(): TOptions {

        if (!this._options) {
            this._options = lodashMerge({}, this.defaultOptions, this.userOptions);
        }
        return this._options;
    }


    userOptions: TOptions;

    value: TValue;

    setDisabled: boolean;
    setReadonly: boolean;

    constructor(protected $element: JQuery, protected $attrs: ng.IAttributes) {
        this.defaultOptions = <TOptions>{};
    }

    $onInit() {


        this.ngModel.$parsers.push((value) => this.parse(value));
        this.ngModel.$formatters.push((value) => this.format(value));

        //  Add a common class for styling
        this.$element.addClass("ui-input");

        //  Add and remove the focussed class when this control has the focus
        this.$element.on('focus', '*', () => this.focus(false));
        this.$element.on('blur', '*', () => this.unfocus(false));

    }

    abstract format(value: TValue); string;

    abstract parse(value: string); TValue;

    focus(force: boolean) {
        this.$element.addClass("focussed");
    }

    unfocus(force: boolean) {
        this.$element.removeClass("focussed");
    }

}

export abstract class UiInputCommonComponent implements ng.IComponentOptions {

    bindings: { [slot: string]: string } = {
        userOptions: '<options'
    };

    require: { [controller: string]: string } = {
        ngModel: 'ngModel'
    };

    constructor()
    {

        // This binds the disabled state to a string that will only disable the
        // component if the string is 'true'. There are alternative mechanisms for this
        // but this keeps the component binding mechanism consistent.

        this.bindings["setDisabled"] = "=uiDisabled";

        // This binds the readonly state to a string that will only set the
        // component eadonly if the string is 'true'. There are alternative mechanisms for this
        // but this keeps the component binding mechanism consistent.

        this.bindings["setReadonly"] = "=uiReadonly";

    }
}

// class Component implements ng.IComponentOptions {

//     controller = Controller;
//     template = require('./template.html');

//     bindings: { [slot: string]: string } = {
//         options: '='
//     };

// }

// export default (module: ng.IModule) => {

//     module.component('uiInputNumber', new Component());

// };
