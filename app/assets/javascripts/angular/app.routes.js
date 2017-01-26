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
				controller: 'RestaurantController as rest'
			})
			.state('restaurants', {
				url: '/restaurants/:id',
				templateUrl: 'angular/restaurants/restaurant.html',
				controller: 'RestaurantController as rest'
			});

		$urlRouterProvider
			.otherwise('home');

	}

    angular
	  .module('app')
	  .config(configRoutes);    
})();