/**
 * 
 */
var meuApp = angular.module('app', [ 'ui.router', 'ui.bootstrap', 'ui.mask' ]);
// Configura a url do servidor, pois pode mudar de uma pro outro.
meuApp.run([
		'$rootScope',
		'$state',
		'$stateParams',
		'SiteUrl',
		'$location',
		function($rootScope, $state, $stateParams, SiteUrl, $location) {
			SiteUrl.setUrl($location.absUrl().substring(0,
					$location.absUrl().indexOf('#') - 1));
		} ]);

// Configurar as rotas.
meuApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider.state('seriados', {
		url : "/series/add",
		templateUrl : "views/seriados/seriados-add.html"
	}).state('home', {
		url : "/home",
		templateUrl : "views/pages/home.html"
	}).state('boletos', {
		url : "/boletos",
		templateUrl : "views/boletos/boleto.html"
	});
});