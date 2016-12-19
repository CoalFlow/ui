declare var ng: ng.IAngularStatic;

require('./index.scss');

import home from './home/component';
import routes from './routes/routes'
import ui from './ui/index';

export default (): ng.IModule => {

    let app = ng.module('demo', [
        'ngRoute',
        'ui',
        'ui.validate'
    ]);

    routes(app);
    home(app);
    ui(app);

    return app;

};


