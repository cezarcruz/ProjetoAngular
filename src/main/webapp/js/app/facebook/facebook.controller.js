/**
 * 
 */
var facebookApp = angular.module('facebookApp', [ 'ngRoute', ]);
var controllers = {};

facebookApp.controller("facebookCtrl",
		function($scope, $http, FacebookService) {

			$scope.dados = {};
			$scope.esconder = true;

			$scope.buscaDados = function() {
				var username = $scope.username;
				$scope.esconder = true;
				FacebookService.getUserData(username).then(
						function(data, status) {
							$scope.dados = data.data;
							$scope.esconder = false;
						}, function(data, status) {
							$scope.esconder = true;
							console.log(data);
							console.log(status);
						})
			};
		});

facebookApp.controller(controllers);