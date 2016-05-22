'use strict';

/**
 * @ngdoc function
 * @name fakeBankApp.controller:ApiCtrl
 * @description
 * # ApiCtrl
 * Controller of the fakeBankApp
 */
angular.module('fakeBankApp')
  .controller('ApiCtrl', function ($scope, Account, basePath) {
    $scope.Token = '';
    $scope.AccountId = '';
    $scope.basePath = basePath;

    $scope.getToken = function() {
      Account.getToken($scope.AccountId).then(function(response) {
        $scope.Token = response.data.Token;
      });
    };

    Account.getAll().then(function(response) {
      $scope.accounts = response.data;
    });
  });
