/**
 * Controller do seriados.
 */
meuApp.controller('SeriadosCtrl', [
		'$scope',
		'SeriadoService',
		'$modal',
		function($scope,
				 SeriadoService,
				 $modal) {
			$scope.alerts = [];
			$scope.seriados = [];// seriados vindo do servidor.

			$scope.save = function(nome, temporada) {
				SeriadoService.saveSeriado(nome, temporada).success(
						function(data) {
							$scope.alerts.push({
								type : 'success',
								msg : 'O Seriado foi adicionado com sucesso.'
							});
							$scope.getSeriados();
							$scope.nome = "";
							$scope.temporada = "";
						}).error(function(data) {
					$scope.alerts.push({
						type : 'danger',
						msg : data[0].message
					});
				});
			}

			$scope.closeAlert = function(index) {
				$scope.alerts.splice(index, 1);
			};

			$scope.getSeriados = function() {
				// ao carregar o controller faz a busca de todos os seriados.
				SeriadoService.getAllSeriados().success(function(data) {
					$scope.seriados = data;
				});
			}
			$scope.excluir = function(seriado) {
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
								alert("excluido");
								$scope.getSeriados();
							})
				}, function() {
					// aqui o codigo do cancel.
				});
			};
			$scope.getSeriados();
		} ]);