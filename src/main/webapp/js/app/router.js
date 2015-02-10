/**
 * Rotas
 */
meuApp.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        controller: 'SimpleController',
        templateUrl: 'partials/home.html'
    }).when('/add', {
        controller: 'SimpleController',
        templateUrl: 'partials/add.html'
    }).otherwise({redirectTo: '/'});
});