import { UiInputSelectController } from '../../../../ui/input/select/component';
declare var ng: ng.IAngularStatic;

require('./style.scss');

class Controller implements ng.IController {

    static $inject = ['$timeout'];

    numberItems: number[] = [1, 2, 3, 4, 5];
    stringItems: string[] = ['one', 'two', 'three', 'four', 'five'];
    objectItems: any[] = [{ value: 1, label: 'one' }, { value: 2, label: 'two' }, { value: 3, label: 'three' }, { value: 4, label: 'four' }]
    objectItems2 : any[] = [{ value: 1, label: 'one' }, { value: 2, label: 'two' }, { value: 3, label: 'three' }, { value: 4, label: 'four' }];
    
    asyncOptions: any = {
        items: [],
        valueFunc: (item) => item.value,
        labelFunc: (item) => item.label
    };

    constructor(protected $timeout: ng.ITimeoutService) {


    }

    asyncObjectSelect: UiInputSelectController;
    asyncPairSelect: UiInputSelectController;
    asyncValueSelect: UiInputSelectController;

    addonClick(event: JQueryEventObject) {
        alert("addon was clicked, details in the conosole");
        console.log(event);
    }

    $onInit() {

        this.$timeout(() => {

            this.asyncObjectSelect.items = [{ id: 1, label: 'one' }, { id: 2, label: 'two' }, { id: 3, label: 'three' }, { id: 4, label: 'four' }];
            this.asyncPairSelect.items = [{ value: 1, label: 'one' }, { value: 2, label: 'two' }, { value: 3, label: 'three' }];
            this.asyncValueSelect.items = ['a', 'b', 'c', 1, 2, 3, true, false];

        }, 5000)

    }

}

class Component implements ng.IComponentOptions {

    controller = Controller;
    template = require('./template.html');

}

export default (module: ng.IModule) => {

    module.component('demoUiInputSelect', new Component());

};
