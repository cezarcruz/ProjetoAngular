(function(){
	angular.module('app.seriado').factory('SeriadoService', SeriadoService);

	SeriadoService.$inject = ['$http', 'UrlService'];

	function SeriadoService($http, UrlService) {
		
		var service = {
			saveSeriado : saveSeriado,
			getAllSeriados : getAllSeriados,
			deleteSeriadoById : deleteSeriadoById
		};
		
		return service;
		
		function saveSeriado(nome, temporada, id) {
			if (id) {
				return $http.put(UrlService.getSiteUrl() + 'seriados/update', {nome : nome, temporada : temporada, id : id});
			} else {
				return $http.post(UrlService.getSiteUrl() + 'seriados/add', { nome : nome, temporada : temporada});
			}
		}
		
		//busca todos os seriados cadastrados no sistema.
		function getAllSeriados() {
			return $http.get(UrlService.getSiteUrl() + 'seriados/list');
		}
		
		function deleteSeriadoById(id) {
			return $http.delete(UrlService.getSiteUrl() + "seriados/delete/" + id.toString());
		}
	}	
})();