angular.module("autosModule",[] )
.controller("autoCtr", function ($scope){
	$scope.autos=[
	
			{marca: "Toyota", modelo: "Yaris", ano: "2010"},
			{marca: "Kia", modelo: "Cerato", ano: "2013"},
			{marca: "Chevrolet", modelo: "Spark", ano: "2015"},
			{marca: "Audi", modelo: "TT", ano: "2010"}
	];

	$scope.save = function(){

	
		$scope.autos.push({marca: $scope.autoNuevo.marca, modelo: $scope.autoNuevo.modelo, ano: $scope.autoNuevo.ano});
		$scope.limpiarDatos();
	
	};

	$scope.eliminar = function(indice) {
	var refreshautos = [];
	for (var i = 0; i < $scope.autos.length; i++) {
      if (i != indice) {
         refreshautos.push($scope.autos[i]);
      }
	}
	$scope.autos = refreshautos;
	};

	$scope.limpiarDatos = function() {
      $scope.autoNuevo.marca = '';
      $scope.autoNuevo.modelo = '';
      $scope.autoNuevo.ano= '';
  
    };
});