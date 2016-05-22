(function() {
  'use strict';
  angular.module('fakeBankApp').factory('Account', Account);

  function Account($http, Auth, basePath, $location, ACCESS_LEVELS) {
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
        var role = getRoleLevel(data.role);
        Auth.setUser({
          username: user.username,
          token: 'Bearer ' + data.access_token,
          role: role
        });

        $location.path('/dashboard');

        function getRoleLevel(role) {
          switch (role) {
            case '45c79d52-6ffa-4a06-a110-20044de62043': return ACCESS_LEVELS.employee;
            case '5b39f271-737f-435a-92ae-13e1d6fbd687': return ACCESS_LEVELS.moralPerson;
            default: return ACCESS_LEVELS.pub;
          }
        }
      });
    }
  }
})();