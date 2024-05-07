angular
  .module("app", [])
  .controller("controller", function ($scope, $http, $window) {

    $scope.usuarios = [];
    $scope.cursos = [];
    $scope.actividades = [];

    $http.get("json/usuarios.json").then(function (response) {
      $scope.usuarios = response.data;
      console.log($scope.usuarios);
    });

    $http.get("json/cursos.json").then(function (response) {
      $scope.cursos = response.data;
      console.log($scope.cursos);
    });

    $http.get("json/actividades.json").then(function (response) {
      $scope.actividades = response.data;
      console.log($scope.actividades);
    });

  });