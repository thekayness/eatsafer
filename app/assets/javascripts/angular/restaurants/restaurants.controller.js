(function() {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantController', RestaurantController);

    RestaurantController.$inject = ['restaurantsServ', '$state', '$stateParams'];

    function RestaurantController(restaurantsServ, $state, $stateParams) {

        var vm = this;
        vm.restaurants = [];
        vm.editMode = false;

        vm.searchName = function() {
            console.log(vm.nameParam);
            if(!vm.nameParam || vm.nameParam === '') {return;}
            return restaurantsServ.getRestaurantsByName(vm.nameParam)
                .then(function(results) {
                    console.log(results.data);
                    vm.restaurants = results.data;
                    vm.nameParam = '';
                    return vm.restaurants;
                });
        }

        vm.searchAddr = function() {
            if(!vm.addrParam || vm.addrParam === '') {return;}
            console.log("hi");
            return restaurantsServ.getRestaurantsByAddr(vm.addrParam)
                .then(function(results) {
                    console.log(results.data);
                    vm.restaurants = results.data;
                    vm.addrParam = '';
                    return vm.restaurants;
                });
        }

        if($stateParams.id) {
            restaurantsServ.getRestaurant($stateParams.id)
                .then(function(results) {
                    vm.restaurant = results.data;
                });
        }
        vm.addUserComment = function() {
            if(!vm.commentParams.body || vm.commentParams.body ===) {return;}
            if(!vm.commentParams.author || vm.commentParams.author ===) {return;}
            return restaurantsServ.postRestaurantUserComment(vm.restaurant.id, vm.commentParams)
                .then(function(results) {
                    console.log(results.data);
                    vm.resaurant = results.data;
                });
        }

    }
})();