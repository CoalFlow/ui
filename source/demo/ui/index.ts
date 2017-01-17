import text from './input/text/component';
import number from './input/number/component';
import numberSpinner from './input/number-spinner/component';
import percentage from './input/percentage/component';
import select from './input/select/component';
import datetime from "./input/datetime/component";
import datetimeSpinner from "./input/datetime-spinner/component";
import checkbox from "./input/checkbox/component";
import percentageSpinner from "./input/percentage-spinner/component";

export default (module: ng.IModule) => {
    text(module);
    number(module);
    numberSpinner(module);
    percentage(module);
    select(module);
    datetime(module);
    datetimeSpinner(module);
    checkbox(module);
    percentageSpinner(module);
};
