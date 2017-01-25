(function() {
    'use strict';
	angular
	    .module('app.restaurants')
	    .factory('restaurants', restaurants);

	restaurants.$inject = ['$http', 'requestResults'];

	function restaurants($http, requestResults) {

    return {
        getRestaurantsByName: getRestaurantsByName,
        getRestaurantsByAddr: getRestaurantsByAddr
    }

    function getRestaurantsByName(nameParam) {
    	console.log("in service")
        return $http.get('/search-name/' + nameParam)
            .then(requestResults.getRestaurantsComplete)
            .catch(requestResults.getRestaurantsFailed);
    }

    function getRestaurantsByAddr(addrParam) {
    	console.log("in service")
        return $http.get('/search-address/' + addrParam)
            .then(requestResults.getRestaurantsComplete)
            .catch(requestResults.getRestaurantsFailed);
    }
}
		// var restaurantsObj = {
		// 	restaurants: []
		// };

	    // restaurantsObj.getRestaurantsByName = function(nameParam) {
	    //     $http.get('/search-name/' + nameParam)
	    //         .then(function(response) {
	    //         	console.log(response);
	    //         	angular.copy(response.data, restaurantsObj.restaurants);
	    //         })
	    //         .catch(function(error) {
	    //         	console.log('ERROR restaurants by name WAT ' + error.data);
	    //         });
	    //     console.log(restaurantsObj.restaurants);
	    //     return restaurantsObj.restarants;
	    // }
	    // restaurants.getRestaurantsByAddr = function(addrParam) {
	    //     $http.get('/search-address/' + addrParam)
	    //         .then(function(response) {
	    //         	// console.log(response);
	    //         	angular.copy(response.data, restaurantsObj.restaurants);
	    //         })
	    //         .catch(function(error) {
	    //         	console.log('ERROR restaurants by address WAT ' + error.data);
	    //         });
	    //     return restaurantsObj;
	    // }
	    // restaurantsObj.getRestaurant = function(idParam) {
	    //     $http.get('/restaurant/' + addrParam)
	    //         .then(function(response) {
	    //         	console.log(response);
	    //         	angular.copy(response, restaurantsObj.restaurants);
	    //         })
	    //         .catch(function(error) {
	    //         	console.log('ERROR restaurants by id WAT ' + error.data);
	    //         });
	    //     return restaurantsObj;
	    // }
	    // return restaurantsObj;
	// }
	    
})();