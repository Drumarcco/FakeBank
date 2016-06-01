/**
 * @ngdoc function
 * @name fakeBankApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the fakeBankApp
 */

(function() {
  'use strict';
  angular.module('fakeBankApp')
    .controller('AppCtrl', function($rootScope, $scope, $mdSidenav, Auth, $location) {
      if (Auth.isLoggedIn()) {
        $rootScope.username = Auth.getUser().username;
      }

      $scope.toggleSidenav = function() {
        $mdSidenav('sidenav').toggle();
      };

      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.logout = function() {
        Auth.logout();
        $location.path('/');
      };
    });
})();
