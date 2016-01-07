(function() {
    'use strict';
angular.module('app.series').controller('SeriesController', SeriesController);

	SeriesController.$inject = ['$location', 'SeriesService','$uibModal', '$http', '$filter'];

	function SeriesController($location, SeriesService, $uibModal, $http, $filter) {
		//view model
		var vm = this;		
		vm.alerts = [];
		vm.series = [];
		vm.isEditing = false;

		vm.save = function(name, season) {
			SeriesService.saveSeries(name, season, vm.id).success(
                function(data) {
                    vm.alerts[0] = {
                        type : 'success',
                        msg : $filter('translate')('series.save.with.success')
                    };
                    vm.getSeries();
                    clear();
                }).error(function(data) {

                vm.alerts[0] = {
                    type : 'danger',
                    msg : data[0].message
                };
            });
		};

		vm.closeAlert = function(index) {
			vm.alerts.splice(index, 1);
		};

		vm.getSeries = function() {
			SeriesService.getAllSeries().success(function(data) {
				vm.series = data;
			}).error(function(data) {
				alert(data);
			});
		};
		
		vm.edit = function(series) {
			vm.name = series.name;
			vm.season = series.season;
			vm.id = series.id;
			vm.isEditing = true;
		};
		
		vm.delete = function(series) {
			var modalInstance = $uibModal.open({
				templateUrl : 'views/commons/common-modal.html',
				controller : 'ModalInstanceCtrl',
				resolve : {
					message : function() {
						return $filter('translate')('series.want.to.delete.this.show') + ' ' + series.name + '?';
					},
					title : function() {
						return $filter('translate')('commons.confirm.exclusion');
					}
				}
			});

			modalInstance.result.then(function() {
				SeriesService.deleteSeriesById(series.id).success(
					function(data) {
                        vm.alerts[0] = {
                            type : 'success',
                            msg : $filter('translate')('series.removed.successfully')
                        };
						vm.getSeries();
					});
				}
            );
		};
		
		vm.cancel = function() {
			clear();
		};
		
		function clear() {
			vm.name = undefined;
			vm.season = undefined;
			vm.id = undefined;
			vm.isEditing = undefined;
		}
		
		vm.getSeries();
	}
})();