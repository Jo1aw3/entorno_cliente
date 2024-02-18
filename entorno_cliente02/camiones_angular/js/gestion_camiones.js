angular.module("app", []).controller("controller", function ($scope, $http) {

  $scope.trucks = [
    /*
      {
        id: 1,
        modelo: "Camión A",
        marca: "Marca X",
        ano: 2020,
        imagen: "img/camion1.jpeg"
      },
      {
        id: 2,
        modelo: "Camión B",
        marca: "Marca Y",
        ano: 2022,
        imagen: "img/camion2.jpeg"
      },
      {
        id: 3,
        modelo: "Camión D",
        marca: "Marca Z",
        ano: 2019,
        imagen: "img/camion3.jpeg"
      }
    */
  ];

  $scope.newTruck = {};

  $http.get("json/camiones.json")
    .then(function (response) {
      $scope.trucks = response.data;
      console.log($scope.trucks);
    })
    .catch(function (error) {
      console.error("Error al cargar el archivo JSON:", error);
    });

  $scope.showTruckDetails = function (truck) {
    alert(
      "Detalles del Camión:\nModelo: " +
        truck.modelo +
        "\nMarca: " +
        truck.marca +
        "\nAño: " +
        truck.ano
    );
  };

  $scope.addTruck = function () {
    $scope.newTruck.id = $scope.trucks.length + 1;
    $scope.trucks.push($scope.newTruck);
    $scope.newTruck = {};
    console.log($scope.trucks);
  };

});