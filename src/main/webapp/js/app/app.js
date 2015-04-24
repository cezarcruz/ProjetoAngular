(function() {
	angular.module('app', [ 'ui.router', 'ui.bootstrap', 'app.seriado', 'app.urls']);

	// Configura as rotas.
	angular.module('app').config(config).run(['UrlService', '$location', run]);
	
	function run (UrlService, $location) {
		var url;
		url = $location.absUrl().substring(0, $location.absUrl().indexOf('#') - 0);
		if (url == "" || url == undefined) {
			url = $location.absUrl();
		}
		UrlService.setSiteUrl(url);
	}
	
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
		$stateProvider.state('seriados', {
			url : "/series/add",
			templateUrl : "views/seriados/seriados-add.html",
			controller : 'SeriadosCtrl',
			controllerAs : 'vm'
		}).state('home', {
			url : "/home",
			templateUrl : "views/pages/home.html"			
		});
	}
})();