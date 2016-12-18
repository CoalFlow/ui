import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';

require('./style.scss');

export interface IUiInputNumberOptions extends IUiInputCommonOptions {

    precision: number; //   The number of decimal places to display

}

export class UiInputNumberController extends UiInputCommonController<Number, IUiInputNumberOptions> {

}

export class UiInputNumberComponent extends UiInputCommonComponent {

    controller = UiInputNumberController;
    template = require('./template.html');

}

// export default (module: ng.IModule) => {

//     module.component('uiInputNumber', new Component());

// };
