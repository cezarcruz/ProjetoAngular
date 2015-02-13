/**
 * 
 */
var meuApp = angular.module('app', ['ui.router', 
                                    'ui.bootstrap']);

meuApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('seriados', {
       url: "/series/add",
       templateUrl : "views/seriados/seriados-add.html"
    }).state('home', {
        url : "/home",
        templateUrl : "views/pages/home.html"
    });
});