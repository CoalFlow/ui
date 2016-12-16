//import * as ng from 'angular';


require("./style.scss");

export interface IUiInputCommonOptions {

    placeholder: string;    //  The string to display on the input when there is no value

}

export class UiInputCommonController<TValue, TOptions extends IUiInputCommonOptions> implements ng.IController {

    static $inject = ['$element'];

    ngModel: angular.INgModelController;
    options: TOptions;
    value: TValue;

    constructor(protected $element: JQuery) { }

    $onInit() {

        //  Add a common class for styling
        this.$element.addClass("ui-input");

        //  Add and remove the focussed class when this control has the focus
        this.$element.on('focus', '*', () => this.focus(false));
        this.$element.on('blur', '*', () => this.unfocus(false));

        var $input = $(this.$element.find('input'));

        $input.on("change keyup", (event: JQueryEventObject) => {
            this.ngModel.$setViewValue($input.val());
        })

        this.ngModel.$render = () => {
            $input.val(this.ngModel.$viewValue);
        };
    }

    focus(force: boolean) {
        this.$element.addClass("focussed");
    }

    unfocus(force: boolean) {
        this.$element.removeClass("focussed");
    }

}

export abstract class UiInputCommonComponent implements ng.IComponentOptions {

    bindings: { [slot: string]: string } = {
        options: '='
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
