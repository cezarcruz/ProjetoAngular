(function() {
    'use strict';
    angular.module('app.characters').factory('CharactersService', CharactersService);
    
    CharactersService.$inject = ['UrlService', '$http'];
    
    function CharactersService(UrlService, $http) {

        var service = {
            saveCharacter : saveCharacter,
            getAllCharacters : getAllCharacters,
            deleteCharacterById : deleteCharacterById
        };
        
        return service;
        
        function saveCharacter(character) {
            return $http.post(UrlService.getSiteUrl() + 'characters/', character);
        }

        function getAllCharacters() {
            return $http.get(UrlService.getSiteUrl() + 'characters/list');
        }

        function deleteCharacterById(id) {
            return $http.delete(UrlService.getSiteUrl() + 'characters/delete/' + id.toString());
        }
    }
    
})();