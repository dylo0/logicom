'use strict';

describe('Controller: VehicleCtrl', function () {

  // load the controller's module
  beforeEach(module('adminPanelApp'));

  var VehicleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VehicleCtrl = $controller('VehicleCtrl', {
      $scope: scope
    });
  }));

  it('should wave his hand and say yeah hello!', function () {
    expect(scope.hi).toBe('hello');
  });
});