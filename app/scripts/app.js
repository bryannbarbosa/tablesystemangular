'use strict';

/**
 * @ngdoc overview
 * @name amazonasApp
 * @description
 * # amazonasApp
 *
 * Main module of the application.
 */
angular.module('amazonasApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ngValid',
  'LocalStorageModule'
]).config(function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/auth.html',
    controller: 'AuthCtrl',
    controllerAs: 'auth',
    data : {
      navbar: false
    }
  }).when('/tabelas/listar', {
    templateUrl: 'views/tableslist.html',
    controller: 'TableslistCtrl',
    controllerAs: 'tablesList'
  }).when('/idades', {
    templateUrl: 'views/ages.html',
    controller: 'AgesCtrl',
    controllerAs: 'ages'
  }).when('/profissoes', {
    templateUrl: 'views/professions.html',
    controller: 'ProfessionsCtrl',
    controllerAs: 'professions'
  }).when('/profissoes/relacionar', {
    templateUrl: 'views/professionslist.html',
    controller: 'ProfessionslistCtrl',
    controllerAs: 'professionsList'
  }).when('/idades/relacionar', {
    templateUrl: 'views/ageslist.html',
    controller: 'AgeslistCtrl',
    controllerAs: 'agesList'
  }).when('/principal', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  }).when('/sair', {
    templateUrl: 'views/logout.html',
    controller: 'LogoutCtrl',
    controllerAs: 'logout'
  }).otherwise({redirectTo: '/'});
  $locationProvider.hashPrefix('');
  $httpProvider.interceptors.push('BearerAuthInterceptor');
});

angular.module('amazonasApp').run(function($rootScope, $location, localStorageService) {
  $rootScope.$on("$routeChangeStart", function(event, next, current, $route) {
    $rootScope.path = $location.path();
    if (localStorageService.get('token') == null) {
      $location.path('/');
    }
  });
});
