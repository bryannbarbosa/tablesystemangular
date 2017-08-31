'use strict';

describe('Controller: AgeslistCtrl', function () {

  // load the controller's module
  beforeEach(module('amazonasApp'));

  var AgeslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgeslistCtrl = $controller('AgeslistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgeslistCtrl.awesomeThings.length).toBe(3);
  });
});
