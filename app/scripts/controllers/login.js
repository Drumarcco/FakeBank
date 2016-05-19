'use strict';

/**
 * @ngdoc function
 * @name fakeBankApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the fakeBankApp
 */
angular.module('fakeBankApp')
  .controller('LoginCtrl', function ($scope, Account) {
    $scope.login = login;
    $scope.user = {
      username: '',
      password: ''

    };

    function login(){
      Account.login($scope.user);
    }
  });
