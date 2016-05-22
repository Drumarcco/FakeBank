(function() {
  'use strict';
  angular.module('fakeBankApp')
    .filter('removeSpaces', [function() {
      return function(string) {
        if (!angular.isString(string)) {
          return string;
        }
        return string.replace(/[\s]/g, '');
      };
    }])
    .filter('creditCard', [
      function() {
        return function(string) {
          if (!angular.isString(string)) {
            return string;
          }
          var output = '';
          for (var i=0; i<string.length; i++) {
            if ((i % 4) === 0 && i!==0) { output += '-'; }
            output += string[i];
          }
          return output;
        };
      }
    ]);
})();
