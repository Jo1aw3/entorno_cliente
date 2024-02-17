var app = angular.module("app", []);

app.controller("AnimalController", function ($scope, $http) {
  $scope.animals = [];
  $scope.results = {};
  $scope.gameStarted = false;

  // Cargar el arreglo de animales desde el archivo JSON
  $http
    .get("json/animales.json")
    .then(function (response) {
      $scope.animals = response.data;
    })
    .catch(function (error) {
      console.error("Error al cargar el archivo JSON:", error);
    });
});
