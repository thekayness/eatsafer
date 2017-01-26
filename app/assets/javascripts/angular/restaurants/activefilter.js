(function() {
    'use strict';
	angular
	    .module('app')
	    .filter('activeFilter', function() {
	    	return function (restaurantsInput, checkStatus) {

	    		if (!checkStatus) {return restaurantsInput;}
			    var filtered = [];
			    for (var i = 0; i < restaurantsInput
			    	.length; i++) {
			      var restaurant = restaurantsInput
			  [i];
			      if (restaurant.lic_status !== "Inactive") {
			        filtered.push(restaurant);
			      }
			    }
			    return filtered;
			  };
	});

})();