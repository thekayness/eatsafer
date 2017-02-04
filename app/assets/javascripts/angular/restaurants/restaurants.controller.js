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
            $stateParams
            ) {

        var vm = this;
        vm.restaurants = [];
        vm.comment = {
            user_comment: {
                restaurant_id : ''
            }
        };
        vm.recent = [];

        vm.options = {
            zoom: 11,
            center: new google.maps.LatLng(42.3601, -71.0589),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        
        
        vm.markers = [];

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
        
        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){
              
            var marker = new google.maps.Marker({
                map: vm.map,
                position: new google.maps.LatLng(info.latitude, info.longitude),
                title: info.name
            });
            marker.content = '<div class="infoWindowContent">' + info.name + '<br />' + info.latitude + ' E,' + info.longitude +  ' N, </div>';
              
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + 
                    marker.content);
                infoWindow.open(vm.map, marker);
            });
              
            vm.markers.push(marker);
              
        }  

        //if state is recent or map, fetch recent
        if($stateParams.page) {
            console.log('whatup');
            restaurantsServ.getRecentReports()
                .then(function(results){
                    vm.recent = results.data;
                    console.log(vm.recent);
                    
                    return vm.recent;
                });
        }

        
        if($stateParams.map) {
            console.log('yoooooooo');
            vm.map = new google.maps.Map(document.getElementById('map'), vm.options);
            restaurantsServ.getRecentReports()
                .then(function(results){
                    vm.recent = results.data;
                    console.log(vm.recent);
                    vm.recent.forEach(function(restaurant) {
                        createMarker(restaurant);
                    });            
                    return vm.recent;
                });
        }
    }
})();