'use strict';

describe('Directive: stkLogin', function () {

  // load the directive's module
  beforeEach(module('stockManApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stk-login></stk-login>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stkLogin directive');
  }));
});
