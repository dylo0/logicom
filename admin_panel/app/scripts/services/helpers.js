'use strict';

/**
 * @ngdoc service
 * @name adminPanelApp.Helpers
 * @description
 * # Helpers
 * Service in the adminPanelApp.
 */
angular.module('adminPanelApp')
  .service('Helpers', ['$modal', function Helpers($modal){
    this.displayMessage = function (msg, title, size, cancelButton) {
      title = title || 'info';
      size = size || 'md';
      cancelButton = (cancelButton !== 'undefined') ? cancelButton : true;

      var modalInstance = $modal.open({
        templateUrl: 'admin/views/modal.html',
        controller: 'ModalCtrl',
        size: size,
        resolve: {
          options: function () {
            var params = {
              message: msg,
              title: title,
              cancelButton: cancelButton
            };
            return params;
          }
        }
      });

      return modalInstance;
    };
  }]);
