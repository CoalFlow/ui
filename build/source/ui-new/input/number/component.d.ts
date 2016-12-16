/// <reference types="angular" />
import * as ng from 'angular';
import { IUiInputCommonOptions } from '../common/component';
export interface IUiInputNumberOptions extends IUiInputCommonOptions {
    precision: number;
}
declare var _default: (module: ng.IModule) => void;
export default _default;
