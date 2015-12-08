(function() {
    'use strict';
    angular.module('app.characters').controller('CharactersController', CharactersController);
    
    CharactersController.$inject = ['CharactersService'];
    
    function CharactersController(CharactersService) {

        var vm = this;
        vm.save = function(name, surname, age) {
            CharactersService.saveCharacter(name, surname, age).success(function(data, status) {
               alert('Salvo com sucesso');
            });
        };
    }
})();