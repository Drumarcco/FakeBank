(function() {
  'use strict';
  
  angular.module('fakeBankApp').constant('BOOLS', {
    gender: {
      male: true,
      female: false
    },
    accountType: {
      moral: true,
      physical: false
    }
  });
})();
