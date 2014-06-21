'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('ModalCtrl', ['$scope', '$modalInstance', '$timeout', 'options',
   function ($scope, $modalInstance, $timeout, options) {
    $scope.msg = options.message;
    $scope.title = options.title;
    $scope.cancelButton = (options.cancelButton !== 'undefined') ? options.cancelButton : true;

    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }]);