(function() {
    angular.module('app.home').controller('HomeController', HomeController);

    HomeController.$inject = ['SeriesService'];

    function HomeController(SeriesService) {
        var vm = this;
        vm.series = [];
        SeriesService.getLastSeries().success(function(data) {
            vm.series = data;
        });
    }
})();