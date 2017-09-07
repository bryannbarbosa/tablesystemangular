'use strict';

/**
 * @ngdoc service
 * @name amazonasApp.BearerAuthInterceptor
 * @description
 * # BearerAuthInterceptor
 * Factory in the amazonasApp.
 */
angular.module('amazonasApp').factory('BearerAuthInterceptor', function(localStorageService, $location, $q) {
  return {
    request: function(config) {
      config.headers = config.headers || {};
      if (localStorageService.get('token')) {
        config.headers.Authorization = 'Bearer ' + localStorageService.get('token');
      }
      return config || $q.when(config);
    },
    response: function(response) {
      if (response.status === 401) {
        console.log('error in authentication');
      }
      return response || $q.when(response);
    }
  };
});
