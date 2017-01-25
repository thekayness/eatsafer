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

    vm.activate = function() {
        console.log("in activate");
        return searchName().then(function() {
            console.log('search performed?');
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
        // vm.searchName = function() {
        //     if(!vm.nameParam || vm.nameParam === '') {return;}
        //     var wat = restaurants.getRestaurantsByName(vm.nameParam);
        //     console.log(wat);
        //     vm.nameParam = '';  
        //     return vm.restaurants;
        // }

        // vm.searchAddr = function() {
        //     if(!vm.addrParam || vm.addrParam === '') {return;}
        //     vm.restaurants = restaurants.getRestaurantsByAddr(vm.addrParam);
        //     // console.log(vm.restaurants);
        //     return vm.restaurants;
        // };        
        
    }
})();