(function() {
    'use strict';

    restaurantsDataService.$inject = ['$http'];

    function restaurantsDataService($http, id){
    	return $http({
		  	method: 'GET',
		  	url: '/restaurants/' + id + '.json'
		  })
    }

    angular
	  .module('app')
	  .factory('restaurantsDataService', restaurantsDataService);    
})();