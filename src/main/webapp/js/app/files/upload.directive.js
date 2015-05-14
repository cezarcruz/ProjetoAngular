(function() {
	angular.module('app.upload', []);
	angular.module('app.upload').directive('fileUpload', FileUpload);
	
	FileUpload.$inject = ['$parse', 'UrlService', '$http'];
	
	function FileUpload($parse, UrlService, $http) {
		return {
			template : '<input type="file" multiple="multiple">',
//							'<ul ng-repeat="item in itens">' +
//							'<li>{{item}}</li>' +
//						'</ul>',
			replace : true,
			restrict : "E",
			scope : {			
				file : "@"
			},
			link : function (scope, element, attrs) {
//				var model = $parse(attrs.ngModel);
//				var modelSetter = model.assign;
				
				element.bind('change', function() {
					var fd = new FormData();
					fd.append('files', element[0].files[0]);
					fd.append('files', element[0].files[0]);
//					fd.append('name', 'xerere');
					$http.post(UrlService.getSiteUrl() + 'seriados/upload', fd, {
						transformRequest : angular.identity,
						headers : {'Content-Type' : undefined}
					}).success(function() {
						
					}).error(function() {
						
					});
					
//					scope.$apply(function(){
//	                    modelSetter(scope, element[0].files[0]);
//	                });
				});
			}
		};
	};
})();