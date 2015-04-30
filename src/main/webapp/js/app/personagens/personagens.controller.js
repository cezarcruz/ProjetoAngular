(function() {
    angular.module('app.personagens').controller('PersonagemController', PersonagemController);
    
    PersonagemController.$inject = ['PersonagensService'];
    
    function PersonagemController(PersonagensService) {
        var vm = this;
        vm.save = function(nome, sobrenome, idade) {
            PersonagensService.savePersonagem(nome, sobrenome, idade).success(function(data, status) {
               alert('Salvo com sucesso');
            });
        };
    };    
})();