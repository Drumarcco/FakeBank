'use strict';

/**
 * @ngdoc function
 * @name fakeBankApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the fakeBankApp
 */
angular.module('fakeBankApp')
  .controller('DashboardCtrl', function ($scope, $rootScope, Auth, ACCESS_LEVELS) {
    $scope.isAuthorized = Auth.isAuthorized;
    $scope.ROLES = ACCESS_LEVELS;
  });
