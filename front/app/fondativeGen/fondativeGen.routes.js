/* global define, angular, routes*/
define([],
    function () {
        'use strict';
        var routesModuleName = "fondativeGen.routes";
        angular.module(routesModuleName, ['ui.router'])
            .config(["$stateProvider", function ($stateProvider) {
                var modulePath = "app/fondativeGen";
           	$stateProvider
            /*fd_entityState*/
			.state('fondativeGen.userupdate', {
						url: '/user/update/:id',
						templateUrl:modulePath+ '/views/user/update.html',
						controller: 'userUpdateController'
					})
			.state('fondativeGen.userAdd', {
						url: '/user/Add',
						templateUrl:modulePath+ '/views/user/add.html',
						controller: 'userAddController'
					})
			.state('fondativeGen.userdetail', {
						url: '/user/:id',
						templateUrl:modulePath+ '/views/user/details.html',
						controller: 'userDetailsController'
					})
			.state('fondativeGen.userlisting', {
						url: '/user',
						templateUrl:modulePath+ '/views/user/listing.html',
						controller: 'userlistingController'
					});
            }]);
        return routesModuleName;
    }
);