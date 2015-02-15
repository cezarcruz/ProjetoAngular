meuApp.factory('SeriadoService', ['$http', 
                                                 'SiteUrl', 
                                                 function SeriadoService($http, 
                                                		 SiteUrl){
	
	//faz a chama ao serviço que adicona um seriado na base.
	SeriadoService.saveSeriado = function(nome, temporada) {
		return $http.post(SiteUrl.map.baseUrl + '/seriados/add', { nome : nome, temporada : temporada});
	}
	
	//busca todos os seriados cadastrados no sistema.
	SeriadoService.getAllSeriados = function() {
		return $http.get(SiteUrl.map.baseUrl + '/seriados/list');
	}
	return SeriadoService;
}])