/**
 * 
 */
var facebookApp = angular.module('facebookApp', ['ngRoute',]);
var controllers = {};

facebookApp.controller("facebookCtrl", function($scope, $http){
	
	$scope.dados = {};
	
	$scope.buscaDados = function() {
		$http.get('http://graph.facebook.com/cezarmaw').success(function(data, status) {
			$scope.dados = data;
		}).error(function(data, status) {
			console.log(data);
			console.log(status);
		});
	};
});

facebookApp.controller(controllers);