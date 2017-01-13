require('./style.scss');

class Controller implements ng.IController {

    dateValue: Date;
    dateMinValue: Date;
    dateMaxValue: Date;
    constructor() {
        this.dateValue = new Date();
        this.dateMinValue = new Date(2016, 11, 30, 10);
        this.dateMaxValue = new Date(2017, 2, 31, 16, 30);
    }

}

class Component implements ng.IComponentOptions {

    controller = Controller;
    template = require('./template.html');

}


export default (module: ng.IModule) => {

    module.component('demoUiInputDatetimeSpinner', new Component());

};
