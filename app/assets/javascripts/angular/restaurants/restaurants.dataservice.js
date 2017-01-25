(function() {
    'use strict';
	angular
	    .module('app')
	    .factory('restaurantsServ', restaurantsServ);

	restaurantsServ.$inject = ['$http'];

	function restaurantsServ($http) {

	    return {
	        getRestaurantsByName: getRestaurantsByName,
	        getRestaurantsByAddr: getRestaurantsByAddr,
	        getRestaurant: getRestaurant
	    }

	    function getRestaurantsByName(nameParam) {
	    	console.log("in service")
	        return $http.get('/search-name/' + nameParam);
	    }

	    function getRestaurantsByAddr(addrParam) {
	    	console.log("in service")
	        return $http.get('/search-address/' + addrParam);
	    }

	    function getRestaurant(id) {
	    	console.log("in service")
	        return $http.get('/restaurants/' + id);
	    }
	}

})();