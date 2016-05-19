'use strict';

/**
 * @ngdoc function
 * @name fakeBankApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fakeBankApp
 */
angular.module('fakeBankApp')
  .controller('MainCtrl', function($scope, $anchorScroll, PreSignup) {
    $scope.registered = false;
    $scope.register = register;
    $scope.goToPlans = goToPlans;
    $scope.selectPlan = selectPlan;
    $scope.plans = [{
      id: 'F6A21D99-1075-46D6-81A0-EBF7291D9B9B',
      title: 'Persona Física',
      description: '¿Necesitas una cuenta personal?',
      imgSrc: 'images/man.jpg'
    }, {
      id: 'DBC78927-8D49-4506-B876-833989CEB2B9',
      title: 'Persona Moral',
      description: 'La cuenta bancaria que se adapta a las necesidades de tu negocio',
      imgSrc: 'images/business-woman.jpg'
    }];

    $scope.partner = {
      IdAccountType: '',
      UserName: '',
      FirstLastName: '',
      SecondLastName: '',
      Email: '',
      PhoneNumber: ''
    };

    function register() {
      if ($scope.preSignup.$valid) {
        PreSignup.post($scope.partner).then(function() {
          $scope.registered = true;
        });
      }
    }

    function goToPlans() {
      $anchorScroll('plans');
    }

    function selectPlan(planId) {
      $scope.partner.IdAccountType = planId;
      $anchorScroll('signup');
    }
  });
