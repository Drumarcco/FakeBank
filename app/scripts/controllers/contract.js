'use strict';

/**
 * @ngdoc function
 * @name fakeBankApp.controller:ContractCtrl
 * @description
 * # ContractCtrl
 * Controller of the fakeBankApp
 */
angular.module('fakeBankApp')
  .controller('ContractCtrl', function ($scope, $routeParams, PreSignup, Contract, $mdToast, $location) {
    $scope.preSignup = {};
    $scope.contract = {
      IdPreRegistration: $routeParams.id,
      Gender: false,
      Rfc: '',
      BirthDate: new Date(),
      Password: '',
      ConfirmPassword: ''
    };

    $scope.signUp = function() {
      console.log($scope.contract);
      if ($scope.contractForm.$valid) {
        $scope.contract.Gender = Boolean($scope.contract.Gender);
        Contract.post($scope.contract).then(function() {
          $mdToast.showSimple('Registro Guardado Exitosamente');
          $location.path('/contracts');
        });
      }
    };

    PreSignup.get($scope.contract.IdPreRegistration).then(function(response) {
      $scope.preSignup = response.data;
    });
  });
