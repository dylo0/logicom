'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
