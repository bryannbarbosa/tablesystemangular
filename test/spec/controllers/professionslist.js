'use strict';

describe('Controller: ProfessionslistCtrl', function () {

  // load the controller's module
  beforeEach(module('amazonasApp'));

  var ProfessionslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfessionslistCtrl = $controller('ProfessionslistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfessionslistCtrl.awesomeThings.length).toBe(3);
  });
});
