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
    .controller('AppCtrl', function($scope, $mdSidenav) {
      $scope.toggleSidenav = function() {
        $mdSidenav('sidenav').toggle();
      };
    });
})();
