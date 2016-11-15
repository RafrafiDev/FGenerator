/*global define, angular, list of controllers*/
define([
    /*fd_controllerFile*/
	"./controllers/post/updateController",
	"./controllers/post/addController",
	"./controllers/post/detailsController",
	"./controllers/post/listingController",
], function (/*fd_controllerName*/postUpdateController, postAddController, postDetailsController, postlistingController ) {
    'use strict';
    var controllersModuleName = "testTest.controllers";
    
    angular.module(controllersModuleName, [])
            /*fd_entityController*/
		.controller("postUpdateController", postUpdateController)
		.controller("postAddController", postAddController)
		.controller("postDetailsController", postDetailsController)
		.controller("postlistingController", postlistingController);
            
return controllersModuleName;
});