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
    .controller('AppCtrl', function($scope, $mdSidenav, Auth, $location) {
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
