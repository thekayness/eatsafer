(function() {
    'use strict';
	angular
	    .module('app.restaurants')
	    .factory('requestResults', requestResults);

	function requestResults() {

    return {
        getRestaurantsComplete: getRestaurantsComplete,
        getRestaurantsFailed: getRestaurantsFailed
    }

        function getRestaurantsComplete(response) {
        	console.log(response.data);
            return response.data;
        }

        function getRestaurantsFailed(error) {
            logger.error('XHR Failed for getRestaurants.' + error.data);
        }

    }
})();