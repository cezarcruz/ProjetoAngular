(function() {

    /**
    * @desc busca os ultimos 5 series cadastradas no sistema
    * @example <last-five-series></last-five-series>
    */
    angular.module('app').directive('lastSeries', lastSeries);

    LastSeriesController.$inject = ['$scope', 'SeriesService'];

    function LastSeriesController($scope, SeriesService) {
        var totalNewSeries = $scope.totalNewSeries;
        var vm = this;
        vm.series = [];
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
                totalNewSeries: '=totalNewSeries'
            },
            controller : LastSeriesController,
            controllerAs : 'vm'
        };
    }
})();