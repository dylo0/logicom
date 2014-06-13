'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('CompanyCtrl', function ($scope, $modal) {
    $scope.allUsers = [
      {
        companyName: 'asd',
        users: [{
            name: "Tomasz",
            surname: "Dyl",
            email: "tomasz@wp.pl",
        }]
      }
    ]

    $scope.newUser = [];

    $scope.openModal = function () {
      var modalInstance = $modal.open({
        templateUrl: 'views/new_company.html',
        controller: 'NewCompanyCtrl',
        size: "lg"
      });
    }

  });