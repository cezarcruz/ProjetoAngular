meuApp.factory('SeriadoService', ['$http', 
                                                 'SiteUrl', 
                                                 function SeriadoService($http, 
                                                		 SiteUrl){
	
	//faz a chama ao serviço que adicona um seriado na base.
	SeriadoService.saveSeriado = function(nome, temporada) {
		return $http.post(SiteUrl.map.baseUrl + '/seriados/add', { nome : nome, temporada : temporada});
	}
	
	return SeriadoService;
}])