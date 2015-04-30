(function() {
    angular.module('app.personagens').factory('PersonagensService', PersonagensService);
    
    PersonagensService.$inject = ['UrlService', '$http'];
    
    function PersonagensService(UrlService, $http) {
        var service = {
            savePersonagem : savePersonagem
        };
        
        return service;
        
        function savePersonagem(nome, sobrenome, idade) {
            return $http.post(UrlService.getSiteUrl() + 'personagens/add', { nome : nome, sobrenome : sobrenome, idade : idade});            
        }
    }
    
})();