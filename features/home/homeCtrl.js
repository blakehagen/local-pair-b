angular.module('localPair').controller('homeCtrl', function ($rootScope, $scope, $state) {

    $scope.submitInput = function () {
        $rootScope.searchItem = $scope.searchItem;
        $state.go('expertsList');
    };


});