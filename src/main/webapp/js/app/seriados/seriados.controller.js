/**
 * Controller do seriados.
 */
angular.module('app').controller('SeriadosCtrl', ['$scope', 'SeriadoService', function($scope, SeriadoService){
	$scope.save = function(nome, temporada) {
		SeriadoService.saveSeriado(nome, temporada).success(function(data){
			alert("Seriado " + nome + " Salvo");
		}).error(function(data) {
			alert(data);
		});
	}
}]);