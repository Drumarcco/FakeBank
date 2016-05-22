'use strict';

/**
 * @ngdoc function
 * @name fakeBankApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the fakeBankApp
 */
angular.module('fakeBankApp')
  .controller('DashboardCtrl', function ($scope, Auth, ACCESS_LEVELS) {
    $scope.username = Auth.getUser().username;
    $scope.isAuthorized = Auth.isAuthorized;
    $scope.ROLES = ACCESS_LEVELS;
  });
