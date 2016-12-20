declare var angular: ng.IAngularStatic;

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

    //  exposes this controller to its parent
    ctrl: any;

    private _items: any[] = undefined;

    get items(): any[] {
        return this.options.items;
    }

    set items(value: any[]) {
        this.options.items = value;
        this._itemOptions = undefined;
    }

    _itemOptions: any[] = undefined;
    get itemOptions() :any[] {

        if (this._itemOptions == undefined) {

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

            this._itemOptions = lodash(this.options.items).map((item) => {

                return {
                    value: valueFunction(item),
                    label: labelFunction(item)
                };

            }).value();
        }

        return this._itemOptions;
    }

    constructor($element: ng.IAugmentedJQuery) {
        super($element);

    }


    _value: any = undefined;

    get value() : any {
        return this._value;
    }

    set value(value) {
        this._value = value;
        this.ngModel.$setViewValue(this.value);
    }

    parse(value: any): any {
        return value;
    }

    format(value: any): any {
        return value;
    }

    $onInit() {
        super.$onInit();

        //  set the controller
        if (!angular.isUndefined(this.ctrl)) {
            this.ctrl = this;
        }

        //  bind the ngModel's $render function to this value
        this.ngModel.$render = () => {
            this._value = this.ngModel.$viewValue;
        }
    }

}

export class UiInputSelectComponent extends UiInputCommonComponent {

    controller = UiInputSelectController;
    template = require('./template.html');

    constructor() {
        super();

        this.bindings["ctrl"] = "=?";

    }

}
