declare var ng: ng.IAngularStatic;
// import text from './input/text/component';
// import number from './input/number/component';
// import numberSpinner from './input/number-spinner/component';
// import percentage from './input/percentage/component';
import { UiInputTextComponent } from './input/text/component';

let app = ng.module('ui', [

]);

console.log("initializing ui");

app.component("uiInputText", new UiInputTextComponent());

// text(app);
// number(app);
// numberSpinner(app);
// percentage(app);

export {

};
