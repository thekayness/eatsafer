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
				controller: 'SearchController'
			});
	}

    angular
	  .module('app')
	  .config(configRoutes);    
})();