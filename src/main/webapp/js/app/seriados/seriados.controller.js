(function() {
	/**
	 * Controller do seriados.
	 */
angular.module('app.seriado').controller('SeriadosCtrl', ['$location', 'SeriadoService','$modal', SeriadosCtrl]);

	function SeriadosCtrl($location, SeriadoService, $modal) {
		//view model
		var vm = this;		
		vm.alerts = [];
		vm.seriados = [];// seriados vindo do servidor.

		vm.save = function(nome, temporada) {
			SeriadoService.saveSeriado(nome, temporada).success(
					function(data) {
						vm.alerts.push({
							type : 'success',
							msg : 'O Seriado foi adicionado com sucesso.'
						});
						vm.getSeriados();
						vm.nome = "";
						vm.temporada = "";
					}).error(function(data) {
				vm.alerts.push({
					type : 'danger',
					msg : data[0].message
				});
			});
		}

		vm.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};

		vm.getSeriados = function() {
			// ao carregar o controller faz a busca de todos os seriados.
			SeriadoService.getAllSeriados().success(function(data) {
				vm.seriados = data;
			});
		}
		
		vm.excluir = function(seriado) {
			var modalInstance = $modal.open({
				templateUrl : 'views/commons/common-modal.html',
				controller : 'ModalInstanceCtrl',
				resolve : {
					mensagem : function() {
						return "Deseja excluir esse seriado "
								+ seriado.nome + "?";
					},
					titulo : function() {
						return "Confirmar exclusão";
					}
				}
			});

			modalInstance.result.then(function() {
				// aqui executa o código do ok.
				SeriadoService.deleteSeriadoById(seriado.id).success(
					function(data) {							
						vm.getSeriados();
					})
				}, function() {
					// 	aqui o codigo do cancel.
				});
		};
		
		vm.getSeriados();
	}
})();