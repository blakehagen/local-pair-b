angular.module('localPair').controller('expertsCtrl', function ($rootScope, $scope, mainService, $state) {

  $scope.getExperts = function () {
    $scope.experts = mainService.getExperts();
    console.log($scope.experts);

    for (var i = 0; i < $scope.experts.length; i++) {
      $scope.experts[i].skills = $scope.experts[i].skills.join(', ');
      // console.log($scope.experts[i].skills);
    }
  }

  $scope.getExperts();

  $scope.getProfile = function (id) {
    $scope.getSelectedExpert = {};
    console.log('id: ', id);
    $scope.selectedExpert = mainService.getSelectedExpert(id);
    console.log($scope.selectedExpert);
  };


});