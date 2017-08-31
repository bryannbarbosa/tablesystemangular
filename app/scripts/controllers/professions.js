'use strict';

/**
 * @ngdoc function
 * @name amazonasApp.controller:ProfessionsCtrl
 * @description
 * # ProfessionsCtrl
 * Controller of the amazonasApp
 */
angular.module('amazonasApp').controller('ProfessionsCtrl', function($scope, $window, agreementAPI) {
  agreementAPI.connect('professions').get(function(data) {
    $scope.professions = data;
  }, function(err) {
    console.log('error in get professions');
  });

  $scope.getProfessions = function() {
    agreementAPI.connect('professions').get(function(data) {
      $scope.professions = data;
    }, function(err) {
      console.log('error in get professions');
    });
  }

  $scope.insertProfession = function(profession) {
    var profession_name = profession.profession_name.toLowerCase();
    var data = {
      profession_name: profession_name
    }
    agreementAPI.connect('professions').save(data, function(resp, headers) {
      if (resp.success == true) {
        $window.alert('Profissão inserida com sucesso!');
        $scope.getProfessions();
      } else {
        $window.alert('Error em inserir a profissão, tente novamente.');
      }

    }, function(err) {
      $window.alert('Erro em inserir a profissão, tente novamente.');
      console.log(err);
    });
  }

  $scope.deleteProfession = function(id) {
    if (confirm('Deseja realmente remover a profissão?')) {
      agreementAPI.connect('professions/' + id).remove(function(resp, headers) {
        if (resp.success == true) {
          $scope.getProfessions();
        } else {
          $window.alert('Error em remover profissão, tente novamente.');
        }

      }, function(err) {
        $window.alert('Erro em remover profissão, tente novamente.');
        console.log(err);
      });
    }
  }

  $scope.updateProfession = function(id, profession_name) {

    var data = {
      profession_name: profession_name
    };
    agreementAPI.connect('professions/' + id).update(data, function(resp, headers) {
      if (resp.success == true) {
        $scope.getProfessions();
      } else {
        $window.alert('Error em atualizar profissão, tente novamente.');
      }
    }, function(err) {
      $window.alert('Erro em atualizar profissão, tente novamente.');
      console.log(err);
    });
  }
});
