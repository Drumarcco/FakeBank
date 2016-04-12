'use strict';

/**
 * @ngdoc function
 * @name fakeBankApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fakeBankApp
 */
angular.module('fakeBankApp')
  .controller('MainCtrl', function($scope, $anchorScroll) {
    $scope.plans = [{
      id: 1,
      title: 'Persona Física',
      description: '¿Necesitas una cuenta personal?',
      imgSrc: 'images/man.jpg'
    }, {
      id: 2,
      title: 'Persona Moral',
      description: 'La cuenta bancaria que se adapta a las necesidades de tu negocio',
      imgSrc: 'images/business-woman.jpg'
    }];

    $scope.partner = {
      plan: {},
      name: '',
      email: '',
      phone: ''
    };

    $scope.goToPlans = function() {
      $anchorScroll('plans');
    };

    $scope.selectPlan = function(plan) {
      $scope.partner.plan = plan;
      $anchorScroll('signup');
    };
  });
