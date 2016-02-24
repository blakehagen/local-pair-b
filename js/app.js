angular.module('localPair', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: '/features/home/homeTmpl.html'

            })

            .state('expertsList', {
                url: '/experts',
                templateUrl: '/features/expertsList/expertsListTmpl.html'

            })

            .state('expertDetails', {
                url: '/expert-details',
                templateUrl: '/features/expertDetail/expertDetailTmpl.html'

            })


        $urlRouterProvider
            .otherwise('/');



    });