(function() {
	'use strict';

	var restaurantsList = {
		bindings: {
			restaurants: '<'
		},
		templateUrl: 'angular/restaurants/restaurants.html'
	};

	angular
	  .module('app.restaurants')
	  .component('restaurantsList', restaurantsList);
})();
