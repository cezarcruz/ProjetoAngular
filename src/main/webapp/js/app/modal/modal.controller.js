(function() {
	angular.module('app').controller('ModalInstanceCtrl', ModalInstanceCtrl); 
	
	function ModalInstanceCtrl($scope, $modalInstance, mensagem, titulo) {
		$scope.mensagem = mensagem;
		$scope.titulo = titulo;
		
		$scope.ok = function() {
			$modalInstance.close(1);
		};
		
		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
		};
	}
})();
