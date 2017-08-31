'use strict';

/**
 * @ngdoc function
 * @name amazonasApp.controller:AgesCtrl
 * @description
 * # AgesCtrl
 * Controller of the amazonasApp
 */
angular.module('amazonasApp')
  .controller('AgesCtrl', function ($scope, $window, agreementAPI) {
    agreementAPI.connect('ages').get(function(data) {
      $scope.ages = data;
    }, function(err) {
      console.log('error in get ages');
    });
    $scope.insertAge = function(age) {
      agreementAPI.connect('ages').save(age, function(resp, headers) {
        if (resp.success == true) {
          $window.alert('Faixa etária criada com sucesso!');
          $scope.getAges();
        } else {
          $window.alert('Error em criar a faixa etária, tente novamente.');
        }

      }, function(err) {
        $window.alert('Erro em criar a faixa etária, tente novamente.');
        console.log(err);
      });
    }
    $scope.getAges = function() {
      agreementAPI.connect('ages').get(function(data) {
        $scope.ages = data;
      }, function(err) {
        console.log('error in get ages');
      });
    }
    $scope.deleteAge = function(id) {
      if(confirm('Deseja realmente remover a faixa etária?')) {
      agreementAPI.connect('ages/' + id).remove(function(resp, headers) {
        if (resp.success == true) {
          $scope.getAges();
        } else {
          $window.alert('Error em remover faixa etária, tente novamente.');
        }

      }, function(err) {
        $window.alert('Erro em remover faixa etária, tente novamente.');
        console.log(err);
      });
      }
    }

    $scope.updateAge = function(id, age_initial, age_final) {

      var data = {
        initial_age: age_initial,
        final_age: age_final
      };
      agreementAPI.connect('ages/' + id).update(data, function(resp, headers) {
        if (resp.success == true) {
          $scope.getAges();
        } else {
          $window.alert('Error em atualizar faixa etária, tente novamente.');
        }
      }, function(err) {
        $window.alert('Erro em atualizar faixa etária, tente novamente.');
        console.log(err);
      });
    }
  });
