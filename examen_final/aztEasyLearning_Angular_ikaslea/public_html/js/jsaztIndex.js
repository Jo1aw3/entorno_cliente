var app = angular.module('app', []).controller('controller', function($scope, $window) {

    $scope.showLogin = function() {
        $window.location.href = 'login.html';
    };

});