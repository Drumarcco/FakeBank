(function() {
  'use strict';

  angular.module('fakeBankApp').factory('PreSignup', PreSignup);

  function PreSignup($http, basePath) {
    return {
      post: post,
      getAll: getAll,
      get: get
    };

    function post(data) {
      return $http.post(basePath + 'api/PreRegistration', data);
    }

    function get(id) {
      return $http.get(basePath + 'api/PreRegistration/' + id);
    }

    function getAll() {
      return $http.get(basePath + 'api/PreRegistration');
    }
  }
})();
