//import * as ng from 'angular';
import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';
import { IUiInputNumberOptions } from '../number/component';

require('./style.scss');
require('./ui-embedded.css');


interface IUiInputNumberSpinnerOptions extends IUiInputNumberOptions {

}

class Controller extends UiInputCommonController<Number, IUiInputNumberSpinnerOptions> implements ng.IController {

}

class Component extends UiInputCommonComponent implements ng.IComponentOptions {

    controller = Controller;
    template = require('./template.html');

}

export default (module: ng.IModule) => {

    module.component('uiInputNumberSpinner', new Component());

};
