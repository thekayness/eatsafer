(function() {
	'use strict';

	var navbar = {
		templateUrl: 'angular/navbar/navbar.html'
	};

	angular
	  .module('app')
	  .component('navbar', navbar);
})();
