import * as lodashMerge from 'lodash/merge';
import * as ng from 'angular';

//declare var $: JQueryStatic;

require("./style.scss");

export interface IUiInputCommonOptions {

    placeholder?: string;    //  The string to display on the input when there is no value

}

export abstract class UiInputCommonController<TValue, TOptions extends IUiInputCommonOptions> implements ng.IController {

    static $inject = ['$element', '$attrs'];

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
