'use strict';

/**
 * @ngdoc filter
 * @name adminPanelApp.filter:startFrom
 * @function
 * @description
 * # startFrom
 * Filter in the adminPanelApp.
 */
angular.module('adminPanelApp')
  .filter('startFrom', function () {
    return function (input, start) {
      return input.slice(start);
    };
  });