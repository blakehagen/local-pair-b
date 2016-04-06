angular.module('localPair').controller('expertDetailsCtrl', function ($scope, mainService, $stateParams) {

  $scope.getSelectedExpert = function () {
    $scope.selectedExpert = mainService.getSelectedExpert($stateParams.id);
    console.log($scope.selectedExpert);
  };

  $scope.getSelectedExpert();

  // TOGGLE ACTION ITEMS //

  $scope.showTimes    = true;
  $scope.msgInput     = true;
  $scope.showCalendar = true;

  // Display General Schedule //
  var showGeneralAvailabilityCounter = 0;
  $scope.showGeneralAvailability     = function () {
    showGeneralAvailabilityCounter++;
    if (showGeneralAvailabilityCounter % 2 === 1) {
      $scope.showTimes    = true;
      $scope.msgInput     = false;
      $scope.showCalendar = false;
    } else {
      $scope.msgInput     = true;
      $scope.showCalendar = true;
      $scope.showTimes    = true;
    }
  };

  // Display Message Input //
  var messageCounter         = 0;
  $scope.showMessageInputBox = function () {
    messageCounter++;
    if (messageCounter % 2 === 1) {
      $scope.showTimes    = false;
      $scope.msgInput     = true;
      $scope.showCalendar = false;
    } else {
      $scope.showTimes    = true;
      $scope.showCalendar = true;
      $scope.msgInput     = true;
    }
  };

  // Display Calendar //
  var calendarCounter     = 0;
  $scope.showApptCalendar = function () {
    calendarCounter++;
    if (calendarCounter % 2 === 1) {
      $scope.showTimes    = false;
      $scope.msgInput     = false;
      $scope.showCalendar = true;
    } else {
      $scope.showTimes    = true;
      $scope.showCalendar = true;
      $scope.msgInput     = true;
    }
  };


});