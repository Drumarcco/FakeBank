'use strict';

describe('Controller: ContractCtrl', function () {

  // load the controller's module
  beforeEach(module('fakeBankApp'));

  var ContractCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContractCtrl = $controller('ContractCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
