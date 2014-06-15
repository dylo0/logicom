'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:EditUserCtrl
 * @description
 * # EditUserCtrl
 * Controller of the adminPanelApp
 */

angular.module('adminPanelApp')
  .controller('EditUserCtrl', function ($scope, $modalInstance, user) {
    $scope.user = user;

    $scope.resetPassword = function (user) {
      // to be implemented
      // var uid = user.logicomId;
      // $http.post('admin/password_reset/' + uid).
      //   success(function (data, status) {
      //     console.log('password recovery request sent');
      //     // add flash message notice here
      //   }).
      //   error(function (data, status) {
      //     console.log(data);
      //   })
      console.log('requested password reset for ' + user.name);
    }

    $scope.ok = function () {
      $modalInstance.close($scope.user);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });