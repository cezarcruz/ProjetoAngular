(function(){
    'use strict';
	angular.module('app.series').factory('SeriesService', SeriesService);

	SeriesService.$inject = ['$http', 'UrlService'];

	function SeriesService($http, UrlService) {
		
		var service = {
			saveSeries : saveSeries,
			getAllSeries : getAllSeries,
			deleteSeriesById : deleteSeriesById
		};
		
		return service;
		
		function saveSeries(name, season, id) {
			if (id) {
				return $http.put(UrlService.getSiteUrl() + 'series/update', {name : name, season : season, id : id});
			} else {
				return $http.post(UrlService.getSiteUrl() + 'series/add', { name : name, season : season});
			}
		}

		function getAllSeries() {
			return $http.get(UrlService.getSiteUrl() + 'series/list');
		}
		
		function deleteSeriesById(id) {
			return $http.delete(UrlService.getSiteUrl() + "series/delete/" + id.toString());
		}
	}	
})();