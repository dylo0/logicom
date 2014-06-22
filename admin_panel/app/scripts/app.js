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
          templateUrl: 'admin/views/main.html',
          controller: 'MainCtrl'
        })
        .state('/companies', {
          url: '/companies',
          templateUrl: 'admin/views/companies.html',
          controller: 'CompanyCtrl'
        })
        .state('/users', {
          url: '/users',
          templateUrl: 'admin/views/users.html',
          controller: 'UsersCtrl'
        })
        .state('/loads', {
          url: '/loads',
          templateUrl: 'admin/views/loads.html',
          controller: 'LoadCtrl'
        })
        .state('/vehicles', {
          url: '/vehicles',
          templateUrl: 'admin/views/vehicles.html',
          controller: 'VehicleCtrl'
        })
        .state('/boards', {
          url: '/boards',
          templateUrl: 'admin/views/boards.html',
          controller: 'BoardCtrl'
        })
        .state('/stats', {
          url: '/stats',
          templateUrl: 'admin/views/stats.html',
          controller: 'VehicleCtrl'
        })
        .state('/about', {
          url: '/about',
          templateUrl: 'admin/views/about.html',
          controller: 'AboutCtrl'
        });
    }]);
