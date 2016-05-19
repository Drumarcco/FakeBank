(function() {
  'use strict';
  angular.module('fakeBankApp')
    .constant('ACCESS_LEVELS', {
      pub: 1,
      physicalPerson: 2,
      moralPerson: 3,
      employee: 4
    });
})();
