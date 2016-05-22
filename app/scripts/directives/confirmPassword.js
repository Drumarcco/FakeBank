(function() {
  'use strict';
  angular.module('fakeBankApp').directive('confirmPassword', function() {
    return {
      require: 'ngModel',
      scope: {
        reference: '=confirmPassword'
      },
      link: function (scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          var noMatch = viewValue !== scope.reference;
          ctrl.$setValidity('noMatch', !noMatch);
          return viewValue;
        });

        scope.$watch('reference', function(value) {
          ctrl.$setValidity('noMatch', value === ctrl.$viewValue);
        });
      }
    };
  });
})();
