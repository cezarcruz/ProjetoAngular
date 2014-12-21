/**
 * 
 */
meuApp.config(function($routeProvider) {
	$routeProvider.when('/home', {
		controller : 'SimpleController',
		templateUrl : 'home.html'
	}).otherwise({ redirectTo: '/' });
});