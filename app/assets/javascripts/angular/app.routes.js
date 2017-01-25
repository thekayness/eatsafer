(function() {
    'use strict';

    function configRoutes($stateProvider, $urlRouterProvider) {
    	$stateProvider
    		//home state obvy
			.state('home', {
				url: '/home',
				templateUrl: 'angular/home/home.html'
			})
			.state('home.about', {
				url: '/about',
				templateUrl: 'angular/home/about.html'
			})
			.state('search', {
				url: '/search',
				templateUrl: 'angular/search/search.html',
				controller: 'SearchController as search'
			})
			.state('restaurant', {
				url: '/restaurants/{id}',
				templateUrl: 'restaurants/restaurant.html',
				controller: 'SearchController as search',
				resolve: {
				 	restaurantPromise: ['$stateParams', 'restaurants', '$http', function($stateParams, restaurants, $http) {
				 		console.log($stateParams.id);
				    	return restaurants.getRestaurant($stateParams.id)
				    		.then(function(data) {
				    			search.restaurant = data; 
				    		});
				  	}]
				}
			});
	}

    angular
	  .module('app')
	  .config(configRoutes);    
})();