/*global define, angular, list of services*/
define([
    /*fd_serviceFile*/"./services/userService",
	
], function (/*fd_serviceName*/userService ) {
    'use strict';
    var servicesModuleName = "fondativeGen.services";
    
    angular.module(servicesModuleName, [])
        /*fd_Service*/
		.factory("userService", userService);

    return servicesModuleName;
});