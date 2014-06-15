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
    $scope.company = company;

    $scope.addUser = function () {
      var uid = $scope.company.users.length;
      $scope.company.users.push({'id':uid});
    }

    $scope.ok = function () {
      $modalInstance.close($scope.company);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });