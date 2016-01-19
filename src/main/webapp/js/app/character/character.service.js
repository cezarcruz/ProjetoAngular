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
            var fd = new FormData();

            fd.append('file', character.file);
            fd.append('name', character.name);
            fd.append('surname', character.surname);
            fd.append('age', character.age);

            return $http.post(UrlService.getSiteUrl() + 'characters/', fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            });

            //return $http.post(UrlService.getSiteUrl() + 'characters/', character);
        }

        function getAllCharacters() {
            return $http.get(UrlService.getSiteUrl() + 'characters/list');
        }

        function deleteCharacterById(id) {
            return $http.delete(UrlService.getSiteUrl() + 'characters/delete/' + id.toString());
        }
    }
    
})();