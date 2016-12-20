declare var angular: ng.IAngularStatic;
import * as lodashMap from 'lodash/map';
import * as lodashIsFunction from 'lodash/isFunction';
import * as lodashIsString from 'lodash/isString';

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

    //  itemOptions
    get itemOptions(): any[] {
        return this._items;
    }
        
    parse(value: any): any {
        return value;
    }

    format(value: any): any {
        return value;
    }


    // private _items: any[] = undefined;

    // get items(): any[] {
    //     return this.options.items;
    // }

    // set items(value: any[]) {
    //     this.options.items = value;
    //     this._itemOptions = undefined;
    // }

    // _itemOptions: any[] = undefined;
    // get itemOptions() :any[] {

    //     if (this._itemOptions == undefined) {

    //         let functions = this.getFunctions();
            

    //         this._itemOptions = lodashMap(this.options.items, (item) => {

    //             return {
    //                 value: functions.valueFunction(item),
    //                 label: functions.labelFunction(item),
    //                 key: functions.keyFunction(item)
    //             };

    //         });

    //         console.log(this._itemOptions);
    //     }

    //     return this._itemOptions;
    // }

    // constructor($element: ng.IAugmentedJQuery) {
    //     super($element);

    // }


    // _value: any = undefined;

    // get value() : any {
    //     return this._value;
    // }

    // set value(value) {
    //     this._value = value;
    //     this.ngModel.$setViewValue(this.value.value);
    // }

    // getFunctions() {


    //         //  Generate the value function
    //         let valueFunction: (item: any) => any;

    //         if (lodashIsFunction(this.options.valueFunc)) {
    //             valueFunction = this.options.valueFunc;
    //         } else if (lodashIsString(this.options.valueProp)) {
    //             valueFunction = (item: any) => {
    //                 return item[<string>this.options.valueProp];
    //             }
    //         } else {
    //             valueFunction = (item: any) => item;
    //         }

    //         //  Generate the key function
    //         let keyFunction: (item: any) => any;

    //         if (lodashIsFunction(this.options.keyFunc)) {
    //            keyFunction = this.options.keyFunc;
    //          } else if (lodashIsString(this.options.keyProp)) {
    //             keyFunction = (item: any) => {
    //                return item[<string>this.options.keyProp];
    //            }
    //         } else {
    //            keyFunction = valueFunction;
    //         }


    //         //  Generate the label function
    //         let labelFunction: (item: any) => string;

    //         if (lodashIsFunction(this.options.labelFunc)) {
    //             labelFunction = this.options.labelFunc;
    //         } else if (lodashIsString(this.options.labelProp)) {
    //             labelFunction = (item: any) => {
    //                 return item[<string>this.options.labelProp];
    //             }
    //         } else {
    //             labelFunction = (item: any) => <string>item;
    //         }

    //         return {
    //             labelFunction: labelFunction,
    //             valueFunction: valueFunction,
    //             keyFunction: keyFunction
    //         };



    // }
    // $onInit() {
    //     super.$onInit();

    //     //  set the controller
    //     if (!angular.isUndefined(this.ctrl)) {
    //         this.ctrl = this;
    //     }

    //     //  bind the ngModel's $render function to this value
    //     this.ngModel.$render = () => {
            
    //         console.log("rendering");

    //         var viewValue = this.ngModel.$viewValue;

    //         var functions = this.getFunctions();

    //         console.log(viewValue);
    //         if (viewValue) {

    //         this._value = {
    //             label: functions.labelFunction(viewValue),
    //             value: viewValue,
    //             key: functions.keyFunction(viewValue)
    //         };

    //         console.log(this._value);

    //         }

    //       //  this._value = this.ngModel.$viewValue;
    //     }
    // }

}

export class UiInputSelectComponent extends UiInputCommonComponent {

    controller = UiInputSelectController;
    template = require('./template.html');

    constructor() {
        super();

        this.bindings["ctrl"] = "=?";
        this.bindings["placeholder"] = "=?uiPlaceholder";
        this.bindings["items"] = "<?uiItems";

    }

}
