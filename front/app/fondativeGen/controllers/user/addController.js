/**
 * @ngdoc controller
 * @name user.controllers:addController
 * @description
 * This file defines the create new usercontroller for user entity
 */
define([], function () {
    'use strict';

    userAddController.$inject = ['$scope','$state','$mdToast','userService'];

    function userAddController($scope,$state,$mdToast,userService) {
        
    $scope.submit = function() {
        userService.createdummy($scope.obj).then(function(result){
        $mdToast.show(
        $mdToast.simple()
        .textContent('New user added !')
        .position('bottom right')
        .hideDelay(3000)
                    ); 
        $state.go('fondativeGen.userlisting');            
        });
    };
    $scope.reset = function() {
      $scope.obj = {
      };
    };
  
    }

    return userAddController;
});
