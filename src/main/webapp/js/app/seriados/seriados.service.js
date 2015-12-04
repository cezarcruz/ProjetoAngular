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
		
		function saveSeriado(name, season, id) {
			if (id) {
				return $http.put(UrlService.getSiteUrl() + 'series/update', {name : name, season : season, id : id});
			} else {
				return $http.post(UrlService.getSiteUrl() + 'series/add', { name : name, season : season});
			}
		}

		function getAllSeriados() {
			return $http.get(UrlService.getSiteUrl() + 'series/list');
		}
		
		function deleteSeriadoById(id) {
			return $http.delete(UrlService.getSiteUrl() + "series/delete/" + id.toString());
		}
	}	
})();