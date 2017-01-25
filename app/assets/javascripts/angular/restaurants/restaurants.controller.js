(function() {
    'use strict';

    angular
        .module('app.restaurants')
        .controller('RestaurantController', RestaurantController);

    RestaurantController.$inject = [];

    function RestaurantController(restaurants, restaurant) {

        var vm = this;
        vm.restaurants = [];
        if (restaurants) {
            vm.restaurants = restaurants.data;    
        }
        
        console.log(restaurants);

    }
})();