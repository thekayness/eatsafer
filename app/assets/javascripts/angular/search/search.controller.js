(function() {
    'use strict';

    angular
        .module('app.search')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['restaurantsServ'];

    function SearchController(restaurantsServ) {

        var vm = this;

        console.log("IN THE search CONTROLLER")

        vm.searchName = function() {
            console.log(vm.nameParam);
            if(!vm.nameParam || vm.nameParam === '') {return;}
            return restaurantsServ.getRestaurantsByName(vm.nameParam)
                .then(function(results) {
                    console.log(results.data);
                    vm.restaurantResults = results.data;
                    vm.nameParam = '';
                    return vm.restaurantResults;
                });
        }

        vm.searchAddr = function() {
            if(!vm.nameParam || vm.nameParam === '') {return;}
            return restaurantsServs.getRestaurantsByAddr(vm.addrParam)
                .then(function(results) {
                    console.log(results.data);
                    vm.restaurantResults = results.data;
                    vm.addrParam = '';
                    return vm.restaurantResults;
                });
        }

    }
})();