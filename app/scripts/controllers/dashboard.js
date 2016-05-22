'use strict';

/**
 * @ngdoc function
 * @name fakeBankApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the fakeBankApp
 */
angular.module('fakeBankApp')
  .controller('DashboardCtrl', function ($scope, Auth) {
    $scope.username = Auth.getUser().username;
  });
