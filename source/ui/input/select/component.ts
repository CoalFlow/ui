declare var angular: ng.IAngularStatic;
import * as lodashMap from 'lodash/map';
import * as lodashIsFunction from 'lodash/isFunction';
import * as lodashIsString from 'lodash/isString';
import * as lodashFind from 'lodash/find';

import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';

require('./style.scss');

export interface IUiInputSelectOptions extends IUiInputCommonOptions {

    items: any[];
    valueFunc?: (item: any) => any;
    valueProp?: string;
    labelFunc?: (item: any) => string;
    labelProp?: string;
    keyFunc?: (item: any) => any;
    keyProp?: string;
}

export class UiInputSelectController extends UiInputCommonController<Number, IUiInputSelectOptions> {

    //  exposes this controller to its parent
    ctrl: any;

    placeholder: string;

    $onInit() {
        super.$onInit();

        //  Expose the controller 
        if (this.ctrl != undefined) {
            this.ctrl = this;
        }

        //  bind the ngModel's $render function to this value
        this.ngModel.$render = () => {
            this._value = this.ngModel.$viewValue;
        }

    }

    //  value
    _value: any;

    get value(): any {
        return this._value;
    }

    set value(value: any) {
        this._value = value;
        this.ngModel.$setViewValue(value);
    }

    //  items
    _items: any[] = undefined;

    set items(value: any[]) {
        this._items = value;
    }

    get items() {
        return this._items;
    }

    itemValue: string = undefined;
    itemLabel: string = undefined;
    itemKey: string = undefined;

    getItemLabel(item: any) {

        if (this.itemLabel) {
            return item[this.itemLabel];
        } else {
            return item;
        }

    }

    parse(value: any): any {

        if (this.itemValue) {
            return value[this.itemValue];
        } else {
            return value;
        }

    }

    format(value: any): any {

        if (value && this.itemValue) {
            return lodashFind(this.items, (item) => item[this.itemValue] === value);
        } else if (value && this.itemKey) {
            return lodashFind(this.items, (item) => item[this.itemKey] === value[this.itemKey]);
        } else {
            return value;
        }

    }

}

export class UiInputSelectComponent extends UiInputCommonComponent {

    controller = UiInputSelectController;
    template = require('./template.html');

    constructor() {
        super();

        this.bindings["ctrl"] = "=?";
        this.bindings["placeholder"] = "=?uiPlaceholder";
        this.bindings["items"] = "<?uiItems";
        this.bindings["itemValue"] = "@?uiItemValue";
        this.bindings["itemLabel"] = "@?uiItemLabel";
        this.bindings["itemKey"] = "@?uiItemKey";

    }

}
