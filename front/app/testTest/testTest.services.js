/*global define, angular, list of services*/
define([
    /*fd_serviceFile*/"./services/postService",
	
], function (/*fd_serviceName*/postService ) {
    'use strict';
    var servicesModuleName = "testTest.services";
    
    angular.module(servicesModuleName, [])
        /*fd_Service*/
		.factory("postService", postService);

    return servicesModuleName;
});