'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:ShowusersCtrl
 * @description
 * # ShowusersCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('ShowusersCtrl', function ($scope, $modalInstance, users, company) {
  	$scope.users = users;
  	$scope.company = company;

  	$scope.ok = function () {
      $modalInstance.close();
    };
  });
