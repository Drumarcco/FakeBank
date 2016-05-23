'use strict';

/**
 * @ngdoc overview
 * @name fakeBankApp
 * @description
 * # fakeBankApp
 *
 * Main module of the application.
 */
angular
  .module('fakeBankApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngMaterial',
    'ngCookies',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, ACCESS_LEVELS) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        access_level: ACCESS_LEVELS.pub
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        access_level: ACCESS_LEVELS.pub
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        access_level: ACCESS_LEVELS.pub
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        access_level: ACCESS_LEVELS.physicalPerson
      })
      .when('/transaction', {
        templateUrl: 'views/transaction.html',
        controller: 'TransactionCtrl',
        access_level: ACCESS_LEVELS.physicalPerson
      })
      .when('/contracts', {
        templateUrl: 'views/contracts.html',
        controller: 'ContractsCtrl',
        access_level: ACCESS_LEVELS.employee
      })
      .when('/contracts/:id', {
        templateUrl: 'views/contract.html',
        controller: 'ContractCtrl',
        access_level: ACCESS_LEVELS.employee
      })
      .when('/api', {
        templateUrl: 'views/api.html',
        controller: 'ApiCtrl',
        access_level: ACCESS_LEVELS.moralPerson
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl',
        access_level: ACCESS_LEVELS.physicalPerson
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        access_level: ACCESS_LEVELS.physicalPerson
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    var interceptor =
    function($q, $rootScope, Auth) {
      return {
        'response': function(resp) {
          if (resp.config.url === '/api/login') {
            Auth.setToken(resp.data.token);
          }
          return resp;
        },
        'responseError': function(rejection) {
          // Handle Errors
          switch(rejection.status) {
            case 401:
              if (rejection.config.url !== 'api/login') {
                $rootScope.$broadcast('auth:loginRequired');
              }
              break;

            case 403:
              $rootScope.$broadcast('auth:forbidden');
              break;

            case 404:
              $rootScope.$broadcast('page:notFound');
              break;

            case 500:
              $rootScope.$broadcast('server:error');
              break;
          }

          return $q.reject(rejection);
        },
        'request': function(req) {
          req.headers = req.headers || {};
          if (!req.headers.Authorization) {
            req.headers.Authorization = Auth.getToken();
          }
          return req;
        },
        'requestError': function(reqErr) {
          return reqErr;
        }
      };
    };

    $httpProvider.interceptors.push(interceptor);
  })
  .run(function($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart',
    function(evt, next) {
      var nextPath = next.$$route.originalPath;
      if ((nextPath === '/login' || nextPath === '/') && Auth.isLoggedIn()) {
        $location.path('/dashboard');
      }

      if (!Auth.isAuthorized(next.$$route.access_level)) {
        if (Auth.isLoggedIn()) {
          $location.path('/dashboard');
        } else {
          $location.path('/login');
        }
      }
    });
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('green');

    $mdThemingProvider.theme('docs-teal', 'default')
      .primaryPalette('light-green');
  })
  .value('basePath', 'http://localhost:51016/');
