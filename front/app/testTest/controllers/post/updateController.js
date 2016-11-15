/**
 * @ngdoc controller
 * @name post.controllers:updateController
 * @description
 * This file defines the postcontroller for post entity
 */
define([], function () {
    'use strict';

    postUpdateController.$inject = ['$scope','$state', '$stateParams','$mdToast','postService'];
    
    function postUpdateController($scope,$state,$stateParams,$mdToast,postService) {
    $scope.state = $state.current;
    $scope.id = $stateParams.id; 
    
    postService.getdummy($scope.id).then(function(result){
    	$scope.obj=result;
        
        
        
            
   			 });
    
        
    $scope.submit = function() { 
        postService.updatedummy($scope.obj).then(function(result)
        { $mdToast.show(
        $mdToast.simple()
        .textContent('post updated !')
        .position('bottom right')
        .hideDelay(3000)
                    ); 
        $state.go('testTest.postlisting');   
        }

        	);
        
    };
    $scope.reset = function() {
        postService.getdummy($scope.id).then(function(result){
    	$scope.obj=result;
        
        
        
           
    });
    };
  
    }

    return postUpdateController;
});
