'use strict';

/**
 * @ngdoc function
 * @name amazonasApp.controller:AgeslistCtrl
 * @description
 * # AgeslistCtrl
 * Controller of the amazonasApp
 */
angular.module('amazonasApp')
  .controller('AgeslistCtrl', function ($scope, $window, agreementAPI) {
    agreementAPI.connect('tables').get(function(data) {
      $scope.tables = data;
    }, function(err) {
      console.log('error in get tables');
    });

    $scope.getTables = function() {
      agreementAPI.connect('tables').get(function(data) {
        $scope.tables = data;
      }, function(err) {
        console.log('error in get tables');
      });
    }

    $scope.insertRelation = function(id_age, id_tr) {
      var data = {
        id_age: id_age,
        id_tr: id_tr
      };
      agreementAPI.connect('ages/relations').save(data, function(resp, headers) {
        if (resp.success == true) {

          $window.alert('Relação realizada com sucesso!');
          $scope.getTables();
        } else {
          $window.alert('Error em realizar a relação, tente novamente.');
        }

      }, function(err) {
        $window.alert('Error em realizar a relação, tente novamente.');
        console.log(err);
      });
    }

    $scope.deleteRelation = function(id_age, id_tr) {
      var data = {
        id_tr: id_tr
      };
      if (confirm('Deseja realmente remover a seleção?')) {
        agreementAPI.connect('ages/relations/' + id_age).remove(data, function(resp, headers) {
          if (resp.success == true) {
            $scope.getTables();
          } else {
            $window.alert('Error em remover a seleção, tente novamente.');
          }

        }, function(err) {
          $window.alert('Erro em remover a seleção, tente novamente.');
          console.log(err);
        });
      }
    }

    agreementAPI.connect('ages').get(function(data) {
      $scope.ages = data;
    }, function(err) {
      console.log('error in get ages');
    });

  });
