angular.module('localPair').directive('headerDirective', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/header/headerTmpl.html',
    controller: 'homeCtrl'
  }
});