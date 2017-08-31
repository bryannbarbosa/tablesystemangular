'use strict';

describe('Controller: TableslistCtrl', function () {

  // load the controller's module
  beforeEach(module('amazonasApp'));

  var TableslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TableslistCtrl = $controller('TableslistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TableslistCtrl.awesomeThings.length).toBe(3);
  });
});
