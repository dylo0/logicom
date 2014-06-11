'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:UserCtrl
 * @description
 * # CompanyCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('CompanyCtrl', function ($scope) {
    $scope.allUsers = [
      {
        companyName:
        users: [{
            name: "Tomasz",
            surname: "Dyl",
            email: "tomasz@wp.pl",
        }]

      }
    ]
    $scope.newUser = [];

  });
