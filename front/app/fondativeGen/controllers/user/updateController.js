/**
 * @ngdoc controller
 * @name user.controllers:updateController
 * @description
 * This file defines the usercontroller for user entity
 */
define([], function () {
    'use strict';

    userUpdateController.$inject = ['$scope','$state', '$stateParams','$mdToast','userService'];
    
    function userUpdateController($scope,$state,$stateParams,$mdToast,userService) {
    $scope.state = $state.current;
    $scope.id = $stateParams.id; 
    
    userService.getdummy($scope.id).then(function(result){
    	$scope.obj=result;
        
        
        
        
        
            
   			 });
    
        
    $scope.submit = function() { 
        userService.updatedummy($scope.obj).then(function(result)
        { $mdToast.show(
        $mdToast.simple()
        .textContent('user updated !')
        .position('bottom right')
        .hideDelay(3000)
                    ); 
        $state.go('fondativeGen.userlisting');   
        }

        	);
        
    };
    $scope.reset = function() {
        userService.getdummy($scope.id).then(function(result){
    	$scope.obj=result;
        
        
        
        
        
           
    });
    };
  
    }

    return userUpdateController;
});
