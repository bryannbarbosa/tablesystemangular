'use strict';

/**
 * @ngdoc function
 * @name amazonasApp.controller:TableslistCtrl
 * @description
 * # TableslistCtrl
 * Controller of the amazonasApp
 */
angular.module('amazonasApp').controller('TableslistCtrl', function($scope, $window, agreementAPI) {
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

  $scope.insertHeadTh = function(tr, index, i) {
    $scope.tables.response[index].thead_tr[i].ths.push({th_value: 'Nova Coluna'});
    var data = {
      value: 'Nova Coluna',
      id_tr: tr
    };
    agreementAPI.connect('tables/th').save(data, function(resp, headers) {
      if (resp.success == true) {
        $scope.getTables();
      } else {
        $window.alert('Error em inserir coluna, tente novamente.');
      }

    }, function(err) {
      $window.alert('Erro em inserir coluna, tente novamente.');
      console.log(err);
    });
  }
  $scope.insertBodyTd = function(tr, index, i) {
    $scope.tables.response[index].tbody_tr[i].tds.push({td_value: 'Novo valor'});
    var data = {
      value: 'Novo valor',
      id_tr: tr
    };
    agreementAPI.connect('tables/td').save(data, function(resp, headers) {
      if (resp.success == true) {
        $scope.getTables();
      } else {
        $window.alert('Error em inserir valor, tente novamente.');
      }

    }, function(err) {
      $window.alert('Erro em inserir valor, tente novamente.');
      console.log(err);
    });
  }
  $scope.updateTd = function(id, value) {
    var data = {
      value: value
    };
    agreementAPI.connect('tables/td/' + id).update(data, function(resp, headers) {
      if (resp.success == true) {
        $scope.getTables();
      } else {
        $window.alert('Error em atualizar campo, tente novamente.');
      }

    }, function(err) {
      $window.alert('Erro em atualizar campo, tente novamente.');
      console.log(err);
    });
  }

  $scope.updateTh = function(id, value) {
    var data = {
      value: value
    };
    agreementAPI.connect('tables/th/' + id).update(data, function(resp, headers) {
      if (resp.success == true) {
        $scope.getTables();
      } else {
        $window.alert('Error em atualizar coluna, tente novamente.');
      }
    }, function(err) {
      $window.alert('Erro em atualizar coluna, tente novamente.');
      console.log(err);
    });
  }

  $scope.deleteTd = function(id) {
    if (confirm('Deseja realmente remover o campo?')) {
      agreementAPI.connect('tables/td/' + id).remove(function(resp, headers) {
        if (resp.success == true) {
          $scope.getTables();
        } else {
          $window.alert('Error em remover campo, tente novamente.');
        }

      }, function(err) {
        $window.alert('Erro em remover campo, tente novamente.');
        console.log(err);
      });
    }
  }

  $scope.deleteTh = function(id) {
    if (confirm('Deseja realmente remover a coluna?')) {
      agreementAPI.connect('tables/th/' + id).remove(function(resp, headers) {
        if (resp.success == true) {
          $scope.getTables();
        } else {
          $window.alert('Error em remover coluna, tente novamente.');
        }

      }, function(err) {
        $window.alert('Erro em remover coluna, tente novamente.');
        console.log(err);
      });
    }
  }

  $scope.deleteTable = function(id) {
    if (confirm('Deseja realmente remover a tabela?')) {
      agreementAPI.connect('tables/' + id).remove(function(resp, headers) {
        if (resp.success == true) {
          $scope.getTables();
        } else {
          $window.alert('Error em remover tabela, tente novamente.');
        }

      }, function(err) {
        $window.alert('Erro em remover tabela, tente novamente.');
        console.log(err);
      });
    }
  }
});
