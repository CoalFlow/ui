declare var angular: ng.IAngularStatic;

import home from './home/component';
import routes from './routes/routes'
import ui from './ui/index';

export default (): ng.IModule => {

    let app = angular.module('demo', [
        'ngRoute',
        'ui-new'
    ]);

    routes(app);
    home(app);
    ui(app);

    return app;

};


