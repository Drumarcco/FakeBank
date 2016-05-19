(function() {
  'use strict';

  angular.module('fakeBankApp').factory('PreSignup', PreSignup);

  function PreSignup($http, basePath) {
    return {
      post: post
    };

    function post(data) {
      return $http.post(basePath + 'api/PreRegistration', data);
    }
  }
})();
