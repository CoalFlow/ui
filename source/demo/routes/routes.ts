import 'angular-route';

export default (mod: ng.IModule) => {

    mod.config(['$routeProvider', '$locationProvider',
        ($routeProvider: angular.route.IRouteProvider, $locationProvider: angular.ILocationProvider) => {

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
