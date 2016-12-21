//import * as ng from 'angular';

require('./style.scss');

class Controller implements ng.IController {

    checkValue: boolean = true;

}

class Component implements ng.IComponentOptions {

    controller = Controller;
    template = require('./template.html');

}


export default (module: ng.IModule) => {

    module.component('demoUiInputCheckbox', new Component());

};
