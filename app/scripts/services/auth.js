(function() {
  'use strict';
  angular.module('fakeBankApp').factory('Auth', AuthService);

  function AuthService($cookies, ACCESS_LEVELS) {
    var _user = $cookies.get('user');

    return {
      isAuthorized: isAuthorized,
      setUser: setUser,
      isLoggedIn: isLoggedIn,
      getUser: getUser,
      getId: getId,
      getToken: getToken,
      logout: logout,
    };

    function logout() {
      $cookies.remove('user');
      _user = null;
    }

    function getToken() {
      return _user ? _user.token : '';
    }

    function getId() {
      return _user ? _user._id : null;
    }

    function getUser() {
      return _user;
    }

    function isLoggedIn() {
      return _user ? true : false;
    }

    function isAuthorized(lvl) {
      if (lvl === 1) { return true; }
      if (!_user) { return false; }
      return _user.role >= lvl;
    }

    function setUser(user) {
      if (!user.role || user.role < 0) {
        user.role = ACCESS_LEVELS.pub;
      }
      _user = user;
      $cookies.put('user', _user);
    }
  }
})();
