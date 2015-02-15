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
	$scope.seriados = [];//seriados vindo do servidor.
	
	$scope.save = function(nome, temporada) {
		SeriadoService.saveSeriado(nome, temporada).success(function(data){
			$scope.alerts.push({type : 'success', msg : 'O Seriado foi adicionado com sucesso.'});
			$scope.getSeriados();
			$scope.nome = "";
			$scope.temporada = "";
		}).error(function(data) {
			$scope.alerts.push({type : 'danger', msg : data[0].message});
		});
	}
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	
	$scope.getSeriados = function() {
		//ao carregar o controller faz a busca de todos os seriados.
		SeriadoService.getAllSeriados().success(function(data){
			$scope.seriados = data;
		});
	}
	
	$scope.getSeriados();
}]);