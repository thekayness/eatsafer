(function() {
    'use strict';

    angular
    	.module('app')
    	.component('app', {
    		template: `
    		<navbar></navbar>
    		<div ui-view></div>
    		`
    	})

})();