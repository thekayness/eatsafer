(function() {
    'use strict';
	angular
	    .module('app.restaurants')
	    .factory('restaurants', restaurants);

	restaurants.$inject = ['$http'];

	function restaurants($http) {
		var restaurantsObj = {
			restaurants: []
		};

	    restaurantsObj.getRestaurantsByName = function(nameParam) {
	        return $http.get('/search-name/' + nameParam)
	            .then(function(response) {
	            	console.log(response);
	            	angular.copy(response, restaurantsObj.restaurants);
	            })
	            .catch(function(error) {
	            	console.log('ERROR restaurants by name WAT ' + error.data);
	            });
	    }
	    restaurants.getRestaurantsByAddr = function(addrParam) {
	        return $http.get('/search-address/' + addrParam)
	            .then(function(response) {
	            	console.log(response);
	            	angular.copy(response, restaurantsObj.restaurants);
	            })
	            .catch(function(error) {
	            	console.log('ERROR restaurants by address WAT ' + error.data);
	            });
	    }
	    restaurantsObj.getRestaurant = function(idParam) {
	        return $http.get('/restaurant/' + addrParam)
	            .then(function(response) {
	            	console.log(response);
	            	angular.copy(response, restaurantsObj.restaurants);
	            })
	            .catch(function(error) {
	            	console.log('ERROR restaurants by id WAT ' + error.data);
	            });
	    }
	    return restaurantsObj;
	}
	    
})();