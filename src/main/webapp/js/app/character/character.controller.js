(function() {
    'use strict';
    angular.module('app.characters').controller('CharactersController', CharactersController);
    
    CharactersController.$inject = ['CharactersService', '$uibModal', '$filter'];
    
    function CharactersController(CharactersService, $uibModal, $filter) {

        var vm = this;
        vm.alerts = [];
        vm.characters = [];
        vm.character = {};

        vm.save = function(character) {
            CharactersService.saveCharacter(character).success(function(data, status) {
               clear();
               vm.getAllCharacters();
            });
        };

        vm.getAllCharacters = function() {
            CharactersService.getAllCharacters().success(function(data) {
                vm.characters = data;
            });
        };

        vm.edit = function(character) {
            vm.character = angular.copy(character);
            vm.isEditing = true;
        };

        vm.getAllCharacters();

        //deleteCharacterById
        vm.delete = function(character) {
            var modalInstance = $uibModal.open({
                templateUrl : 'views/commons/common-modal.html',
                controller : 'ModalInstanceCtrl',
                resolve : {
                    message : function() {
                        return $filter('translate')('character.want.to.delete.this.character') + ' ' + character.name + ' ' + character.surname + '?';
                    },
                    title : function() {
                        return $filter('translate')('commons.confirm.exclusion');
                    }
                }
            });

            modalInstance.result.then(function() {
                CharactersService.deleteCharacterById(character.id).success(
                    function(data) {
                        vm.alerts[0] = {
                            type : 'success',
                            msg : $filter('translate')('character.removed.successfully')
                        };
                        vm.getAllCharacters();
                    });
                }
            );
        };

        function clear() {
            vm.character.file = undefined;
            vm.character = {};
        }
    }
})();