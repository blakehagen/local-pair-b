angular.module('localPair').controller('expertDetailsCtrl', function ($scope, mainService, $stateParams) {

  $scope.getSelectedExpert = function () {
    $scope.selectedExpert = mainService.getSelectedExpert($stateParams.id);

    // $scope.selectedExpert.skills = $scope.selectedExpert.skills.join(', ');
    // console.log($scope.experts[i].skills);

    console.log($scope.selectedExpert);
  };

  $scope.getSelectedExpert();

});