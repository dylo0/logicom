'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:EditUserCtrl
 * @description
 * # EditUserCtrl
 * Controller of the adminPanelApp
 */

angular.module('adminPanelApp')
  .controller('EditUserCtrl', ['$scope', '$modalInstance', 'user', 'Helpers',
   function ($scope, $modalInstance, user, Helpers) {
    $scope.user = angular.copy(user);
    
    $scope.resetPassword = function (user) {
      var msg = 'Are you really sure you want to reset password for user ' + user.email +'?',
          confirm = Helpers.displayMessage(msg, 'Warning', 'md', true);
      
      confirm.result.then(function () {
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
        var msg = 'Password reset instructions has been sent to ' + user.email;

        Helpers.displayMessage(msg, 'Notice', 'md', false);
      });
    };

    $scope.ok = function () {
      $modalInstance.close($scope.user);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }]);