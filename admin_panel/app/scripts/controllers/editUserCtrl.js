'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:EditUserCtrl
 * @description
 * # EditUserCtrl
 * Controller of the adminPanelApp
 */

angular.module('adminPanelApp')
  .controller('EditUserCtrl', function ($scope, $modalInstance, $modal, user) {
    $scope.user = user;
    $scope.resetPassword = function (user) {
      var confirm = $modal.open({
        templateUrl: 'views/modal.html',
        controller: 'ModalCtrl',
        size: "sm",
        resolve: {
          options: function () {
            var params = {
              message: "Are you really sure you want to reset password?",
              title: "Confirm Action",
              cancelButton: true
            };
            return params;
          }
        }
      });
      
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
        console.log("Password reset request sent to user email @ " + user.email);
      });
    }

    $scope.ok = function () {
      $modalInstance.close($scope.user);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });