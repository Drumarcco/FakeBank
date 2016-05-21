(function() {
  'use strict';
  angular.module('fakeBankApp').factory('Account', Account);

  function Account($http, Auth, basePath, $location) {
    return {
      login: login
    };

    function login(user) {
      var data = 'grant_type=password&username=' + user.username +
        '&password=' + user.password;
      $http.post(basePath + 'Token', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function(response) {
        var data = response.data;
        Auth.setUser({
          token: 'Bearer ' + data.access_token,
        });
        $location.path('/dashboard');
      });
    }
  }
})();
