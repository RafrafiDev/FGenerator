/* global define, angular, routes*/
define([],
    function () {
        'use strict';
        var routesModuleName = "testTest.routes";
        angular.module(routesModuleName, ['ui.router'])
            .config(["$stateProvider", function ($stateProvider) {
                var modulePath = "app/testTest";
           	$stateProvider
            /*fd_entityState*/
			.state('testTest.postupdate', {
						url: '/post/update/:id',
						templateUrl:modulePath+ '/views/post/update.html',
						controller: 'postUpdateController'
					})
			.state('testTest.postAdd', {
						url: '/post/Add',
						templateUrl:modulePath+ '/views/post/add.html',
						controller: 'postAddController'
					})
			.state('testTest.postdetail', {
						url: '/post/:id',
						templateUrl:modulePath+ '/views/post/details.html',
						controller: 'postDetailsController'
					})
			.state('testTest.postlisting', {
						url: '/post',
						templateUrl:modulePath+ '/views/post/listing.html',
						controller: 'postlistingController'
					});
            }]);
        return routesModuleName;
    }
);