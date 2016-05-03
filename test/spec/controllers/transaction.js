'use strict';

describe('Controller: TransactionCtrl', function () {

  // load the controller's module
  beforeEach(module('fakeBankApp'));

  var TransactionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransactionCtrl = $controller('TransactionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
