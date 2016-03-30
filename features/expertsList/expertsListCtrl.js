angular.module('localPair').controller('expertsListCtrl', function ($rootScope, $scope, mainService, $state) {

  $scope.getExperts = function () {
    $scope.experts = mainService.getExperts();
    console.log($scope.experts);

    for (var i = 0; i < $scope.experts.length; i++) {
      $scope.experts[i].skills = $scope.experts[i].skills.join(', ');
      // console.log($scope.experts[i].skills);
    }
  }

  $scope.getExperts();

  $scope.getProfile = function () {
    $state.go('expertDetails');
  };


});