(function() {
	'use strict';

	var restaurants = {
		templateUrl: 'angular/restaurants/restaurants.html',
		controller: 'RestaurantController as rest',
		bindings: {
			restaurants: '=',
			restaurant: '='
		}
	};

	angular
	  .module('app.restaurants')
	  .component('restaurants', restaurants);
})();