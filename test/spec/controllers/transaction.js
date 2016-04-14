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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TransactionCtrl.awesomeThings.length).toBe(3);
  });
});
