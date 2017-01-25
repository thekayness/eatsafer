(function() {
	'use strict';

	var navbar = {
		templateUrl: 'angular/navbar/navbar.html'
	};

	angular
	  .module('app.navbar')
	  .component('navbar', navbar);
})();
