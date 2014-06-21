'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
