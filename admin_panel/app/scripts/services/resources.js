'use strict';

/**
 * @ngdoc service
 * @name adminPanelApp.resources
 * @description
 * # resources
 * Factory in the adminPanelApp.
 */
angular.module('adminPanelApp')
  .factory('resources', function () {
    // Service logic
    // ...

    var $$http = $http,
        cache = $cacheFactory('adminPanel.cache')

    // Public API here
    return {
      request: function (method, url, success, error, data) {
        if (typeof error === "undefined" || typeof error !== "function") {
          error = function (error) {
            console.error("Response Error: ", error);
          };
        }
        if (typeof success === "undefined" || typeof success !== "function") {
          success = function () {};
        }

        url = window.edrnaConfig.host + window.edrnaConfig.serverPrefix + url;
        if (url.substring(url.length - 1) !== "/") {
          url += "/";
        }

        var httpObj = {
          method: method,
          url: url
        };
        if (typeof data !== "undefined") {
          httpObj.data = data;
        }

        $$http(httpObj)
          .success(success)
          .error(error);
      },

      GET: function (url, success, error) {
        this.request("GET", url, success, error);
      },

      POST: function (url, data, success, error) {
        this.request("POST", url, success, error, data);
      }
    };
  });
