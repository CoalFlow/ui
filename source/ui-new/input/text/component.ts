//import * as ng from 'angular';
import { IUiInputCommonOptions, UiInputCommonController, UiInputCommonComponent } from '../common/component';

require('./style.scss');

interface IUiInputTextOptions extends IUiInputCommonOptions {

}

class Controller extends UiInputCommonController<String, IUiInputTextOptions> implements ng.IController {

}

class Component extends UiInputCommonComponent {

    controller = Controller;
    template = require('./template.html');

}

export default (module: ng.IModule) => {

    module.component('uiInputText', new Component());

};
