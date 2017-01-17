// Generated by dts-bundle v0.6.1

export interface IUiInputCheckboxOptions extends IUiInputCommonOptions {
    iconChecked?: string;
    iconUnchecked?: string;
}
export class UiCheckboxController extends UiInputCommonController<Boolean, IUiInputCheckboxOptions> {
    protected $element: ng.IAugmentedJQuery;
    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes);
    parse(value: string): boolean;
    format(value: boolean): string;
    change(): void;
    $onInit(): void;
    lastIcon: string;
    getIcon(): string;
}
export class UiInputCheckboxComponent extends UiInputCommonComponent {
    controller: typeof UiCheckboxController;
    template: any;
}

export interface IUiInputCommonOptions {
    placeholder?: string;
}
export abstract class UiInputCommonController<TValue, TOptions extends IUiInputCommonOptions> implements ng.IController {
    protected $element: JQuery;
    protected $attrs: ng.IAttributes;
    static $inject: string[];
    ngModel: ng.INgModelController;
    protected defaultOptions: TOptions;
    protected _options: TOptions;
    protected readonly options: TOptions;
    userOptions: TOptions;
    value: TValue;
    setDisabled: boolean;
    setReadonly: boolean;
    constructor($element: JQuery, $attrs: ng.IAttributes);
    $onInit(): void;
    abstract format(value: TValue): any;
    string: any;
    abstract parse(value: string): any;
    TValue: any;
    focus(force: boolean): void;
    unfocus(force: boolean): void;
}
export abstract class UiInputCommonComponent implements ng.IComponentOptions {
    bindings: {
        [slot: string]: string;
    };
    require: {
        [controller: string]: string;
    };
    constructor();
}



export interface IUiInputDateTimeSpinnerOptions extends IUiInputCommonOptions {
    format: string;
    min: Date;
    max: Date;
}
export class UiInputDateTimeSpinnerController extends UiInputCommonController<Date, IUiInputDateTimeSpinnerOptions> {
    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes);
    getDays(): number[];
    getMonths(): string[];
    getYears(): number[];
    getHours(): string[];
    getMinutes(): string[];
    parse(value: string): Date;
    format(value: Date): string;
    $onInit(): void;
}
export class UiInputDateTimeSpinnerComponent extends UiInputCommonComponent {
    controller: typeof UiInputDateTimeSpinnerController;
    template: any;
}

export interface IUiInputDateTimeOptions extends IUiInputCommonOptions {
    format: string;
    increment: number[];
    min: Date;
    max: Date;
}
export class UiInputDateTimeController extends UiInputCommonController<Date, IUiInputDateTimeOptions> {
    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes);
    parse(value: string): Date;
    format(value: Date): string;
    isValid(modelValue: Date): boolean;
    $onInit(): void;
}
export class UiInputDateTimeComponent extends UiInputCommonComponent {
    controller: typeof UiInputDateTimeController;
    template: any;
}

export interface IUiInputNumberSpinnerOptions extends IUiInputNumberOptions {
}
export class UiInputNumberSpinnerController extends UiInputNumberController {
    $input: JQuery;
    $postLink(): void;
    increment(): void;
    decrement(): void;
    changeValueBy(value: number): void;
    setViewValue(value: number): void;
    $onInit(): void;
}
export class UiInputNumberSpinnerComponent extends UiInputCommonComponent implements ng.IComponentOptions {
    controller: typeof UiInputNumberSpinnerController;
    template: any;
}

export interface IUiInputNumberOptions extends IUiInputCommonOptions {
    precision: number;
    increment: number;
    min: number;
    max: number;
}
export class UiInputNumberController extends UiInputCommonController<Number, IUiInputNumberOptions> {
    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes);
    static decimalAdjust(type: string, value: number, exp: number): number;
    static round10(value: number, exp: number): number;
    static floor10(value: number, exp: number): number;
    static ceil10(value: number, exp: number): number;
    parse(value: string): number;
    format(value: number): string;
    $onInit(): void;
}
export class UiInputNumberComponent extends UiInputCommonComponent {
    controller: typeof UiInputNumberController;
    template: any;
    constructor();
}

export interface IUiInputPercentageOptions extends IUiInputCommonOptions {
}
export class UiInputPercentageSpinnerController extends UiInputNumberSpinnerController {
    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes);
    increment(): void;
    decrement(): void;
    parse(value: any): number;
    format(value: any): string;
}
export class UiInputPercentageSpinnerComponent extends UiInputCommonComponent implements ng.IComponentOptions {
    controller: typeof UiInputPercentageSpinnerController;
    template: any;
}

export interface IUiInputPercentageOptions extends IUiInputCommonOptions {
}
export class UiInputPercentageController extends UiInputNumberController {
    parse(value: any): number;
    format(value: any): string;
}
export class UiInputPercentageComponent extends UiInputCommonComponent implements ng.IComponentOptions {
    controller: typeof UiInputPercentageController;
    template: any;
}

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
    ctrl: any;
    placeholder: string;
    $onInit(): void;
    _value: any;
    value: any;
    _items: any[];
    items: any[];
    itemValue: string;
    itemLabel: string;
    itemKey: string;
    getItemLabel(item: any): any;
    getItemKey(item: any): any;
    parse(value: any): any;
    format(value: any): any;
    $postLink(): void;
}
export class UiInputSelectComponent extends UiInputCommonComponent {
    controller: typeof UiInputSelectController;
    template: any;
    constructor();
    transclude: {
        prefix: string;
        postfix: string;
    };
}

export interface IUiInputTextOptions extends IUiInputCommonOptions {
}
export class UiInputTextController extends UiInputCommonController<String, IUiInputTextOptions> implements ng.IController {
    parse(value: String): String;
    format(value: String): String;
    $onInit(): void;
}
export class UiInputTextComponent extends UiInputCommonComponent {
    controller: typeof UiInputTextController;
    template: any;
}

export {  };

