/**
 * App Meu App.
 */
var meuApp = angular.module('meuApp', ['ngRoute',]);
var outroApp = angular.module('outroApp', []);
var controllers = {};

/**
 * App Outro app
 */
outroApp.controller('SimpleController', function($scope) {
	$scope.personagens = [ {
		name : 'Dean',
		type : 'Hunter'
	}, {
		name : 'Sam',
		type : 'Hunter'
	}, {
		name : 'Castiel',
		type : 'Angel'
	} ];
});