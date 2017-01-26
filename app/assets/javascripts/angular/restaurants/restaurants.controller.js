(function() {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantController', RestaurantController);

    RestaurantController.$inject = [
        'restaurantsServ',  
        '$state', 
        '$stateParams',
        '$filter'
    ];

    function RestaurantController(
            restaurantsServ, 
            $state, 
            $stateParams) {

        var vm = this;
        vm.restaurants = [];
        vm.comment = {
            user_comment: {
                restaurant_id : ''
            }
        };
        // vm.filter = {};

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
            console.log('Hi');  
            restaurantsServ.getRestaurant($stateParams.id)
                .then(function(results) {
                    vm.restaurant = results.data;
                    console.log(vm.restaurant);
                });
        }

        vm.addUserComment = function() {
            if(!vm.commentParams.body || vm.commentParams.body === "") {return;}
            if(!vm.commentParams.author || vm.commentParams.author === "") {return;}
            
            
            vm.comment.user_comment = vm.commentParams;
            vm.comment.user_comment.restaurant_id = vm.restaurant.id;
            console.log(vm.comment);
            return restaurantsServ.postRestaurantUserComment(vm.restaurant.id, vm.comment)
                .then(function(results) {
                    console.log(results.data);
                    console.log(vm.restaurant.user_comments);
                    vm.restaurant.user_comments.push(results.data);
                    vm.commentParams.body = "";
                    vm.commentParams.author = "";
                });
        }
        // vm.refilterActive = function() {
        //     restaurantsFilter.filterActive(vm.restaurants, vm.restaurantStatus);
        // }
        // vm.refilterActive();

    }
})();