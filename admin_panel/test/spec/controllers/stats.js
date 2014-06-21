'use strict';

describe('Controller: StatsCtrl', function () {

  // load the controller's module
  beforeEach(module('adminPanelApp'));

  var StatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatsCtrl = $controller('StatsCtrl', {
      $scope: scope
    });
  }));

  it('should wave his hand and say yeah hello!', function () {
    expect(scope.hi).toBe('hello');
  });
});
