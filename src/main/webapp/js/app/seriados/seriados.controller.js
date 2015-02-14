/**
 * Controller do seriados.
 */
meuApp.controller('SeriadosCtrl', ['$scope', 
                                   'SeriadoService', 
                                   function(
                                		  $scope, 
                                		  SeriadoService
                                		  ){
	$scope.alerts = [];
	$scope.save = function(nome, temporada) {
		SeriadoService.saveSeriado(nome, temporada).success(function(data){
			$scope.alerts.push({type : 'success', msg : 'O Seriado foi adicionado com sucesso.'});
		}).error(function(data) {
			$scope.alerts.push({type : 'danger', msg : data[0].message});
		});
	}
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};		              
}]);