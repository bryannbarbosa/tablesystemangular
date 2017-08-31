'use strict';

/**
 * @ngdoc service
 * @name amazonasApp.agreementAPI
 * @description
 * # agreementAPI
 * Factory in the amazonasApp.
 */
angular.module('amazonasApp')
  .factory('agreementAPI', function ($resource) {
    return {
      connect: function (params) {
        let BaseUrl = 'http://localhost:8000/public/api/';
        return $resource(BaseUrl + params, null, {
          'update': {
            method: 'PUT'
          }
        });
      }
    };
  });
