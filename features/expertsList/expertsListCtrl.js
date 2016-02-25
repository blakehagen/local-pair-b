angular.module('localPair').controller('expertsListCtrl', function($scope, mainService, $state){
    
    $scope.getExperts = function(){
       $scope.experts = mainService.getExperts();
       console.log($scope.experts);
    }();
    
    // mainService.getRandomPeople();
    
    $scope.getProfile = function(){
        $state.go('expertDetails')
    };
    
    
    
    
    
});