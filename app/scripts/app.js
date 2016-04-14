'use strict';

/**
 * @ngdoc overview
 * @name fakeBankApp
 * @description
 * # fakeBankApp
 *
 * Main module of the application.
 */
angular
  .module('fakeBankApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/transaction', {
        templateUrl: 'views/transaction.html',
        controller: 'TransactionCtrl'
      })
      .when('/contract', {
        templateUrl: 'views/contract.html',
        controller: 'ContractCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('green');

    $mdThemingProvider.theme('docs-teal', 'default')
      .primaryPalette('light-green');
  });
