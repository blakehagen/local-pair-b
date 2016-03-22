angular.module('localPair').controller('expertsListCtrl', function ($rootScope, $scope, mainService, $state) {

    $scope.getExperts = function () {
        $scope.experts = mainService.getExperts();
        console.log($rootScope.searchItem);
    }();

    $scope.getProfile = function () {
        $state.go('expertDetails')
    };


});