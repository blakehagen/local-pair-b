angular.module('localPair').controller('homeCtrl', function ($rootScope, $scope, $state) {

  $scope.filterExpert = {};

  $scope.submitInput = function () {
    $rootScope.searchItem     = $scope.searchItem;
    $rootScope.searchLocation = $scope.searchLocation;
    console.log('search items: ', $rootScope.searchItem, $rootScope.searchLocation);
    $state.go('expertsList');

  };


});