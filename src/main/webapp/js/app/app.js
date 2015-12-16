(function() {
    'use strict';
	angular.module('app', [ 'ui.router', 'pascalprecht.translate', 'ngSanitize', 'ui.bootstrap', 'app.series', 'app.configs', 'app.characters', 'app.translate', 'app.home']);

	// Configura as rotas.
	angular.module('app').config(config).run(['UrlService', '$location', run]);

	run.$inject = ['UrlService', '$location'];

	function run (UrlService, $location) {
		var url;
		url = $location.absUrl().substring(0, $location.absUrl().indexOf('#') - 0);

		if (url === "" || url === undefined) {
			url = $location.absUrl();
		}

		UrlService.setSiteUrl(url);
	}

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider'];

	function config($stateProvider, $urlRouterProvider, $translateProvider) {

	        $translateProvider.preferredLanguage('en');
            $translateProvider.useLoader('CustomLoader');
            $translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider.determinePreferredLanguage();

            $urlRouterProvider.otherwise("/home");
            $stateProvider.state('series', {
                url : "/series/add",
                templateUrl : "views/series/series-add.html",
                controller : 'SeriesController',
                controllerAs : 'vm'
            }).state('characters', {
                url : '/characters/add',
                templateUrl : 'views/characters/characters-add.html',
                controller : 'CharactersController',
                controllerAs : 'vm'
            }).state('home', {
                url : "/home",
                templateUrl : "views/pages/home.html",
                controller : 'HomeController',
                controllerAs : "vm"
            });
	}
})();