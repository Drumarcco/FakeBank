'use strict';

/**
 * @ngdoc function
 * @name fakeBankApp.controller:TransactionCtrl
 * @description
 * # TransactionCtrl
 * Controller of the fakeBankApp
 */
angular.module('fakeBankApp')
  .controller('TransactionCtrl', function ($scope, Account, $mdToast, $location) {
    $scope.transaction = {
      CardNumber: '',
      IdAccount: '',
      Amount: 0
    };

    $scope.accounts = [];

    $scope.transfer = function() {
      Account.transfer($scope.transaction).then(function() {
        $mdToast.showSimple('Transferncia exitosa.');
        $location.path('/');
      });
    };

    $scope.updateBalance = function() {
      Account.getBalance($scope.transaction.IdAccount).then(
        function(balance) {
          $scope.balance = balance;
        }
      );
    };

    Account.getAll().then(function(response) {
      $scope.accounts = response.data;
    });
  });
