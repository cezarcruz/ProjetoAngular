angular.module('facebookApp')
.factory('FacebookService', 
		['$http', 
		 function FacebookService($http) {
			FacebookService.getUserData = function(username) {
				return $http.get('http://graph.facebook.com/' + username);
			}
			return FacebookService;
		 }
		]
);