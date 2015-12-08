(function() {
    'use strict';
    angular.module('app.characters').factory('CharactersService', CharactersService);
    
    CharactersService.$inject = ['UrlService', '$http'];
    
    function CharactersService(UrlService, $http) {

        var service = {
            saveCharacter : saveCharacter
        };
        
        return service;
        
        function saveCharacter(name, surname, age) {
            return $http.post(UrlService.getSiteUrl() + 'characters/', { name : name, surname : surname, age : age});
        }
    }
    
})();