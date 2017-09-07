'use strict';

describe('Service: BearerAuthInterceptor', function () {

  // load the service's module
  beforeEach(module('amazonasApp'));

  // instantiate service
  var BearerAuthInterceptor;
  beforeEach(inject(function (_BearerAuthInterceptor_) {
    BearerAuthInterceptor = _BearerAuthInterceptor_;
  }));

  it('should do something', function () {
    expect(!!BearerAuthInterceptor).toBe(true);
  });

});
