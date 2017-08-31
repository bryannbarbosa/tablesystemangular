'use strict';

/**
 * @ngdoc function
 * @name amazonasApp.controller:ProfessionslistCtrl
 * @description
 * # ProfessionslistCtrl
 * Controller of the amazonasApp
 */
angular.module('amazonasApp')
  .controller('ProfessionslistCtrl', function ($scope, $window, agreementAPI) {
    $scope.data = {};
    agreementAPI.connect('tables').get(function(data) {
      $scope.tables = data;
    }, function(err) {
      console.log('error in get tables');
    });

    agreementAPI.connect('professions').get(function(data) {
      $scope.professions = data;
    }, function(err) {
      console.log('error in get professions');
    });

    agreementAPI.connect('professions/relations').get(function(data) {
      $scope.relations = data;
    }, function(err) {
      console.log('error in get relations');
    });

    $scope.getRelations = function() {
      agreementAPI.connect('professions/relations').get(function(data) {
        $scope.relations = data;
      }, function(err) {
        console.log('error in get relations');
      });
    }
    $scope.insertRelation = function(data) {
      agreementAPI.connect('professions/relations').save(data, function(resp, headers) {
        if (resp.success == true) {
          $window.alert('Relação realizada com sucesso!');
          $scope.getRelations();
        } else {
          $window.alert('Error em realizar a relação, tente novamente.');
        }

      }, function(err) {
        $window.alert('Error em realizar a relação, tente novamente.');
        console.log(err);
      });
    }

    $scope.deleteRelation = function(id_agreement, id_profession) {
      var data = {
        id_agreement: id_agreement,
        id_profession: id_profession
      };
      if (confirm('Deseja realmente remover a relação?')) {
        agreementAPI.connect('profession/relations').remove(data, function(resp, headers) {
          if (resp.success == true) {
            $scope.getRelations();
          } else {
            $window.alert('Error em remover a relação, tente novamente.');
          }

        }, function(err) {
          $window.alert('Erro em remover a relação, tente novamente.');
          console.log(err);
        });
      }
    }
  });
