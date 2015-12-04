(function() {
    angular.module('app.personagens').controller('PersonagemController', PersonagemController);
    
    PersonagemController.$inject = ['PersonagensService'];
    
    function PersonagemController(PersonagensService) {
        var vm = this;
        vm.save = function(name, surname, age) {
            PersonagensService.savePersonagem(name, surname, age).success(function(data, status) {
               alert('Salvo com sucesso');
            });
        };
    };    
})();