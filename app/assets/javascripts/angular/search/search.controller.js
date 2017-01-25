(function() {
    'use strict';

    angular
        .module('app.search')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['restaurants'];

    function SearchController(restaurants) {

        var vm = this;
        vm.restaurants = [];

        // activate();

    vm.activateNameSearch = function() {
        console.log("in activate");
        return searchName().then(function() {
            console.log('name search performed?');
        });
    }

    function searchName() {
        return restaurants.getRestaurantsByName(vm.nameParam)
            .then(function(data) {
                console.log(data);
                vm.restaurants = data;
                vm.nameParam = '';
                return vm.restaurants;
            });
    }

    vm.activateAddrSearch = function() {
        console.log(vm.addrParam);
        return searchAddr().then(function() {
            console.log('addr search performed?');
        });
    }

    function searchAddr() {
        return restaurants.getRestaurantsByAddr(vm.addrParam)
            .then(function(data) {
                console.log(data);
                vm.restaurants = data;
                vm.addrParam = '';
                return vm.restaurants;
            });
    }

        // vm.searchAddr = function() {
        //     if(!vm.addrParam || vm.addrParam === '') {return;}
        //     vm.restaurants = restaurants.getRestaurantsByAddr(vm.addrParam);
        //     // console.log(vm.restaurants);
        //     return vm.restaurants;
        // };        
        
    }
})();