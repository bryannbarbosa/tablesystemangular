'use strict';

describe('Service: agreementAPI', function () {

  // load the service's module
  beforeEach(module('amazonasApp'));

  // instantiate service
  var agreementAPI;
  beforeEach(inject(function (_agreementAPI_) {
    agreementAPI = _agreementAPI_;
  }));

  it('should do something', function () {
    expect(!!agreementAPI).toBe(true);
  });

});
