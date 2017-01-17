declare var angular: ng.IAngularStatic;

import { UiInputDateTimeComponent } from "./input/datetime/component";
import { UiInputDateTimeSpinnerComponent } from "./input/datetime-spinner/component";
import { UiInputTextComponent } from './input/text/component';
import { UiInputNumberComponent } from './input/number/component';
import { UiInputNumberSpinnerComponent } from './input/number-spinner/component';
import { UiInputPercentageComponent } from './input/percentage/component';
import { UiInputPercentageSpinnerComponent } from "./input/percentage-spinner/component";
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
     .component("uiInputDatetimeSpinner", new UiInputDateTimeSpinnerComponent())
     .component("uiInputCheckbox", new UiInputCheckboxComponent())
     .component("uiInputPercentageSpinner", new UiInputPercentageSpinnerComponent())
 ;

// text(app);
// number(app);
// numberSpinner(app);
// percentage(app);

export {

};
