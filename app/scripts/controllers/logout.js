'use strict';

/**
 * @ngdoc function
 * @name amazonasApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the amazonasApp
 */
angular.module('amazonasApp')
  .controller('LogoutCtrl', function (localStorageService, $location, $http) {
    localStorageService.remove('token');
    $http.defaults.headers.common['Authorization'] = '';
    $location.path('/');
  });
