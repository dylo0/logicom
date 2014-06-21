'use strict';

describe('Controller: EditUserCtrl', function () {

  // load the controller's module
  beforeEach(module('adminPanelApp'));

  var EditUserCtrl,
    scope,
    $modalInstance;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $modalInstance) {
    scope = $rootScope.$new();
    EditUserCtrl = $controller('EditUserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
