import * as ng from 'angular';

import text from './input/text/component';
import number from './input/number/component';
import numberSpinner from './input/number-spinner/component';
import percentage from './input/percentage/component';

export default (): ng.IModule => {

    let app = ng.module('ui', [

    ]);

    text(app);
    number(app);
    numberSpinner(app);
    percentage(app);

    return app;
};
