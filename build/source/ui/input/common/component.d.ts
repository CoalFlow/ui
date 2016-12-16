/// <reference types="jquery" />
/// <reference types="angular" />
export interface IUiInputCommonOptions {
    placeholder: string;
}
export declare class UiInputCommonController<TValue, TOptions extends IUiInputCommonOptions> implements ng.IController {
    protected $element: JQuery;
    static $inject: string[];
    ngModel: angular.INgModelController;
    options: TOptions;
    value: TValue;
    constructor($element: JQuery);
    $onInit(): void;
    focus(force: boolean): void;
    unfocus(force: boolean): void;
}
export declare abstract class UiInputCommonComponent implements ng.IComponentOptions {
    bindings: {
        [slot: string]: string;
    };
    require: {
        [controller: string]: string;
    };
}
