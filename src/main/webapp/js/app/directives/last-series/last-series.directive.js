(function() {

    /**
    * @desc search the last series added in system
    * @example <last-five-series></last-five-series>
    */
    angular.module('app').directive('lastSeries', lastSeries);

    LastSeriesController.$inject = ['$scope', 'SeriesService', '$filter'];

    function LastSeriesController($scope, SeriesService, $filter) {
        var totalNewSeries = $scope.totalNewSeries;
        var vm = this;
        vm.series = [];
        vm.emptyMessage = $scope.emptyMessage; //$filter('translate')($scope.emptyMessage);
        SeriesService.getLastSeries(totalNewSeries).success(function(data) {
            vm.series = data;
        });
    }

    function lastSeries() {
        return {
            restrict: 'E',
            templateUrl : function (element, attr) {
                return 'js/app/directives/last-series/last-series.html';
            },
            scope : {
                totalNewSeries: '=totalNewSeries',
                emptyMessage: '@'
            },
            controller : LastSeriesController,
            controllerAs : 'vm'
        };
    }
})();