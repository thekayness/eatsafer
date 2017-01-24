(function() {
	'use strict';

	var navbar = {
		templateUrl: 'angular/navbar/navbar.html',
		controller: function() {}
	};

	angular
	  .module('app.navbar')
	  .component('navbar', navbar);
})();
