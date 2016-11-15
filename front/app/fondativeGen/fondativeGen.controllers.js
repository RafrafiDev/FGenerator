/*global define, angular, list of controllers*/
define([
    /*fd_controllerFile*/
	"./controllers/user/updateController",
	"./controllers/user/addController",
	"./controllers/user/detailsController",
	"./controllers/user/listingController",
], function (/*fd_controllerName*/userUpdateController, userAddController, userDetailsController, userlistingController ) {
    'use strict';
    var controllersModuleName = "fondativeGen.controllers";
    
    angular.module(controllersModuleName, [])
            /*fd_entityController*/
		.controller("userUpdateController", userUpdateController)
		.controller("userAddController", userAddController)
		.controller("userDetailsController", userDetailsController)
		.controller("userlistingController", userlistingController);
            
return controllersModuleName;
});