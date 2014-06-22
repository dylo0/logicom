'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:EditUserCtrl
 * @description
 * # EditUserCtrl
 * Controller of the adminPanelApp
 */

angular.module('adminPanelApp')
  .controller('EditUserCtrl', ['$scope', '$modalInstance', 'user', 'Helpers', '$http',
   function ($scope, $modalInstance, user, Helpers, $http) {
    $scope.user = angular.copy(user);
    
    $scope.resetPassword = function (user) {
      var msg = 'Are you really sure you want to reset password for user ' + user.email +'?',
          confirm = Helpers.displayMessage(msg, 'Warning', 'md', true);
      
      confirm.result.then(function () {
        $http.post('admin/password_reset/', {id:user.logicomId}).
          success(function (data, status) {
            // change user.email into data.user.email after implementing in backend
            msg = 'Password reset instructions has been sent to ' + user.email;
            Helpers.displayMessage(msg, 'Notice', 'md', false);
          }).
          error(function (data, status) {
            console.log(data);
            msg = 'Error: ' + data;
            Helpers.displayMessage(msg, 'Notice', 'md', false);
          })

      });
    };

    $scope.ok = function () {
      $modalInstance.close($scope.user);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }]);