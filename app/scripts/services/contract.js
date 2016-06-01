(function() {
  'use strict';
  angular.module('fakeBankApp').factory('Contract', Contract);

  function Contract(basePath, $http) {
    return {
      post: post
    };

    function post(contract) {
      return $http.post(basePath + 'api/Account/Register', contract);
    }
  }
})();
