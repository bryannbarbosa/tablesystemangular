'use strict';

describe('Controller: AgesCtrl', function () {

  // load the controller's module
  beforeEach(module('amazonasApp'));

  var AgesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgesCtrl = $controller('AgesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgesCtrl.awesomeThings.length).toBe(3);
  });
});
