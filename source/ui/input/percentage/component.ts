import * as ng from 'angular';
import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';

require('./style.scss');

interface IUiInputPercentageOptions extends IUiInputCommonOptions {

    precision: number; //   The number of decimal places to display

}

class Controller extends UiInputCommonController<Number, IUiInputPercentageOptions> implements ng.IController {

    parse(value): number {
        return value / 100;
    }

    format(value): number {
        return value * 100;
    }

    $onInit() {
        super.$onInit();

        this.ngModel.$parsers.push((value) => this.parse(value));
        this.ngModel.$formatters.push((value) => this.format(value));
    }
}

class Component extends UiInputCommonComponent implements ng.IComponentOptions {

    controller = Controller;
    template = require('./template.html');

}

export default (module: ng.IModule) => {

    module.component('uiInputPercentage', new Component());

};
