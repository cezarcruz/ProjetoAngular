(function() {
	angular.module('app', [ 'ui.router', 'pascalprecht.translate', 'ngSanitize', 'ui.bootstrap', 'app.seriado', 'app.configs', 'app.personagens', 'app.translate']);

	// Configura as rotas.
	angular.module('app').config(config).run(['UrlService', '$location', run]);
	
	function run (UrlService, $location) {
		var url;
		url = $location.absUrl().substring(0, $location.absUrl().indexOf('#') - 0);

		if (url === "" || url === undefined) {
			url = $location.absUrl();
		}

		UrlService.setSiteUrl(url);
	}
	
	function config($stateProvider, $urlRouterProvider, $translateProvider) {
	        $translateProvider.preferredLanguage('en');
            $translateProvider.useLoader('CustomLoader');
            $translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider.determinePreferredLanguage();

            $urlRouterProvider.otherwise("/home");
            $stateProvider.state('seriados', {
                url : "/series/add",
                templateUrl : "views/seriados/seriados-add.html",
                controller : 'SeriadosCtrl',
                controllerAs : 'vm'
            }).state('personagens', {
                url : '/personagens/add',
                templateUrl : 'views/personagens/personagens-add.html',
                controller : 'PersonagemController',
                controllerAs : 'vm'
            }).state('home', {
                url : "/home",
                templateUrl : "views/pages/home.html"			
            });
	}
})();