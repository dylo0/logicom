'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:NewCompanyCtrl
 * @description
 * # NewCompanyCtrl
 * Controller of the adminPanelApp
 */

angular.module('adminPanelApp')
  .controller('NewCompanyCtrl', function ($scope, $modalInstance) {
    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });