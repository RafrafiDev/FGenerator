/**
 * @ngdoc controller
 * @name  post.controllers:DetailsController
 * @description
 * This file defines the details controller for  post entity

 **/
define([], function () {
    'use strict';
     postDetailsController.$inject = ['$scope','postService', '$state', '$stateParams'];

    function postDetailsController($scope, postService,$state, $stateParams) {
    	$scope.state = $state.current;
    	$scope.id = $stateParams.id; 
    	postService.getdummy($scope.id).then(function(result){
    	$scope.dummy=result;

    	});
    }
    return postDetailsController;
});