/**
 * @ngdoc controller
 * @name post.controllers:listingController
 * @description
 * This file defines the listing controller for post entity
 */
define([], function () {
    'use strict';

    postlistingController.$inject = ['$scope','postService'];

    function postlistingController($scope,postService) {
    	$scope.a='post listing controller changed this value';
    	postService.getdummies().then(function(result){
    	$scope.dummies=result;
    	});
        $scope.query = {
				    limit: 5,
				    page: 1
				  };
        
        $scope.remove=function(dummy){
            postService.removedummy(dummy.id).then(function(result){
            var index = $scope.dummies.indexOf(dummy);
            if (index > -1) $scope.dummies.splice(index, 1);
    	});
            
            }
    }

    return postlistingController;
});
