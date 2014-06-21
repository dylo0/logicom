'use strict';

/**
 * @ngdoc directive
 * @name adminPanelApp.directive:showValidation
 * @description
 * # showValidation
 */
angular.module('adminPanelApp')
  .directive('showValidation', [function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        function showValidation(formGroupEl) {
          var input = formGroupEl.find('input[ng-model],textarea[ng-model]');
          if (input.length > 0) {
            scope.$watch(function() {
              return input.hasClass('ng-invalid') && !input.hasClass('ng-pristine');
            }, function(isInvalid) {
              formGroupEl.toggleClass('has-error', isInvalid);
            });
          }
        }

        if (element.get(0).nodeName.toLowerCase() === 'form') {
          element.find('.form-group').each(function(i, formGroup) {
            showValidation(angular.element(formGroup));
          });
        } else {
          showValidation(element);
        }

      }
    };
}]);
