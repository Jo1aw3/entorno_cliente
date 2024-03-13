angular
  .module("app", [])
  .controller("controller", function ($scope, $http, $window) {



    // 1 sacar el id del usuario [x]
    // 2 encontrar ese usuario en la lista, igual en el login [x]
    // 3 ahora que tengo ese usuario, sacar ese curso en el que esta matriculado []
    // 4 sacar por pantalla los puntos y en nivel de realización []
    // 5 buscar el curso del usuario en la lista de cursos []
    // 6 y de la lista de curso sacar el nivel []
    // 7 sacar por pantalla el tipo del curso, el nombre del curso, el level del curso []

    // localStorage.getItem('id');

    var idUsuario = localStorage.getItem('id');
    console.log("Id de Usuario: " + idUsuario);
    $scope.usuarios = [];
    $scope.usuarioActual = [];

    var nivelRealizacion;
    var puntos;
    var curso;

    $http.get("json/usuarios.json").then(function (response) {
      $scope.usuarios = response.data;
      console.log($scope.usuarios);
      angular.forEach($scope.usuarios, function (usuario) {
        if (usuario.id == idUsuario) {
          nivelRealizacion = usuario.nivelRealizacion;
          puntos = usuario.puntos;
          curso = usuario.curso;
          console.log(nivelRealizacion + ", " + puntos + ", " + curso);
        }
      });

    });

    $scope.cursos = [];
    $scope.cursosFiltro = [];

    $http.get("json/cursos.json").then(function (response) {
      // cargo los datos del Json
      $scope.cursos = response.data;
      console.log($scope.cursos);
      // filtrar los datos por el "curso" del usuario, y guardarlo en otro array

    });


    $http.get("json/actividades.json").then(function (response) {
        $scope.actividades = response.data;
        console.log($scope.actividades);  
    });

  });