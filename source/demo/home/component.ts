///declare var angular: ng.IAngularStatic;

require('./style.scss');

class Controller implements ng.IController {

    constructor() {

    }

}

class Component implements ng.IComponentOptions {

    controller = Controller;
    template = require('./template.html');

}


export default (module: ng.IModule) => {

    module.component('home', new Component());

};
