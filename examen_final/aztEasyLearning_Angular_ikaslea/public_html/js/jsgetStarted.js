angular
  .module("app", [])
  .controller("controller", function ($scope, $http, $window) {

    $http.get("json/actividades.json").then(function (response) {
        $scope.actividades = response.data;
        console.log($scope.actividades);
        
    });

    

  });