'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('CompanyCtrl', function ($scope) {
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

  });
