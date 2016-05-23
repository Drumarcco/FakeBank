(function(){
  'use strict';
  angular.module('fakeBankApp').controller('ProfileCtrl', ProfileCtrl);

  function ProfileCtrl($scope, Account) {
    $scope.accounts = [];

    Account.getAll().then(function(response) {
      $scope.accounts = response.data;
      $scope.accounts.forEach(function(account) {
        Account.getCard(account.Id).then(function(response) {
          account.Card = response.data;
        });
      });
    });
  }
})();
