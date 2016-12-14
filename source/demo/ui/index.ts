import text from './input/text/component';
import number from './input/number/component';
import numberSpinner from './input/number-spinner/component';
import percentage from './input/percentage/component';

export default (module: ng.IModule) => {
    text(module);
    number(module);
    numberSpinner(module);
    percentage(module);
};
