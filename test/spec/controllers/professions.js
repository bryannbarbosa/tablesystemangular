'use strict';

describe('Controller: ProfessionsCtrl', function () {

  // load the controller's module
  beforeEach(module('amazonasApp'));

  var ProfessionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfessionsCtrl = $controller('ProfessionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfessionsCtrl.awesomeThings.length).toBe(3);
  });
});
