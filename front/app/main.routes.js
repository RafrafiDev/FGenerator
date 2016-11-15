/**
 * This file defines the routes of main module
 *
 * @returns {String}
 */
define([],
    function () {
        'use strict';

        var routesModuleName = 'main.routes';

        angular.module(routesModuleName, [])
            .config(['$stateProvider', function ($stateProvider,$urlRouterProvider) {     
           	$stateProvider
            /*fd_moduleRoute*/
			.state('testTest', {
						url: '/testTest',
						abstract:true,
						template:' <div ui-view></div>',
					})
			.state('fondativeGen', {
						url: '/fondativeGen',
						abstract:true,
						template:' <div ui-view></div>',
					});
            }]);
        return routesModuleName;
    }
);

