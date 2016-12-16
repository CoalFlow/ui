import * as ng from 'angular';
import home from './home/component';
import routes from './routes/routes'
import ui from './ui/index';

export default (): ng.IModule => {

    let app = ng.module('demo', [
        'ngRoute',
        'gui'
    ]);

    routes(app);
    home(app);
    ui(app);

    return app;

};


