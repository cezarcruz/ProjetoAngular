/**
 * 
 */
var facebookApp = angular.module('facebookApp', ['ngRoute',]);
var controllers = {};

facebookApp.controller("facebookCtrl", function($scope, $http){
	
	$scope.dados = {};
	$scope.esconder = true;
	
	$scope.buscaDados = function() {
		var username = $scope.username;
		$scope.esconder = true;
		$http.get('http://graph.facebook.com/' + username).success(function(data, status) {
			$scope.dados = data;
			$scope.esconder = false;
		}).error(function(data, status) {
			$scope.esconder = true;
			console.log(data);
			console.log(status);
		});
	};
});

facebookApp.controller(controllers);