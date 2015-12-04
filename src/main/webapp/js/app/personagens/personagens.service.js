(function() {
    angular.module('app.personagens').factory('PersonagensService', PersonagensService);
    
    PersonagensService.$inject = ['UrlService', '$http'];
    
    function PersonagensService(UrlService, $http) {
        var service = {
            savePersonagem : savePersonagem
        };
        
        return service;
        
        function savePersonagem(name, surname, age) {
            return $http.post(UrlService.getSiteUrl() + 'characters/', { name : name, surname : surname, age : age});
        }
    }
    
})();