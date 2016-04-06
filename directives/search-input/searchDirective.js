angular.module('localPair').directive('searchInput', function () {
  return {
    restrict: 'E',
    templateUrl: './directives/search-input/searchDirectiveTmpl.html',
    controller: function ($scope, $rootScope, $state) {
      $scope.submitInput = function () {
        $rootScope.searchItem     = $scope.searchItem;
        $rootScope.searchLocation = $scope.searchLocation;
        $state.go('expertsList');
      };
    }
  }
});