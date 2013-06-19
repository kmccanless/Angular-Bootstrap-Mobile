var caiMobile = angular.module('caiMobile', []).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'contactList.html',
                controller: "listCtrl"
            }).
            when('/contact/:id', {
                templateUrl: 'contactShow.html',
                controller: "showCtrl"
            }).
            when('/contacts/add', {
                templateUrl: 'contactAdd.html',
                controller: "addCtrl"
            }).
            when('/contact/:id/edit', {
                templateUrl: 'contactEdit.html',
                controller: "editCtrl"
            })
            .otherwise(
            {
                redirectTo:'/home'
            }
            );
        $locationProvider.html5Mode(true);
    }]);
