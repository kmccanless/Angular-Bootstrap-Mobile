caiMobile.controller('listCtrl', function ContactListCtrl($scope, $http,$location) {
    $http.get('/contacts').
        success(function(data, status, headers, config){
            if(data){
                $scope.contacts = data.contacts;
            }
        });
    $scope.getContactDetails = function(email) {
        $location.path( '/contact/' +  email );
    }
});

caiMobile.controller('showCtrl', function ContactShowCtrl($scope, $http, $routeParams, $location) {
    $http.get('/contact/'+$routeParams.id).
        success(function(data, status, headers, config) {
            if(data){
                $scope.contact = data.contact;
            }else {
                //handle error/redirect to list
                $location.path('/');
            }
        });
    $scope.back = function() {
        $location.path('/');
    }
});

caiMobile.controller('addCtrl', function PostAddCtrl($scope, $http, $location) {
    $scope.submitPost = function() {
        $http.post('/contact', {
            post_title: $scope.post_title,
            post_body: $scope.post_body
        }).success(function(data, status, headers, config) {
                if(data.success){
                    $location.path('/');
                }else {
                    //do something about the error
                }
            });
    };
});

