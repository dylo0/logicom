'use strict';

/**
 * @ngdoc overview
 * @name adminPanelApp
 * @description
 * # adminPanelApp
 *
 * Main module of the application.
 */
angular
  .module('adminPanelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('/', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .state('/companies', {
          url: '/companies',
          templateUrl: 'views/companies.html',
          controller: 'CompanyCtrl'
        })
        .state('/users', {
          url: '/users',
          templateUrl: 'views/users.html',
          controller: 'UsersCtrl'
        })
        .state('/loads', {
          url: '/loads',
          templateUrl: 'views/loads.html',
          controller: 'LoadCtrl'
        })
        .state('/vehicles', {
          url: '/vehicles',
          templateUrl: 'views/vehicles.html',
          controller: 'VehicleCtrl'
        })
        .state('/boards', {
          url: '/boards',
          templateUrl: 'views/boards.html',
          controller: 'BoardCtrl'
        })
        .state('/stats', {
          url: '/stats',
          templateUrl: 'views/stats.html',
          controller: 'VehicleCtrl'
        })
        .state('/about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        });
    }]);
