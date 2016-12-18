declare var angular: ng.IAngularStatic;

//import * as angular from 'angular';
//import * as $ from 'jquery';

// import text from './input/text/component';
// import number from './input/number/component';
// import numberSpinner from './input/number-spinner/component';
// import percentage from './input/percentage/component';
import { UiInputTextComponent } from './input/text/component';

console.log("initializing ui");
console.log(angular);

let app = angular.module('ui', [

]);

app.component("uiInputText", new UiInputTextComponent());

// text(app);
// number(app);
// numberSpinner(app);
// percentage(app);

export {

};
