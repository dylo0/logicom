'use strict';

describe('Controller: BoardCtrl', function () {

  // load the controller's module
  beforeEach(module('adminPanelApp'));

  var BoardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoardCtrl = $controller('BoardCtrl', {
      $scope: scope
    });
  }));

  it('should wave his hand and say yeah hello!', function () {
    expect(scope.hi).toBe('hello');
  });
});
