(function() {
  'use strict';
  angular.module('fakeBankApp').controller('ContractsCtrl', ContractsCtrl);

  function ContractsCtrl($scope, PreSignup) {
    $scope.preSignups = [];

    PreSignup.getAll().then(function(response) {
      $scope.preSignups = response.data;
    });
  }
})();
