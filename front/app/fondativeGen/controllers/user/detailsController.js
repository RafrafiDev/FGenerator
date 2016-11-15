/**
 * @ngdoc controller
 * @name  user.controllers:DetailsController
 * @description
 * This file defines the details controller for  user entity

 **/
define([], function () {
    'use strict';
     userDetailsController.$inject = ['$scope','userService', '$state', '$stateParams'];

    function userDetailsController($scope, userService,$state, $stateParams) {
    	$scope.state = $state.current;
    	$scope.id = $stateParams.id; 
    	userService.getdummy($scope.id).then(function(result){
    	$scope.dummy=result;

    	});
    }
    return userDetailsController;
});