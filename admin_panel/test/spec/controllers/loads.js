'use strict';

describe('Controller: LoadsCtrl', function () {

  // load the controller's module
  beforeEach(module('adminPanelApp'));

  var LoadsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoadsCtrl = $controller('LoadsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
