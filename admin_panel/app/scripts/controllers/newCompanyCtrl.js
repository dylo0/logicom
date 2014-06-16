'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:NewCompanyCtrl
 * @description
 * # NewCompanyCtrl
 * Controller of the adminPanelApp
 */

angular.module('adminPanelApp')
  .controller('NewCompanyCtrl', function ($scope, $modalInstance, company) {
    $scope.company = angular.copy(company);

    $scope.addUser = function () {
      var uid = $scope.company.users.length;
      $scope.company.users.push({});
    }

    $scope.removeUser = function (idx) {
      $scope.company.users.splice(idx, 1);
    }

    $scope.ok = function () {
      $modalInstance.close($scope.company);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });