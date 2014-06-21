'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:NewCompanyCtrl
 * @description
 * # NewCompanyCtrl
 * Controller of the adminPanelApp
 */

angular.module('adminPanelApp')
  .controller('NewCompanyCtrl', ['$scope', '$modalInstance', 'company', 'Helpers',
   function ($scope, $modalInstance, company, Helpers) {
    $scope.company = angular.copy(company);

    $scope.addUser = function () {
      var uid = $scope.company.users.length;
      $scope.company.users.push({});
    }

    $scope.removeUser = function (idx) {
      var msg = "Are you really sure you want to remove " + $scope.company.users[idx].email + "?",
          confirm = Helpers.displayMessage(msg, "Warning", "md", true);
      
      confirm.result.then(function () {
        $scope.company.users.splice(idx, 1);
      });
    }

    $scope.ok = function () {
      $modalInstance.close($scope.company);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }]);