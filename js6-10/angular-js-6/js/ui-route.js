angular.module('myApp',['ngRoute'])
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/one',{
            templateUrl : 'js6.1.html',
            // controller : 'fourCtrl'
        })
            .otherwise({
                redirectTo : '/one'
            })
    }]);