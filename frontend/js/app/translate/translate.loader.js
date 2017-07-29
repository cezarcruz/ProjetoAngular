;(function() {
    'use strict';
    angular.module('app.translate').factory('CustomLoader', CustomLoader);

    CustomLoader.$inject = ['$http', '$q', 'UrlService'];

    function CustomLoader($http, $q, UrlService) {
        return function(options) {
            var deferred = $q.defer();
            //console.log(options.key)
            $http.get(UrlService.getSiteUrl() + "/i18n/" + options.key +".json").success(function(data) {
                deferred.resolve(data);

            }).error(function() {
                return deferred.reject(options.key);
            });

            return deferred.promise;
        };
    }
})();