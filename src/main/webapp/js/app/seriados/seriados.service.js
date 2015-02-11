angular.module('app').factory('SeriadoService', ['$http', function SeriadoService($http){
	SeriadoService.saveSeriado = function(nome, temporada) {
		return $http.post('http://localhost:8080/angular/seriados/add', { nome : nome, temporada : temporada});
	}
	
	return SeriadoService;
}])