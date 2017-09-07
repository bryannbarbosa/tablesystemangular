'use strict';

/**
 * @ngdoc function
 * @name amazonasApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the amazonasApp
 */
angular.module('amazonasApp').controller('AuthCtrl', function($scope, agreementAPI, localStorageService, $location, $http) {
  if(localStorageService.get('token') != null) {
    $location.path('/principal');
  }
  $scope.authenticate = function(user) {
    agreementAPI.authentication().run(user, function(resp, headers) {
      if (resp.success == true) {
        localStorageService.set('token', resp.response);
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + resp.response;
        $scope.enableError = false;
        $scope.enableSuccess = resp.success;
        $location.path('/principal');
      } else {
        $scope.enableError = true;
      }

    }, function(err) {
      $window.alert('Erro em se comunicar com o servidor, tente novamente.');
      console.log(err);
    });
  }
});
