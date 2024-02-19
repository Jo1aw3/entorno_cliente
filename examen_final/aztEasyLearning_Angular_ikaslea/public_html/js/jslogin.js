angular
  .module("app", [])
  .controller("controller", function ($scope, $http, $window) {
    $scope.usuarios = [];

    $http.get("json/usuarios.json").then(function (response) {
      $scope.usuarios = response.data;
      console.log($scope.usuarios);
    });

    $scope.submitForm = function () {
      $scope.logMal = true;
      var esAdmin = false;

      // Verificar correo y contraseña
      angular.forEach($scope.usuarios, function (usuario) {
        if (
          usuario.userName == $scope.usuario.correo &&
          usuario.password == $scope.usuario.contra
        ) {
          $scope.logMal = false;
          if (usuario.userType == "admin") {
            esAdmin = true;
          }
        }
      });

      if (!$scope.logMal) {
        alert("ta bien todo, login correcto");
        if (esAdmin) {
          $window.location.href = "administration.html";
        } else {
          $window.location.href = "GetStarted.html";
        }
      } else {
        alert("ta to mal, login incorrecto");
      }
    };

    


  });
