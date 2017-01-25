(function() {
    'use strict';

    angular
        .module('app.search')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['restaurants', '$templateCache'];

    function SearchController(restaurants) {
        console.log($templateCache.info());
        var vm = this;
        vm.restaurants = [];

        vm.searchName = function() {
            if(!vm.nameParam || vm.nameParam === '') {return;}
            return restaurants.getRestaurantsByName(vm.nameParam);
        };

        vm.searchAddr = function() {
            if(!vm.addrParam || vm.addrParam === '') {return;}
            return restaurants.getRestaurantsByAddr(vm.addrParam);
        };        
        
    }
})();