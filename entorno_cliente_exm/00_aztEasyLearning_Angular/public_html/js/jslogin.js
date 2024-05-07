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
      var idUsuario;

      // Verificar correo y contraseña
      angular.forEach($scope.usuarios, function (usuario) {
        if (
          usuario.userName == $scope.usuario.correo &&
          usuario.password == $scope.usuario.contra
        ) {
          $scope.logMal = false;
          // como despues del bucle el "usuario" deja de existir, 
          // en una variable anteriormente creada guardo el valor del id del usuario
          idUsuario = usuario.id;
          if (usuario.userType == "admin") {
            esAdmin = true;
          } 
        }
      });

      if (!$scope.logMal) {
        alert("login correcto");
        console.log(idUsuario);
        if (esAdmin) {
          $window.location.href = "administration.html";
        } else {
          localStorage.setItem('id', idUsuario); 
          $window.location.href = "GetStarted.html";

          // como se cambia de pagina, las siguientes lineas comentadas no funcionan
          // var data = JSON.stringify(usuario);
          // localStorage.setItem('id', usuario.id);
        }
      } else {
        alert("ta to mal, login incorrecto");
      }
    };

    


  });
