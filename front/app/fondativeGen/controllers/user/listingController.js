/**
 * @ngdoc controller
 * @name user.controllers:listingController
 * @description
 * This file defines the listing controller for user entity
 */
define([], function () {
    'use strict';

    userlistingController.$inject = ['$scope','userService'];

    function userlistingController($scope,userService) {
    	$scope.a='user listing controller changed this value';
    	userService.getdummies().then(function(result){
    	$scope.dummies=result;
    	});
        $scope.query = {
				    limit: 5,
				    page: 1
				  };
        
        $scope.remove=function(dummy){
            userService.removedummy(dummy.id).then(function(result){
            var index = $scope.dummies.indexOf(dummy);
            if (index > -1) $scope.dummies.splice(index, 1);
    	});
            
            }
    }

    return userlistingController;
});
