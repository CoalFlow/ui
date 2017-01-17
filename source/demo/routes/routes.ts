import 'angular-route';

export default (mod: ng.IModule) => {

    mod.config(['$routeProvider', '$locationProvider',
        ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {

            $routeProvider

                .when('/', {
                    template: '<home></home>'
                })

                .when('/ui/input/text', {
                    template: '<demo-ui-input-text></demo-ui-input-text>'
                })

                .when('/ui/input/number', {
                    template: '<demo-ui-input-number></demo-ui-input-number>'
                })

                .when('/ui/input/number-spinner', {
                    template: '<demo-ui-input-number-spinner></demo-ui-input-number-spinner>'
                })

                .when('/ui/input/percentage', {
                    template: '<demo-ui-input-percentage></demo-ui-input-percentage>'
                })

                .when('/ui/input/percentage-spinner', {
                    template: '<demo-ui-input-percentage-spinner></demo-ui-input-percentage-spinner>'
                })

                .when('/ui/input/select', {
                    template: '<demo-ui-input-select></demo-ui-input-select>'
                })
                
                .when('/ui/input/datetime', {
                    template: '<demo-ui-input-datetime></demo-ui-input-datetime>'
                })
                .when('/ui/input/datetimespinner', {
                    template: '<demo-ui-input-datetime-spinner></demo-ui-input-datetime-spinner>'
                })
                .when('/ui/input/checkbox', {
                    template: '<demo-ui-input-checkbox></demo-ui-input-checkbox>'
                })

                .when('/b', {
                    template: '<page-b></page-b>'
                })

                .otherwise('/');

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false,
                rewriteLinks: true
            });

        }]);

};
