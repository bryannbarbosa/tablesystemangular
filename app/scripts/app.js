'use strict';

/**
 * @ngdoc overview
 * @name amazonasApp
 * @description
 * # amazonasApp
 *
 * Main module of the application.
 */
angular
  .module('amazonasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngValid'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tabelas/listar', {
        templateUrl: 'views/tableslist.html',
        controller: 'TableslistCtrl',
        controllerAs: 'tablesList'
      })
      .when('/idades', {
        templateUrl: 'views/ages.html',
        controller: 'AgesCtrl',
        controllerAs: 'ages'
      })
      .when('/profissoes', {
        templateUrl: 'views/professions.html',
        controller: 'ProfessionsCtrl',
        controllerAs: 'professions'
      })
      .when('/profissoes/relacionar', {
        templateUrl: 'views/professionslist.html',
        controller: 'ProfessionslistCtrl',
        controllerAs: 'professionsList'
      })
      .when('/idades/relacionar', {
        templateUrl: 'views/ageslist.html',
        controller: 'AgeslistCtrl',
        controllerAs: 'agesList'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.hashPrefix('');
  });
