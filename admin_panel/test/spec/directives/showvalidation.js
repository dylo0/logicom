'use strict';

describe('Directive: showValidation', function () {

  // load the directive's module
  beforeEach(module('adminPanelApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<show-validation></show-validation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the showValidation directive');
  }));
});
