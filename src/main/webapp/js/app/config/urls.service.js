(function() {
	angular.module("app.urls", []).factory('UrlService', [UrlService]);
	function UrlService() {
		var service = {
			setSiteUrl : setSiteUrl,
			getSiteUrl : getSiteUrl
		}
		
		return service;
		
		var SiteUrl;
		
		function setSiteUrl(url) {
			SiteUrl = url;
		}
		
		function getSiteUrl() {
			return SiteUrl;
		}
	}
})();