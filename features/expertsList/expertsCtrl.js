angular.module('localPair').controller('expertsCtrl', function ($rootScope, $scope, mainService, $window) {

  $scope.getExperts = function () {
    $scope.experts = mainService.getExperts();
    console.log($scope.experts);
  };

  $scope.getExperts();

  $scope.refreshExperts = function () {
    $scope.searchItem = '';
    $scope.searchLocation = '';
    $scope.experts = mainService.getExperts();
    console.log($scope.experts);
  };

  $scope.getProfile = function (id) {
    $window.location.href = '/#/expert/' + id;
  };


});