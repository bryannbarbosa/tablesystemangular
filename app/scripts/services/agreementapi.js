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
    var BaseUrl = 'http://amazonasseguros.com.br/system/public/api/';
    return {
      connect: function (params) {
        return $resource(BaseUrl + params, null, {
          'update': {
            method: 'PUT'
          }
        });
      },
      authentication: function () {
        return $resource(BaseUrl + 'signin', null, {
          'run': {
            method: 'POST'
          }
        });
      }
    };
  });
