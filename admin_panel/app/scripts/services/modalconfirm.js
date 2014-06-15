'use strict';

/**
 * @ngdoc service
 * @name adminPanelApp.Modalconfirm
 * @description
 * # Modalconfirm
 * Service in the adminPanelApp.
 */
angular.module('adminPanelApp')
  .service('Modalconfirm', ['$modal', function Modalconfirm($modal){
    this.displayMessage = function (msg, title, size, cancelButton) {
      var title = title || "info",
          size = size || "md",
          cancelBtn = (cancelButton !== "undefined") ? cancelButton : true;

      var modalInstance = $modal.open({
        templateUrl: 'views/modal.html',
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
    }
  }]);
