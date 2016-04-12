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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
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
