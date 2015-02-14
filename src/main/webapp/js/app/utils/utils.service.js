//retorna o contextpath do servidor quando rodarem na mesma maquina.
meuApp.factory('SiteUrl', [function SiteUrl() {
	SiteUrl.map = {};
	SiteUrl.setUrl = function(url) {
		SiteUrl.map.baseUrl = url;
	}
	return SiteUrl;
}]);