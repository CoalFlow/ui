import * as lodash from 'lodash';
import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';

require('./style.scss');

export interface IUiInputSelectOptions extends IUiInputCommonOptions {

    items: any[];
    valueFunc?: (item: any) => any;
    valueProp?: string;
    labelFunc?: (item: any) => string;
    labelProp?: string;

}

export class UiInputSelectController extends UiInputCommonController<Number, IUiInputSelectOptions> {

    items: any[];
    ngOptions: any;

    constructor($element: ng.IAugmentedJQuery) {
        super($element);
    }

    changeValue() {

        //  Set the view value on ngModel (this may be rejected if it is invalid, end result will be null)
        this.ngModel.$setViewValue(this.value);

    }

    parse(value: any): any {
        return value;
    }

    format(value: any): any {
        return value;
    }

    $onChanges(changes) {
        this._options = null;

        this.resetItems();
    }

    resetItems() {
        //  generate the value  and keyfunction
        let valueFunction: (item: any) => any;

        if (lodash.isFunction(this.options.valueFunc)) {
            valueFunction = this.options.valueFunc;
        } else if (lodash.isString(this.options.valueProp)) {
            valueFunction = (item: any) => {
                return item[<string>this.options.valueProp];
            }
        } else {
            valueFunction = (item: any) => item;
        }

        let labelFunction: (item: any) => string;

        if (lodash.isFunction(this.options.labelFunc)) {
            labelFunction = this.options.labelFunc;
        } else if (lodash.isString(this.options.labelProp)) {
            labelFunction = (item: any) => {
                return item[<string>this.options.labelProp];
            }
        } else {
            labelFunction = (item: any) => <string>item;
        }

        this.items = lodash(this.options.items).map((item) => {

            return {
                value: valueFunction(item),
                label: labelFunction(item)
            };

        }).value();

    }


    $onInit() {
        super.$onInit();

        //  parse the items

        this.resetItems();

        this.ngModel.$render = () => {
            this.value = this.ngModel.$viewValue;
        }

        console.log(this.ngOptions);

    }

}

export class UiInputSelectComponent extends UiInputCommonComponent {

    controller = UiInputSelectController;
    template = require('./template.html');

    constructor() {
        super();

        this.require["ngOptions"] = "?=ngOptions";

    }
}

// export default (module: ng.IModule) => {

//     module.component('uiInputNumber', new Component());

// };
