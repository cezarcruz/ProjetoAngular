(function() {
    'use strict';
	angular.module("app.urls", []).factory('UrlService', [UrlService]);

	function UrlService() {

		var service = {
			setSiteUrl : setSiteUrl,
			getSiteUrl : getSiteUrl
		};
		

		var SiteUrl;

		function setSiteUrl(url) {
			SiteUrl = url;
		}

		function getSiteUrl() {
			return SiteUrl;
		}

		return service;
	}
})();