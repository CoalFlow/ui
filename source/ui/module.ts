import * as ng from 'angular';

import text from './input/text/component';
import number from './input/number/component';
import numberSpinner from './input/number-spinner/component';
import percentage from './input/percentage/component';

//export default function ui(): ng.IModule {

let app = ng.module('ui-testing', [

]);

console.log("initializing ui-testing");

text(app);
number(app);
numberSpinner(app);
percentage(app);

export {
    text,
    number,
    numberSpinner,
    percentage
};

  //  return app;
//};
