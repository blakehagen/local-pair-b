angular.module('localPair', ['ui.router', 'ngMaterial'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/features/home/homeTmpl.html'
      })

      .state('expertsList', {
        url: '/experts',
        templateUrl: '/features/expertsList/expertsListTmpl.html',
        controller: 'expertsCtrl'
      })

      .state('expertDetails', {
        url: '/expert/:id',
        templateUrl: '/features/expertDetail/expertDetailTmpl.html',
        controller: 'expertsCtrl'

      })

    $urlRouterProvider
      .otherwise('/');

  });