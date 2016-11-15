/**
 * @ngdoc controller
 * @name post.controllers:addController
 * @description
 * This file defines the create new postcontroller for post entity
 */
define([], function () {
    'use strict';

    postAddController.$inject = ['$scope','$state','$mdToast','postService'];

    function postAddController($scope,$state,$mdToast,postService) {
        
    $scope.submit = function() {
        postService.createdummy($scope.obj).then(function(result){
        $mdToast.show(
        $mdToast.simple()
        .textContent('New post added !')
        .position('bottom right')
        .hideDelay(3000)
                    ); 
        $state.go('testTest.postlisting');            
        });
    };
    $scope.reset = function() {
      $scope.obj = {
      };
    };
  
    }

    return postAddController;
});
