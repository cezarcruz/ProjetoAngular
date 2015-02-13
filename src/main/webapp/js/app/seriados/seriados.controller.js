/**
 * Controller do seriados.
 */
meuApp.controller('SeriadosCtrl', ['$scope', 
                                   'SeriadoService', 
                                   function(
                                		  $scope, 
                                		  SeriadoService
                                		  ){
	$scope.alerts = [
     { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
     { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
   ];
	$scope.save = function(nome, temporada) {
		SeriadoService.saveSeriado(nome, temporada).success(function(data){
			$scope.alerts.push({type : 'success', msg : 'O Seriado doi adicionado com sucesso.'});
		}).error(function(data) {
			$scope.alerts.push({type : 'danger', msg : 'Não foi possivel inserir o Seriado.'});		
		});
	}
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};		              
}]);