(function() {
	/**
	 * Controller do seriados.
	 */
angular.module('app.seriado').controller('SeriadosCtrl', SeriadosCtrl);

	SeriadosCtrl.$inject = ['$location', 'SeriadoService','$modal', '$http'];

	function SeriadosCtrl($location, SeriadoService, $modal, $http) {
		//view model
		var vm = this;		
		vm.alerts = [];
		vm.series = [];// seriados vindo do servidor.
		vm.isEditing = false;

		vm.save = function(name, season) {
			SeriadoService.saveSeriado(name, season, vm.id).success(
					function(data) {
						vm.alerts.push({
							type : 'success',
							msg : 'O Seriado foi salvo com sucesso.'
						});
						vm.getSeriados();
						clear();
					}).error(function(data) {
                    vm.alerts.push({
                        type : 'danger',
                        msg : data[0].message
                    });
                });
		}

		vm.closeAlert = function(index) {
			vm.alerts.splice(index, 1);
		};

		vm.getSeriados = function() {
			// ao carregar o controller faz a busca de todos os seriados.
			SeriadoService.getAllSeriados().success(function(data) {
				vm.series = data;
			}).error(function(data) {
				alert(data);
			});
		}
		
		vm.editar = function(seriado) {			
			vm.nome = seriado.nome;
			vm.temporada = seriado.temporada;
			vm.id = seriado.id;
			vm.isEditing = true;
		}
		
		vm.excluir = function(series) {
			var modalInstance = $modal.open({
				templateUrl : 'views/commons/common-modal.html',
				controller : 'ModalInstanceCtrl',
				resolve : {
					mensagem : function() {
						return "Deseja excluir esse seriado " + series.name + "?";
					},
					titulo : function() {
						return "Confirmar exclusão";
					}
				}
			});

			modalInstance.result.then(function() {
				// aqui executa o código do ok.
				SeriadoService.deleteSeriadoById(series.id).success(
					function(data) {							
						vm.getSeriados();
					})
				}, function() {
					// 	aqui o codigo do cancel.
				});
		};
		
		vm.cancel = function() {
			clear();
		}
		
		function clear() {
			vm.nome = undefined;
			vm.temporada = undefined;
			vm.id = undefined;
			vm.isEditing = undefined;
		}
		
		vm.getSeriados();
	}
})();