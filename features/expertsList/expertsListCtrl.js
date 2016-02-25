angular.module('localPair').controller('expertsListCtrl', function($scope, mainService){
    
    $scope.getExperts = function(){
       $scope.experts = mainService.getExperts();
       console.log($scope.experts);
    }();
    
    // mainService.getRandomPeople();
    
    
    
    
    
});