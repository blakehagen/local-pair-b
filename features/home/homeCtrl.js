angular.module('localPair').controller('homeCtrl', function ($rootScope, $scope, $state) {

    $rootScope.searchItem = '';

    $scope.submitInput = function () {
        $rootScope.searchItem = $scope.searchItem;
        $scope.searchItem = '';
        $state.go('expertsList');
    };


});