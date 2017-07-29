;(function() {
    'use strict';
	angular.module('app').controller('ModalInstanceCtrl', ModalInstanceCtrl); 

	ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'message', 'title'];

	function ModalInstanceCtrl($scope, $uibModalInstance, message, title) {
		$scope.message = message;
		$scope.title = title;
		
		$scope.ok = function() {
			$uibModalInstance.close(1);
		};
		
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	}
})();
