;(function() {
    'use strict';
	angular.module("app.urls", []).factory('UrlService', UrlService);

	UrlService.$inject = ['$location'];
	
	function UrlService($location) {

		var service = {
			setSiteUrl : setSiteUrl,
			getSiteUrl : getSiteUrl,
			configSiteUrl: configSiteUrl
		};
		

		var SiteUrl;

		function setSiteUrl(url) {
			SiteUrl = url;
		}

		function getSiteUrl() {
			if (SiteUrl) return SiteUrl;
			else configSiteUrl(); return SiteUrl;
		}
		
		function configSiteUrl() {
			var url;
			
			url = $location.absUrl().substring(0, $location.absUrl().indexOf('#') - 0);

			if (url === "" || url === undefined) {
				url = $location.absUrl();
			}
			
			SiteUrl = url;
		}

		return service;
	}
})();