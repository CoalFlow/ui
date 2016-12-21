declare var angular: ng.IAngularStatic;

import { UiInputDateTimeComponent } from "./input/datetime/component";
import { UiInputTextComponent } from './input/text/component';
import { UiInputNumberComponent } from './input/number/component';
import { UiInputNumberSpinnerComponent } from './input/number-spinner/component';
import { UiInputPercentageComponent } from './input/percentage/component';
import { UiInputSelectComponent } from './input/select/component';
import { UiInputCheckboxComponent } from "./input/checkbox/component";

let app = angular.module('ui', [

]);

 app
     .component("uiInputText", new UiInputTextComponent())
    .component("uiInputNumber", new UiInputNumberComponent())
    .component("uiInputNumberSpinner", new UiInputNumberSpinnerComponent())
     .component("uiInputPercentage", new UiInputPercentageComponent())
     .component("uiInputSelect", new UiInputSelectComponent())
     .component("uiInputDatetime", new UiInputDateTimeComponent())
     .component("uiInputCheckbox", new UiInputCheckboxComponent())
 ;

// text(app);
// number(app);
// numberSpinner(app);
// percentage(app);

export {

};
