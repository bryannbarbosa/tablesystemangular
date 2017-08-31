'use strict';

/**
 * @ngdoc function
 * @name amazonasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the amazonasApp
 */
angular.module('amazonasApp').controller('MainCtrl', function($scope, $window, agreementAPI) {
  $scope.showInfo = function(agreement) {
    console.log($scope.agreement);
  }
  $scope.validation = function() {
    $scope.agreement.thead_tr = [];
    $scope.agreement.tbody_tr = [];
  }
  $scope.insertTheadTr = function() {
    $scope.agreement.thead_tr.push({
      ths: [
        {
          th_value: 'Nova Coluna'
        }
      ]
    });
  }
  $scope.insertTbodyTr = function() {
    $scope.agreement.tbody_tr.push({
      tds: [
        {
          td_value: 'Novo valor'
        }
      ]
    });
  }
  $scope.insertHeadTh = function(i) {
    $scope.agreement.thead_tr[i].ths.push({th_value: 'Nova Coluna'});
  }
  $scope.deleteTh = function(tr, th) {
    $scope.agreement.thead_tr[tr].ths.splice(th, 1);
  }
  $scope.insertBodyTd = function(i) {
    $scope.agreement.tbody_tr[i].tds.push({td_value: 'Novo valor'});
  }
  $scope.deleteTd = function(tr, td) {
    $scope.agreement.tbody_tr[tr].tds.splice(td, 1);
  }
  $scope.insertTable = function(agreement) {

    agreementAPI.connect('tables').save(agreement, function(resp, headers) {
      if (resp.success == true) {
        $window.alert('Tabela criada com sucesso!');
        $scope.agreement = null;
      } else {
        $window.alert('Error em criar a tabela, tente novamente.');
      }

    }, function(err) {
      $window.alert('Erro em criar a tabela, tente novamente.');
      console.log(err);
    });
  }
});
