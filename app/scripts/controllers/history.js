(function() {
  'use strict';
  angular.module('fakeBankApp').controller('HistoryCtrl', HistoryCtrl);

  function HistoryCtrl($scope, Account) {
    $scope.AccountId = '';
    $scope.getTransactions = function() {
      Account.getHistory($scope.AccountId).then(function(response){
        console.log(response.data);
        $scope.transactions = response.data;
      });
    };

    Account.getAll().then(function(response) {
      $scope.accounts = response.data;
    });
  }
})();
